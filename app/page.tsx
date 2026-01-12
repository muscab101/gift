"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lock, Unlock, Sparkles, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const [isUnlocked, setIsUnlocked] = useState(false);
  
  // TEST MODE: 30 Ilbiriqsi oo kaliya (30 * 1000 ms)
  const [targetDate] = useState(() => new Date().getTime() + 30 * 1000);

  const [timeLeft, setTimeLeft] = useState({
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
        setTimeLeft({ minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
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
      <div className="absolute top-10 left-10 opacity-10 rotate-12"><Heart className="text-rose-400" size={100} /></div>
      <div className="absolute bottom-10 right-10 opacity-10 -rotate-12"><Sparkles className="text-rose-400" size={100} /></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border-4 border-white text-center relative z-10"
      >
        {/* Status Icon */}
        <div className="mb-8 flex justify-center">
          <motion.div 
            className={`p-8 rounded-full ${isUnlocked ? "bg-green-100" : "bg-rose-100"} shadow-xl transition-colors duration-700`}
          >
            {isUnlocked ? (
              <Unlock className="text-green-500 size-14 animate-bounce" />
            ) : (
              <Lock className="text-rose-500 size-14" />
            )}
          </motion.div>
        </div>

        <h1 className="text-3xl font-black text-slate-800 mb-3 uppercase tracking-tight">
          {isUnlocked ? "Waa Laguu Fasaxay!" : "Sug 30 Ilbiriqsi"}
        </h1>
        <p className="text-slate-500 mb-10 font-medium italic">
          {isUnlocked 
            ? "Gacalisay, hadiyaddaadii waa diyaar 🌸" 
            : "Tijaabada waxay dhamaanaysaa wax yar ka dib..."}
        </p>

        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div 
              key="timer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex justify-center gap-4 mb-8"
            >
              <div className="bg-rose-500 text-white w-24 p-5 rounded-3xl shadow-lg border-b-4 border-rose-700">
                <div className="text-4xl font-black">{timeLeft.seconds}</div>
                <div className="text-[10px] uppercase font-bold opacity-80">Seconds</div>
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
              className="w-full bg-gradient-to-r from-rose-500 to-rose-400 text-white font-black py-5 rounded-3xl shadow-xl flex items-center justify-center gap-4 text-xl transition-all"
            >
              FURI HADIYADDA <Unlock size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-2 text-rose-300">
          <Clock size={16} className="animate-pulse" />
          <span className="text-[10px] font-black tracking-widest uppercase italic">
            30 Sec Test Mode
          </span>
        </div>
      </motion.div>

      <footer className="absolute bottom-8 text-slate-400 text-[10px] font-bold tracking-widest uppercase">
        Special Gift for Rimaas ❤️
      </footer>
    </div>
  );
}