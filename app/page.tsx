"use client";

import React, { useState, useEffect } from "react";
import { Lock, Clock, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CountdownPage() {
  const router = useRouter();
  
  // TEST MODE: 20 Ilbiriqsi oo kaliya laga bilaabo hadda
  const [targetDate] = useState(() => new Date().getTime() + 20 * 1000);

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
        // Markuu waqtigu dhammaado wuxuu u gudbiyaa bogga /first
        router.push("/first");
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
  }, [targetDate, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 opacity-10">
        <Heart className="text-rose-400" size={80} />
      </div>

      <div className="max-w-md w-full bg-white border border-rose-100 p-10 rounded-sm shadow-sm text-center relative z-10">
        
        <div className="mb-6 flex justify-center">
          <div className="p-5 bg-rose-50 rounded-sm">
            <Lock className="text-rose-400 size-10" />
          </div>
        </div>

        <h1 className="text-2xl text-slate-700 mb-2">
          Hadiyaddaada Waa Xiran Tahay
        </h1>
        
        <p className="text-slate-500 text-sm mb-8">
          Tijaabo: Waxay furmaysaa 20 ilbiriqsi ka dib.
        </p>

        {/* Countdown Box */}
        <div className="grid grid-cols-2 gap-4 mb-8 max-w-[200px] mx-auto">
          {[
            { label: "Min", value: timeLeft.minutes },
            { label: "Sec", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="bg-rose-50 border border-rose-100 p-4 rounded-sm">
              <div className="text-2xl text-rose-600 leading-none">{item.value}</div>
              <div className="text-[10px] text-rose-400 uppercase tracking-wider mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-300">
          <Clock size={14} />
          <span className="text-[10px] uppercase tracking-[0.2em]">Automatic Redirect</span>
        </div>

      </div>

      <footer className="absolute bottom-8 text-slate-400 text-[10px] uppercase tracking-widest">
        Test Mode Active
      </footer>
    </div>
  );
}