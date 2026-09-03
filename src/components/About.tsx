"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.25 } as const;

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#F2EEE7_0%,#FBF9F5_38%,#F2EEE7_100%)] px-6 py-20 text-[#13181E] md:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* ===== Retrato ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.9, ease }}
          className="lg:col-span-5"
        >
          <motion.div
            style={reduced ? undefined : { y: portraitY }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* Moldura deslocada — profundidade sem peso */}
            <div className="pointer-events-none absolute -top-4 -left-4 h-full w-full rounded-[1.75rem] border border-[#008538]/25" />

            <div className="relative rounded-[1.75rem] border border-[#13181E]/8 bg-white p-3 shadow-[0_30px_70px_-45px_rgba(19,24,30,0.6)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/katia-caetano.webp"
                  alt="Retrato de Kátia Caetano, psicóloga e criadora do MAPA"
                  fill
                  sizes="(max-width: 1024px) 90vw, 34vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>

            {/* Selo de experiência */}
            <div className="absolute -right-3 bottom-6 rounded-2xl bg-[#13181E] px-5 py-3 text-center shadow-[0_20px_40px_-20px_rgba(19,24,30,0.8)] md:-right-6">
              <p className="font-heading text-xl leading-none font-semibold text-[#FFC800]">
                +20
              </p>
              <p className="mt-1 text-[0.7rem] tracking-[0.14em] text-white/60 uppercase">
                anos de experiência
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Texto ===== */}
        <div className="lg:col-span-7">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
            className="font-heading text-[1.875rem] leading-[1.18] font-medium tracking-tight md:text-[2.5rem] lg:text-[3rem]"
          >
            Prazer, sou a <span className="text-[#008538]">Kátia Caetano</span>.
          </motion.h2>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="mt-6 block h-px w-24 bg-gradient-to-r from-[#008538]/70 to-transparent"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="mt-6 space-y-5 text-lg leading-relaxed text-[#13181E]/70 md:text-xl"
          >
            <p>
              Sou psicóloga pela Universidade Federal de Uberlândia. Mestra e
              Doutora em Psicologia pela Universidade de São Paulo, com
              pós-doutorado pelo East Bay Behavior Therapy Center (Califórnia,
              EUA). Fiz estágio de doutorado na Boston University, sob
              supervisão do Dr. Stefan Hofmann.
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mt-8 border-l-2 border-[#008538]/40 pl-5 text-lg leading-relaxed font-medium text-[#13181E] md:text-xl"
          >
            Tenho 20 anos de experiência entre prática clínica, docência e
            supervisão de psicólogos.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
