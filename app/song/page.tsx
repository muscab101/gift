"use client";

import React from "react";
import { motion } from "framer-motion";
import { Music, Heart, ArrowLeft, Sparkles, Volume2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SongPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] text-slate-800 p-4 md:p-12 relative overflow-hidden font-['Outfit',sans-serif]">
      
      {/* Background Decor (La mid ah Dashboard-kaaga) */}
      <div className="absolute top-10 right-10 opacity-20 rotate-12"><Heart size={100} className="text-rose-300" /></div>
      <div className="absolute bottom-10 left-10 opacity-20 -rotate-12"><Sparkles size={100} className="text-rose-300" /></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-8 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-full">
            <ArrowLeft className="mr-2 size-5" /> Ku laabo Dashboard
          </Button>
        </Link>

        {/* Title Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="p-3 bg-rose-100 rounded-full">
               <Music className="text-rose-500 animate-bounce" size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
              Heestaada <span className="text-rose-500">Gaarka ah</span>
            </h1>
          </motion.div>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Decorative Glow Frame (Rose colors) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-200 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/At5Mf9AkaUc?autoplay=1&modestbranding=1&rel=0"
              title="Birthday Song for Rimaas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </motion.div>

        {/* Message Below Video */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-rose-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4 text-rose-500 font-bold text-xl">
              <Volume2 size={24} />
              <span>Sababta Heestan?</span>
            </div>
            <p className="text-slate-600 leading-relaxed italic text-lg">
              "maxa dareentay markaad hestaan aragtay?."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center md:text-right p-6"
          >
            <div className="inline-block p-5 bg-rose-50 rounded-full mb-4 shadow-inner">
              <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={44} />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-slate-800">Waan ku jeclahay</h2>
            <p className="text-rose-400 text-xl font-medium">Mar kasta iyo meel kasta ❤️</p>
            <div className="flex justify-center md:justify-end gap-3 mt-6">
                <Sparkles className="text-rose-300" size={24} />
                <Sparkles className="text-rose-200" size={24} />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <p className="text-center mt-12 text-slate-400 text-sm font-light tracking-widest">
          Loo sameeyay si gaar ah Rimaas ❤️ 2026
        </p>

      </div>
    </div>
  );
}