"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lock, Unlock, Sparkles, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const [isUnlocked, setIsUnlocked] = useState(false);
  
  // HALKAN KU DHIG TAARIIXDA AAD RABTO INUU WEBSITE-KA FURMO
  // Tusaale: January 15, 2026, 12:00:00 AM
  const targetDate = new Date("2026-01-15T00:00:00").getTime();

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
    <div className="min-h-screen bg-[#FFF0F5] flex flex-col items-center justify-center p-6 relative overflow-hidden font-['Outfit',sans-serif]">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 opacity-20"><Heart className="text-rose-300" size={80} /></div>
      <div className="absolute bottom-10 right-10 opacity-20"><Sparkles className="text-rose-300" size={80} /></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-lg p-10 rounded-[3rem] shadow-2xl border-4 border-white text-center relative z-10"
      >
        <div className="mb-6 flex justify-center">
          <div className={`p-6 rounded-full ${isUnlocked ? "bg-green-100" : "bg-rose-100"} transition-colors duration-500`}>
            {isUnlocked ? (
              <Unlock className="text-green-500 size-12 animate-bounce" />
            ) : (
              <Lock className="text-rose-500 size-12" />
            )}
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
          {isUnlocked ? "Waa Laguu Fasaxay!" : "Waa Xiran Yahay"}
        </h1>
        <p className="text-slate-500 mb-8 font-light italic">
          {isUnlocked 
            ? "Hadiyaddaadii waa diyaar, gacalisay." 
            : "Hadiyaddaada wali waqti baa ka haray, sug in yar..."}
        </p>

        {!isUnlocked ? (
          /* COUNTDOWN CARD */
          <div className="grid grid-cols-4 gap-2 mb-8">
            {[
              { label: "Maalin", value: timeLeft.days },
              { label: "Saac", value: timeLeft.hours },
              { label: "Daqiiqo", value: timeLeft.minutes },
              { label: "Ilbiriqsi", value: timeLeft.seconds },
            ].map((item, i) => (
              <div key={i} className="bg-rose-500 text-white p-3 rounded-2xl shadow-lg">
                <div className="text-xl font-bold">{item.value}</div>
                <div className="text-[10px] uppercase font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        ) : (
          /* UNLOCK BUTTON */
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/dashboard")}
            className="w-full bg-gradient-to-r from-rose-500 to-rose-400 text-white font-bold py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all"
          >
            Furi Hadiyadda <Unlock size={20} />
          </motion.button>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 text-rose-300">
          <Clock size={16} />
          <span className="text-xs font-semibold tracking-widest uppercase italic">Birthday Surprise</span>
        </div>
      </motion.div>
    </div>
  );
}