"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Gift, BookOpen, Music, Heart, Sparkles, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import confetti from "canvas-confetti";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const router = useRouter(); 

  const cards = [
    { id: "mail", title: "Warqad yar", icon: <Mail size={40} />, color: "bg-white" },
    { id: "gift", title: "Gift", icon: <Gift size={40} />, color: "bg-white" },
    { id: "book", title: "History-geena", icon: <BookOpen size={40} />, color: "bg-white" },
    { id: "music", title: "Heestada", icon: <Music size={40} />, color: "bg-white" },
  ];

  const handleCardClick = (id: string) => {
    if (id === "book") {
      router.push("/history");
      return;
    }

    if (id === "music") {
      router.push("/song");
      return;
    }

    setActiveTab(id);
    
    if (id === "gift") {
      confetti({ 
        particleCount: 150, 
        spread: 70, 
        origin: { y: 0.6 },
        colors: ["#fb7185", "#ffffff", "#ffe4e6"] 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] p-6 relative overflow-hidden font-sans flex flex-col items-center justify-center">
      
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 opacity-20 rotate-12"><Heart size={100} className="text-rose-300" /></div>
      <div className="absolute bottom-10 left-10 opacity-20 -rotate-12"><Sparkles size={100} className="text-rose-300" /></div>

      <header className="text-center mb-12 mt-10 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-normal text-slate-800"
        >
          Welcome <span className="text-rose-400 font-bold">Rimaas</span> this is your gift🌸
        </motion.h1>
        <p className="text-slate-500 mt-4 text-sm max-w-md mx-auto leading-relaxed font-normal">
          Waad wada furi kartaa hada hadii aad rabto sababtoo ah waxaad soo furtay password-kii adkaa
        </p>
      </header>

      {/* Grid Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto z-10 relative mb-20">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCardClick(card.id)}
          >
            <Card className="bg-white border-rose-100 shadow-sm cursor-pointer h-52 flex flex-col items-center justify-center space-y-4 hover:border-rose-300 transition-all rounded-sm relative overflow-hidden group border-2">
              <div className="text-rose-400 relative z-10">
                {card.icon}
              </div>
              <h3 className="text-2xl font-normal text-slate-700 relative z-10">
                {card.title}
              </h3>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer-ka aad codsatay */}
      <footer className="absolute bottom-8 text-slate-400 text-[10px] uppercase tracking-widest font-normal">
        Special Gift for Rimaas
      </footer>

      {/* Pop-up Modals */}
      <AnimatePresence>
        {activeTab && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="bg-white rounded-sm p-8 max-w-lg w-full shadow-xl relative border border-rose-100"
            >
              <button 
                onClick={() => setActiveTab(null)} 
                className="absolute top-5 right-5 text-slate-400 hover:text-rose-500 p-2"
              >
                <X size={24} />
              </button>

              {activeTab === "mail" && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-rose-50 rounded-sm flex items-center justify-center mx-auto">
                    <Mail className="text-rose-400" size={32} />
                  </div>
                  <h2 className="text-2xl font-normal text-slate-800">Warqadaada</h2>
                  <div className="bg-rose-50/30 p-6 rounded-sm text-slate-600 leading-relaxed text-md font-normal">
                    "Boqoradeyda Rimaas, maanta waa maalin aad iigu weyn. Sababtoo ah waxaa aduunka ku soo biiray adiga. Waxaad tahay qofka nolosheyda u iftiimiyay sida qoraxda."
                  </div>
                  <Heart className="mx-auto text-rose-500 fill-rose-500 size-6 animate-pulse" />
                </div>
              )}

              {activeTab === "gift" && (
                <div className="text-center space-y-6">
                  <Gift className="mx-auto text-rose-400" size={60} />
                  <h2 className="text-2xl font-normal text-slate-800">The Best Gift</h2>
                  <p className="text-slate-600 text-md font-normal leading-relaxed">
                    Waxaa Gift kaaga dhigay qalbigeyga iyo wax walbo oo aniga igu saabsan, sababtoo ah adiga ayaa ah qofka kaliya ee mudan! ❤️
                  </p>
                  <Heart size={40} className="mx-auto text-rose-500 fill-rose-500 animate-pulse" />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}