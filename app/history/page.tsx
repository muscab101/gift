"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Component-kan wuxuu xukumaa qoraalka mid-mid u soo baxaya
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
            delay: delay + index * 0.02, // Xawaaraha qoraalka
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
    // Sug in yar ka hor inta uusan qoraalku bilaaban
    const timer = setTimeout(() => setShowFullText(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] p-6 md:p-12 relative overflow-hidden">
      
      {/* 1. Google Font Outfit Integration */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
        
        .outfit-font {
          font-family: 'Outfit', sans-serif;
        }

        .paper-lines {
          background-image: linear-gradient(#f1f5f9 1.5px, transparent 1.5px);
          background-size: 100% 35px;
          line-height: 35px;
        }
      `}</style>

      {/* Background Decor */}
      <div className="absolute top-10 left-10 opacity-20"><Sparkles className="text-rose-300 size-20" /></div>
      <div className="absolute bottom-10 right-10 opacity-20"><Heart className="text-rose-300 size-32 fill-rose-100" /></div>

      <div className="max-w-3xl mx-auto outfit-font">
        {/* Back Button */}
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-8 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all">
            <ArrowLeft className="mr-2 size-4" /> Ku laabo Dashboard
          </Button>
        </Link>

        {/* The Letter Card */}
        <div className="absolute top-25 left-1/2 -translate-x-1/2 bg-rose-500 p-3 rounded-full shadow-lg border-4 border-white z-[1000] mt-5">
            <Heart className="text-white fill-white size-6" />
          </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-sm shadow-sm relative border-t-[30px] border-rose-400 overflow-hidden paper-lines"
        >
          {/* Vertical Margin Line (Red Line) */}
          <div className="absolute left-12 top-0 bottom-0 w-[1.5px] bg-rose-200 " />

          {/* Wax Seal / Heart Icon */}
          

          <div className="pl-16 pr-6 md:pr-12 pb-16 pt-12 text-slate-800 relative z-10">
            
            <h1 className="text-3xl md:text-4xl font-bold text-rose-500 text-center mb-12">
              Happy Birthday <span className=" text-rose-600 " >Boqoradeyda</span> ❤️
            </h1>

            {showFullText && (
              <div className="space-y-10 text-lg md:text-xl font-normal leading-loose">
                <p>
                  <Typewriter text="Waxaan rabaa in hadiyaddan yar ee qalbigayga ka timid inaa kuu siiyo. meshaan waxa ku qoran history kusaabsan adiga iyo aniga Waxana aad u jeclahay inaan kaaga sheekeeyo markii aan is baranay iyo sida aan ku arkay markii ugu horreysay." />
                </p>

                <p>
                  <Typewriter delay={5} text="Waxaad ahayd gabar qurux badan, deggan, oo ixtiraam badan. Aragtideydii ugu horreysay, waxaan kugu arkay markii aan school‑ka ku cusbaa. Markaas ka dib, waxaan jeclaan jiray inaan maalin walba kugu arko school‑ka, sababtoo ah aad ayaan u xiisayn jiray inaan arko indhahaaga quruxda badan iyo dhoolla‑caddayntaada." />
                </p>

                <p>
                  <Typewriter delay={12} text="Marnaba ma illoobi doono maalintaas; waa maalintii aan arkay qofkii nolosheyda midab u yeeli lahaa, isla markaana ii bari lahaa waxyaabo badan oo waqtigaas aanan aqoon. Alxamdulillah waxayna u dhacday sidii aan Ilaahay uga baryay in uu adiga ii kaasiiyo." />
                </p>

                <p>
                  <Typewriter delay={18} text="Runtii, waxaan aad u jeclahay dabeecaddaada, gaar ahaan marka aad faraxsan tahay oo aad ii sheekeneso. Waxaan kaloo jeclahay indhahaaga quruxda badan. Waxa kale oo aan kugi sii jeclaaday waa naxariistaada, waana midda kaa dhigtay qof gaar ah oo qalbigayga qaas ku ah." />
                </p>

                <p>
                  <Typewriter delay={24} text="Waxaad i siisay xusuuso gaar ah oo aad u badan. Ma xasuusataa markii ugu horreysay ee aan kuu sheegay jacaylkayga? Waxay ahayd habeen aad u qurux badan oo na qosol badan.Sababaha aan kuugu jeclaaday adigana maqiyaasi kartid anigana ma sharxi karo. Adiga ayaad i siisay riyoonin quruxbadan oo farobadan, Waxaana jeclahay inaa kugu faano markasta . mararka qaar xataa , 'I swear I like to talk to you even if I don’t have anything to talk about.' " />
                </p>

                {/* Promise Section */}
                <div className="space-y-6 pt-6 border-l-4 border-rose-300 pl-6 bg-rose-50/40 rounded-r-2xl mt-12">
                   <h2 className="text-2xl font-bold text-rose-500">-Marwalba Garabkaaga Ahay</h2>
                   <p className="font-light ">
                     <Typewriter delay={32} text="Boqoradeyda, waxaan rabaa inaad mar walba ogaato in aan adiga kuu garab taaganahay, xitaa mararka aaysan jirin qof ku aaminto ama ku fahanto. Jacaylka aan kuu qabo maku xirna maalmo ama xiiso — waa dareen joogto ah oo aan xadlaheen ." />
                   </p>
                   <p className="font-light  pb-4">
                     <Typewriter delay={38} text="Waxaan doonayaa in aad dareento nabad, farxad, iyo kalsooni, sababtoo ah waligey waan kuu ahaandona qpfka ku la jira xita hadii ay dadka kuu dhaw kaa soo horjesadan." />
                   </p>
                    <p className="font-light  pb-4">
                     <Typewriter delay={40} text="Waxaan marwalbo alle ku weydiindona in aad farxsanaato iyo waxaa jecshahay inuu ku siiyo waxaana si gaar ah aa alle ugu baryidona in aan farxadada marwalbo aan sabab u noqdo  " />
                   </p>
                </div>

                {/* Closing */}
                <div className="text-center pt-12 space-y-6">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 45 }}
                    className="text-2xl md:text-3xl font-bold text-rose-600"
                  >
                    Haa, waan ku jeclahay — jacayl kalsooni leh oo aan dhammaanayn. 
                  </motion.p>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 46, type: "spring" }}
                  >
                    <h3 className="text-3xl font-extrabold text-slate-800">
                      Happy Birthday, darling 🎂
                    </h3>
                  </motion.div>
                  
                  <div className="flex justify-center gap-4 pt-4">
                    <Star className="text-yellow-400 fill-yellow-400 size-6 animate-pulse" />
                    <Heart className="text-rose-500 fill-rose-500 size-8 animate-bounce" />
                    <Star className="text-yellow-400 fill-yellow-400 size-6 animate-pulse" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Footer */}
        <p className="text-center mt-12 text-slate-400 text-sm font-light tracking-widest">
         &copy; Website kan woxo qaas uyahay RIMAAS • 2026 • ❤️
        </p>
      </div>
    </div>
  );
}