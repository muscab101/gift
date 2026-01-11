"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Balloon, Cake, Flower2, Sparkles, Heart } from "lucide-react";
import confetti from "canvas-confetti";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0); // Tiriye isku dayga ah
  const [hint, setHint] = useState(""); // Halkan waxaa lagu kaydinayaa xarafka la siinayo
  const router = useRouter();

  const CORRECT_PASSWORD = "rimaas";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === CORRECT_PASSWORD) {
      confetti({
        particleCount: 150,
        spread: 70,
        colors: ["#fb7185", "#ffffff"],
      });
      
      setTimeout(() => {
        router.push("/dashboard"); 
      }, 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        // Dooro xaraf random ah oo ku jira password-ka
        const randomIndex = Math.floor(Math.random() * CORRECT_PASSWORD.length);
        const randomLetter = CORRECT_PASSWORD[randomIndex].toUpperCase();
        setHint(` Waa ku cawinaya gacliso, Password-ka waxaa ku jira xarafka "${randomLetter}"`);
        setError("Wali waa qalad... laakiin halkan ka eeg caawinaada! ");
      } else {
        setError(`Malaha maahan ereygii saxda ahaa... (Isku dayga: ${newAttempts}/3) ❤️`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Icons */}
      <div className='absolute top-5 left-9 opacity-30'> <Cake className='size-32 text-rose-200' /></div>
      <div className='absolute bottom-10 right-13 opacity-30'><Balloon className='size-32 text-rose-200' /></div>
      <div className='absolute top-1/4 left-1/4'><Sparkles className='size-8 text-rose-200' /></div>
      <div className='absolute bottom-1/3 right-1/4'><Sparkles className='size-8 text-rose-200' /></div>

      <div className="z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-[2.5rem] font-semibold text-slate-800 mb-2">Lock</h2>
          <p className="text-slate-500 font-medium text-sm">
            "isku day inaa furto password kan hadiin aad rabo gifts ka gudaha ku jira?"
          </p>
        </div>

        <Card className="border-none shadow-2xl bg-white/40 backdrop-blur-xl border border-white/50">
          <CardContent className="pt-8 pb-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-3">
                <Input
                  type="password"
                  placeholder="Ku qor ereyga sirta ah..."
                  className="h-11 text-center text-xl border-rose-100 bg-white/50 focus-visible:ring-rose-300 rounded-sm"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />
                <div className="min-h-[40px] flex flex-col items-center justify-center">
                  {error && (
                    <p className="text-sm text-rose-500 text-center font-semibold animate-pulse">
                      {error}
                    </p>
                  )}
                  {hint && (
                    <p className="text-xs text-green-600 text-center font-bold mt-1 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                      {hint}
                    </p>
                  )}
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full h-11 bg-rose-400 hover:bg-rose-500 text-white font-bold text-md rounded-md shadow-md shadow-rose-200 transition-all active:scale-95"
              >
                login
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-8 flex justify-center gap-4 text-rose-200">
           <Flower2 className="animate-bounce" />
           <Heart className="fill-rose-200" />
           <Flower2 className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;