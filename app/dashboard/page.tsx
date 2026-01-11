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
    { id: "gift", title: "Gift ", icon: <Gift size={40} />, color: "bg-white" },
    { id: "book", title: "History-geena", icon: <BookOpen size={40} />, color: "bg-white" },
    { id: "music", title: "Heestada", icon: <Music size={40} />, color: "bg-white" },
  ];

  const handleCardClick = (id: string) => {
    // 1. Haddii la taabto History, u gudbi /history
    if (id === "book") {
      router.push("/history");
      return;
    }

    // 2. Haddii la taabto Music, u gudbi /song (Kani waa isbeddelka aad rabtay)
    if (id === "music") {
      router.push("/song");
      return;
    }

    // 3. Inta kale (Mail & Gift) modal ahaan u fur
    setActiveTab(id);
    
    // Haddii ay tahay Gift, shid confetti-ga
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
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] p-6 relative overflow-hidden font-['Outfit',sans-serif]">
      
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 opacity-20 rotate-12"><Heart size={100} className="text-rose-300" /></div>
      <div className="absolute bottom-10 left-10 opacity-20 -rotate-12"><Sparkles size={100} className="text-rose-300" /></div>

      <header className="text-center mb-12 mt-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-800"
        >
          Welcome <span className="text-rose-400">Rimaas</span> this is your gift🌸
        </motion.h1>
        <p className="text-slate-500 mt-4 text-sm max-w-md mx-auto leading-relaxed ">
          Waad wada furi kartaa hada hadii aad rabto sababtoo ah waxaad soo furtay password-kii adkaa
        </p>
      </header>

      {/* Grid Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto z-10 relative">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCardClick(card.id)}
          >
            <Card className="bg-white border-rose-100 shadow-xl cursor-pointer h-52 flex flex-col items-center justify-center space-y-4 hover:border-rose-300 transition-all rounded-3xl relative overflow-hidden group border-2">
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-rose-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              
              <div className="text-rose-400 relative z-10 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-700 relative z-10">
                {card.title}
              </h3>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pop-up Modals (Wuxuu u furaa kaliya Mail iyo Gift) */}
      <AnimatePresence>
        {activeTab && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative border border-rose-100"
            >
              <button 
                onClick={() => setActiveTab(null)} 
                className="absolute top-5 right-5 text-slate-400 hover:text-rose-500 transition-colors p-2 hover:bg-rose-50 rounded-full"
              >
                <X size={24} />
              </button>

              {activeTab === "mail" && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="text-rose-400" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Warqadaada</h2>
                  <div className="bg-rose-50/50 p-8 rounded-2xl text-slate-700 leading-loose  text-lg border border-rose-100">
                    "Boqoradeyda Rimaas, maanta waa maalin aad iigu weyn. Sababtoo ah waxaa aduunka ku soo biiray adiga. Waxaad tahay qofka nolosheyda u iftiimiyay sida qoraxda."
                  </div>
                  <Heart className="mx-auto text-rose-500 fill-rose-500 size-8 animate-bounce" />
                </div>
              )}

              {activeTab === "gift" && (
                <div className="text-center space-y-6">
                  <motion.div 
                    animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Gift className="mx-auto text-rose-400" size={70} />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-slate-800">The Best Gift</h2>
                  <p className="text-slate-600 text-lg">
                    Waxaa Gift kaaga dhigay qalbigeyga iyo wax walbo oo aniga igu saabsan, sababtoo ah adiga ayaa ah qofka kaliya ee mudan! ❤️
                  </p>
                  <div className="pt-4">
                    <Heart size={50} className="mx-auto text-rose-500 fill-rose-500 animate-pulse" />
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="text-center mt-16 text-slate-400 text-sm font-medium">
        Si gaar ah loogu sameeyay Rimaas ❤️ 2026
      </footer>
    </div>
  );
}