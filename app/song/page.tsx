"use client";

import React from "react";
import { motion } from "framer-motion";
import { Music, Heart, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SongPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] text-slate-800 p-4 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-10 right-10 opacity-20 rotate-12"><Heart size={100} className="text-rose-300" /></div>
      <div className="absolute bottom-10 left-10 opacity-20 -rotate-12"><Sparkles size={100} className="text-rose-300" /></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-8 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-sm font-normal">
            <ArrowLeft className="mr-2 size-5" /> Ku laabo Dashboard
          </Button>
        </Link>

        {/* Title Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="p-3 bg-rose-50 rounded-sm">
               <Music className="text-rose-500" size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-800">
              Heestaada <span className="text-rose-500">Gaarka ah</span>
            </h1>
          </motion.div>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-white rounded-sm overflow-hidden shadow-sm border border-rose-100 aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/At5Mf9AkaUc?autoplay=1&modestbranding=1&rel=0"
              title="Birthday Song for Rimaas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>

        {/* Message Below Video */}
        <div className="mt-12 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-4"
          >
            <div className="inline-block p-4 bg-rose-50 rounded-sm mb-2">
              <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={32} />
            </div>
            <h2 className="text-2xl font-normal text-slate-800">Waan ku jeclahay</h2>
            <p className="text-rose-400 text-lg font-normal tracking-wide">Mar kasta iyo meel kasta ❤️</p>
          </motion.div>
        </div>

        {/* Footer-ka aad codsatay */}
        <footer className="absolute bottom-8 left-0 right-0 text-slate-400 text-[10px] uppercase tracking-widest font-normal text-center">
          Special Gift for Rimaas
        </footer>

      </div>
    </div>
  );
}