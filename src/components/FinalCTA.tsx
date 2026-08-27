"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_LINK } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const lead = "Até quando você vai terminar uma sessão".split(" ");
const accent = "sem saber o que fazer na próxima".split(" ");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

const word = {
  hidden: { opacity: 0, y: "0.7em", filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

export default function FinalCTASection() {
  return (
    <section
      id="comecar"
      className="section-bg relative flex min-h-[70vh] w-full items-center overflow-hidden px-6 py-24 md:py-32"
    >
      {/* ===== Atmosfera ===== */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[520px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008538]/[0.16] blur-[150px]"
        style={{ animation: "aurora-drift 20s ease-in-out infinite" }}
      />
      <div className="pointer-events-none absolute bottom-[-12%] left-1/2 z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#FFC800]/[0.07] blur-[140px]" />
      <div className="grid-overlay pointer-events-none absolute inset-0 z-0 opacity-50" />
      <div className="grain pointer-events-none absolute inset-0 z-0 opacity-[0.14] mix-blend-overlay" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.h2
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="font-heading text-[1.75rem] leading-[1.2] font-medium tracking-tight text-white text-balance md:text-[2.25rem] lg:text-[2.75rem]"
        >
          {lead.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              variants={word}
              className="mr-[0.26em] inline-block"
            >
              {w}
            </motion.span>
          ))}
          {accent.map((w, i) => (
            <motion.span
              key={`${w}-accent-${i}`}
              variants={word}
              className="mr-[0.26em] inline-block text-[#FFC800]"
            >
              {w}
              {i === accent.length - 1 && "?"}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          Tenha segurança para definir os próximos passos do tratamento.
        </motion.p>

        {/* CTA com halo pulsante */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
          className="relative mt-10 md:mt-12"
        >
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.12, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#008538]/40 blur-2xl"
          />
          <CTAButton
            href={CTA_LINK}
            label="Quero usar o MAPA na minha clínica"
            className="px-7 py-3.5 text-sm md:px-9 md:py-4 md:text-base"
          />
        </motion.div>
      </div>
    </section>
  );
}
