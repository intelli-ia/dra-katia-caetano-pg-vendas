"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.25 } as const;

const testimonials = [
  {
    src: "https://crrxlbdcsjerunnxpwfz.supabase.co/storage/v1/object/public/katia-caetano/depoimentos-mapa/depoimento1.mp4",
    name: "Karen de Oliveira",
    role: "Psicóloga",
  },
  {
    src: "https://crrxlbdcsjerunnxpwfz.supabase.co/storage/v1/object/public/katia-caetano/depoimentos-mapa/depoimento2.mp4",
    name: "Ludmila",
    role: "Psicóloga",
  },
  {
    src: "https://crrxlbdcsjerunnxpwfz.supabase.co/storage/v1/object/public/katia-caetano/depoimentos-mapa/depoimento3.mp4",
    name: "Sara Cortese",
    role: "Psicóloga",
  },
  {
    src: "https://crrxlbdcsjerunnxpwfz.supabase.co/storage/v1/object/public/katia-caetano/depoimentos-mapa/depoimento4.mp4",
    name: "Ângela Albuquerque",
    role: "Psicóloga",
  },
];

function VideoPlayer({ src, name, role }: { src: string; name: string; role: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="flex w-[80vw] flex-none flex-col md:w-72">
      <div className="relative overflow-hidden rounded-2xl border border-[#13181E]/8 bg-white shadow-[0_20px_50px_-20px_rgba(19,24,30,0.2)]">
        <video
          ref={videoRef}
          src={src}
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onEnded={() => setPlaying(false)}
          onClick={toggle}
        />
        <button
          onClick={toggle}
          aria-label={playing ? "Pausar" : "Reproduzir"}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-transform duration-150 hover:scale-110">
            {playing ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 translate-x-0.5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            )}
          </span>
        </button>
      </div>
      <div className="mt-3 px-1">
        <p className="text-[1rem] font-semibold leading-snug text-[#13181E]">{name}</p>
        <p className="text-[0.8rem] text-[#13181E]/60">{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative w-full overflow-hidden bg-[#F2EEE7] pb-20 pt-8 text-[#13181E] md:pb-28 md:pt-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="font-heading px-6 text-center text-[1.875rem] leading-[1.18] font-medium tracking-tight md:text-[2.5rem] lg:text-[3rem]"
        >
          O que os meus alunos dizem
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mt-12 flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="snap-start">
              <VideoPlayer src={t.src} name={t.name} role={t.role} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
