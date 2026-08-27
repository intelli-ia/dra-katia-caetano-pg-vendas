"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const lead =
  "Mas como transformar essa complexidade em uma estrutura que você consiga".split(
    " ",
  );
const accent = "visualizar e utilizar na prática".split(" ");

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { opacity: 0, y: "0.75em", filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease },
  },
};

/**
 * Faixa de transição: a pergunta que fecha o problema e abre a apresentação do MAPA.
 * Faixa escura de largura total, com a frase revelada palavra a palavra.
 */
export default function TransitionSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const quoteY = useTransform(scrollYProgress, [0, 1], ["16%", "-16%"]);
  const auraScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1.15, 0.85],
  );

  return (
    <section
      ref={ref}
      id="transicao"
      className="section-bg relative flex min-h-[52vh] w-full items-center overflow-hidden px-6 py-20 md:py-24"
    >
      {/* ===== Atmosfera ===== */}
      {/* Halo dourado que respira atrás da frase */}
      <motion.div
        style={reduced ? undefined : { scale: auraScale }}
        className="aurora pointer-events-none absolute top-1/2 left-1/2 z-0 h-[420px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC800]/[0.09] blur-[140px]"
      />
      {/* Contraluz verde, deslocado, para dar profundidade ao halo */}
      <div
        className="pointer-events-none absolute top-1/2 left-[16%] z-0 h-[340px] w-[520px] -translate-y-1/2 rounded-full bg-[#008538]/[0.16] blur-[150px]"
        style={{ animation: "aurora-drift 18s ease-in-out infinite" }}
      />
      {/* Malha técnica */}
      <div className="grid-overlay pointer-events-none absolute inset-0 z-0 opacity-60" />
      {/* Grão sobre tudo */}
      <div className="grain pointer-events-none absolute inset-0 z-0 opacity-[0.14] mix-blend-overlay" />
      {/* ===== Frase ===== */}
      <motion.div
        style={reduced ? undefined : { y: textY }}
        className="relative z-20 mx-auto w-full max-w-2xl"
      >
        {/* Aspas: serifada da superfamília, emolduram opticamente o bloco de texto */}
        <motion.span
          aria-hidden="true"
          style={reduced ? undefined : { y: quoteY }}
          className="quote-mark pointer-events-none absolute -top-10 -left-3 z-0 text-[7rem] select-none md:-top-14 md:-left-16 md:text-[11rem]"
        >
          “
        </motion.span>
        <motion.span
          aria-hidden="true"
          style={reduced ? undefined : { y: quoteY }}
          className="quote-mark pointer-events-none absolute -right-3 -bottom-8 z-0 text-[7rem] select-none md:-right-16 md:-bottom-10 md:text-[11rem]"
        >
          ”
        </motion.span>

        <motion.p
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          className="relative z-10 text-center font-heading text-[1.875rem] leading-[1.2] font-medium tracking-tight text-white md:text-[2.5rem] lg:text-[3rem]"
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
              className="mr-[0.26em] inline-block"
            >
              <span className="text-sheen">{w}</span>
              {i === accent.length - 1 && (
                <span className="text-[#FFC800]">?</span>
              )}
            </motion.span>
          ))}
        </motion.p>

        {/* Fio de luz que se abre sob a frase */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.4, ease, delay: 0.9 }}
          className="mx-auto mt-10 block h-px w-40 bg-gradient-to-r from-transparent via-[#FFC800]/70 to-transparent md:mt-12 md:w-56"
        />
      </motion.div>
    </section>
  );
}
