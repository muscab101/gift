"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const characters = text.split("");
  
  return (
    <motion.span>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.02,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function HistoryPage() {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFullText(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 opacity-20"><Sparkles className="text-rose-300 size-20" /></div>
      <div className="absolute bottom-10 right-10 opacity-20"><Heart className="text-rose-300 size-32 fill-rose-100" /></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Back Button */}
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-8 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-sm transition-all font-normal">
            <ArrowLeft className="mr-2 size-4" /> Ku laabo Dashboard
          </Button>
        </Link>

        {/* The Letter Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-sm shadow-sm relative border-t-[20px] border-rose-400 overflow-hidden min-h-[600px] border-x border-b border-rose-100"
        >
          {/* Heart Seal */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 p-2 rounded-full shadow-md border-2 border-white z-20">
            <Heart className="text-white fill-white size-4" />
          </div>

          <div className="p-8 md:p-16 text-slate-700 relative z-10">
            
            <h1 className="text-3xl font-normal text-rose-500 text-center mb-12">
              Happy Birthday <span className="text-rose-600">Boqoradeyda</span> ❤️
            </h1>

            {showFullText && (
              <div className="space-y-8 text-lg font-normal leading-relaxed">
                <p>
                  <Typewriter text="Waxaan rabaa in hadiyaddan yar ee qalbigayga ka timid inaa kuu siiyo. meshaan waxa ku qoran history kusaabsan adiga iyo aniga Waxana aad u jeclahay inaan kaaga sheekeeyo markii aan is baranay iyo sida aan ku arkay markii ugu horreysay." />
                </p>

                <p>
                  <Typewriter delay={5} text="Waxaad ahayd gabar qurux badan, deggan, oo ixtiraam badan. Aragtideydii ugu horreysay, waxaan kugu arkay markii aan school‑ka ku cusbaa. Markaas ka dia, waxaan jeclaan jiray inaan maalin walba kugu arko school‑ka, sababtoo ah aad ayaan u xiisayn jiray inaan arko indhahaaga quruxda badan iyo dhoolla‑caddayntaada." />
                </p>

                <p>
                  <Typewriter delay={12} text="Marnaba ma illoobi doono maalintaas; waa maalintii aan arkay qofkii nolosheyda midab u yeeli lahaa, isla markaana ii bari lahaa waxyaabo badan oo waqtigaas aanan aqoon. Alxamdulillah waxayna u dhacday sidii aan Ilaahay uga baryay in uu adiga ii kaasiiyo." />
                </p>

                {/* Promise Section */}
                <div className="space-y-6 pt-6 border-l-2 border-rose-200 pl-6 bg-rose-50/30 rounded-sm mt-12">
                  <h2 className="text-xl font-normal text-rose-500">- Marwalba Garabkaaga Ahay</h2>
                  <p className="font-normal text-slate-600">
                    <Typewriter delay={20} text="Boqoradeyda, waxaan rabaa inaad mar walba ogaato in aan adiga kuu garab taaganahay, xitaa mararka aaysan jirin qof ku aaminto ama ku fahanto. Jacaylka aan kuu qabo maku xirna maalmo ama xiiso — waa dareen joogto ah oo aan xadlaheen." />
                  </p>
                </div>

                {/* Closing */}
                <div className="text-center pt-12 space-y-4">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 28 }}
                    className="text-xl font-normal text-rose-600"
                  >
                    Haa, waan ku jeclahay — jacayl kalsooni leh oo aan dhammaanayn. 
                  </motion.p>
                  
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 30 }}
                    className="text-2xl font-normal text-slate-800"
                  >
                    Happy Birthday, darling 🎂
                  </motion.h3>
                  
                  <div className="flex justify-center gap-4 pt-4">
                    <Star className="text-yellow-400 fill-yellow-400 size-5 animate-pulse" />
                    <Heart className="text-rose-500 fill-rose-500 size-6 animate-bounce" />
                    <Star className="text-yellow-400 fill-yellow-400 size-5 animate-pulse" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Footer-ka aad codsatay */}
        <div className="flex justify-center mt-12">
          <footer className="text-slate-400 text-[10px] uppercase tracking-widest font-normal text-center">
            Special Gift for Rimaas
          </footer>
        </div>
      </div>
    </div>
  );
}