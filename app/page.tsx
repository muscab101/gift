"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lock, Unlock, Sparkles, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const [isUnlocked, setIsUnlocked] = useState(false);
  
  // TEST MODE: Wuxuu dhacayaa 5 daqiiqo ka dib marka bogga la furo
  // Waxaan isticmaalnaa useState si uusan waqtigu isu beddelin markasta oo bogga la refresh gareeyo inta lagu jiro tijaabada
  const [targetDate] = useState(() => new Date().getTime() + 5 * 60 * 1000);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setIsUnlocked(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] flex flex-col items-center justify-center p-6 relative overflow-hidden font-['Outfit',sans-serif]">
      
      {/* Background Decor */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 opacity-10"
      >
        <Heart className="text-rose-400" size={100} />
      </motion.div>
      <div className="absolute bottom-10 right-10 opacity-10 rotate-45">
        <Sparkles className="text-rose-400" size={100} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white/70 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border-4 border-white text-center relative z-10"
      >
        {/* Status Icon */}
        <div className="mb-8 flex justify-center">
          <motion.div 
            animate={isUnlocked ? { scale: [1, 1.2, 1] } : {}}
            className={`p-8 rounded-full ${isUnlocked ? "bg-green-100 shadow-green-200" : "bg-rose-100 shadow-rose-200"} shadow-2xl transition-colors duration-700`}
          >
            {isUnlocked ? (
              <Unlock className="text-green-500 size-14 animate-bounce" />
            ) : (
              <Lock className="text-rose-500 size-14" />
            )}
          </motion.div>
        </div>

        <h1 className="text-4xl font-black text-slate-800 mb-3 tracking-tight">
          {isUnlocked ? "Waa Laguu Fasaxay!" : "Waa Xiran Yahay"}
        </h1>
        <p className="text-slate-500 mb-10 font-medium italic">
          {isUnlocked 
            ? "Guji badanka hoose si aad u furto hadiyaddaada 🌸" 
            : "Hadiyaddaadu waxay furmi doontaa 5 daqiiqo ka dib..."}
        </p>

        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div 
              key="timer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-rose-500 text-white p-5 rounded-3xl shadow-lg border-b-4 border-rose-700">
                <div className="text-4xl font-black leading-none">{timeLeft.minutes}</div>
                <div className="text-[10px] uppercase font-bold mt-1 tracking-widest opacity-80">Daqiiqo</div>
              </div>
              <div className="bg-rose-400 text-white p-5 rounded-3xl shadow-lg border-b-4 border-rose-600">
                <div className="text-4xl font-black leading-none">{timeLeft.seconds}</div>
                <div className="text-[10px] uppercase font-bold mt-1 tracking-widest opacity-80">Ilbiriqsi</div>
              </div>
            </motion.div>
          ) : (
            <motion.button
              key="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/dashboard")}
              className="w-full bg-gradient-to-r from-rose-500 to-rose-400 text-white font-black py-5 rounded-3xl shadow-[0_10px_20px_rgba(244,63,94,0.3)] flex items-center justify-center gap-4 text-xl transition-all"
            >
              FURI HADIYADDA <Unlock size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-2 text-rose-300">
          <Clock size={16} className="animate-spin-slow" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase italic">
            Test Mode Active
          </span>
        </div>
      </motion.div>

      {/* Footer Label */}
      <footer className="absolute bottom-8 text-slate-400 text-[10px] font-bold tracking-widest uppercase">
        Special Gift for Rimaas • 2026
      </footer>
    </div>
  );
}