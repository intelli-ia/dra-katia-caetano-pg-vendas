"use client";

import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Layers, Video } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 } as const;

const stages = [
  {
    weeks: "Semanas 1 e 2",
    title: "Construção da base clínica",
    description:
      "Você compreende o papel da conceitualização de caso e aprende a observar o funcionamento do paciente para além de sintomas isolados.",
  },
  {
    weeks: "Semanas 3 e 4",
    title: "Aprendendo a construir o MAPA",
    description:
      "Você começa a organizar os dados clínicos e a visualizar as relações entre acontecimentos, aprendizados, gatilhos, crenças, emoções e comportamentos.",
  },
  {
    weeks: "Semanas 5 e 6",
    title: "Transformando o MAPA em hipótese",
    description:
      "Você aprende a conectar as informações do caso, identificar os fatores que mantêm o sofrimento e construir hipóteses clínicas mais reais e funcionais.",
  },
  {
    weeks: "Semanas 7 e 8",
    title: "Aplicando o raciocínio na prática",
    description:
      "Você utiliza o MAPA para pensar nos próximos passos do tratamento, escolher intervenções com mais critério e acompanhar a evolução do caso.",
  },
];

interface StageCardProps {
  index: number;
  weeks: string;
  title: string;
  description: string;
}

function StageCard({ index, weeks, title, description }: StageCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Alimenta o foco de luz que acompanha o cursor dentro do card
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ duration: 0.75, ease, delay: index * 0.09 }}
      className="group relative"
    >
      {/* Moldura em degradê — acende em dourado no hover */}
      <div className="relative rounded-[1.25rem] bg-gradient-to-b from-white/[0.10] to-white/[0.03] p-px transition-all duration-500 group-hover:from-[#FFC800]/55 group-hover:to-[#008538]/25 group-hover:shadow-[0_28px_60px_-30px_rgba(255,200,0,0.35)]">
        <div
          ref={ref}
          onMouseMove={handleMove}
          style={
            { "--mx": "50%", "--my": "0%" } as React.CSSProperties
          }
          className="relative h-full overflow-hidden rounded-[calc(1.25rem-1px)] bg-[#161C24] p-7 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 md:p-8"
        >
          {/* Foco de luz que segue o cursor */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(360px circle at var(--mx) var(--my), rgba(255,200,0,0.14), transparent 68%)",
            }}
          />
          {/* Lâmina de brilho que atravessa o card uma vez */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-[320%]"
          />
          {/* Grão discreto */}
          <div className="grain pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay" />

          {/* Numeral da etapa */}
          <span className="pointer-events-none absolute top-5 right-6 font-heading text-[3.5rem] leading-none font-medium tabular-nums text-white/[0.06] transition-colors duration-500 select-none group-hover:text-[#FFC800]/25 md:text-[4.5rem]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FFC800]/25 bg-[#FFC800]/[0.07] px-3 py-1 font-heading text-[0.7rem] font-semibold tracking-[0.14em] text-[#FFC800] uppercase transition-colors duration-500 group-hover:border-[#FFC800]/45 group-hover:bg-[#FFC800]/[0.12]">
              <CalendarDays className="h-3.5 w-3.5" />
              {weeks}
            </span>

            <h3 className="max-w-[85%] font-heading text-lg leading-snug font-semibold tracking-tight text-white md:text-xl">
              {title}
            </h3>

            <p className="text-sm leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/75 md:text-[0.95rem]">
              {description}
            </p>
          </div>

          {/* Fio inferior que se desenha no hover */}
          <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#FFC800]/70 via-[#FFC800]/25 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />
        </div>
      </div>
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section
      id="jornada"
      className="section-bg relative w-full overflow-hidden px-6 py-20 md:py-28"
    >
      <div className="grid-overlay pointer-events-none absolute inset-0 z-0 opacity-50" />
      <div className="pointer-events-none absolute top-[12%] left-1/2 z-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#008538]/[0.10] blur-[150px]" />

      {/* ===== Abertura ===== */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl font-heading text-[1.75rem] leading-[1.18] font-medium tracking-tight text-white text-balance md:text-[2rem] lg:text-[2.5rem]"
        >
          Como funciona a{" "}
          <span className="text-[#FFC800]">jornada do MAPA</span>?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          Uma formação em 8 semanas para transformar a conceitualização em
          raciocínio clínico aplicado.
        </motion.p>
      </div>

      {/* ===== Etapas ===== */}
      <div className="relative z-10 mx-auto mt-14 grid w-full max-w-6xl grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
        {stages.map((stage, i) => (
          <StageCard
            key={stage.title}
            index={i}
            weeks={stage.weeks}
            title={stage.title}
            description={stage.description}
          />
        ))}
      </div>

      {/* ===== O que compõe a jornada ===== */}
      <div className="relative z-10 mx-auto mt-6 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {[
          {
            icon: Layers,
            text: "Ao longo das 8 semanas, você terá acesso a 8 módulos, exercícios práticos, casos clínicos, aplicações e materiais de apoio para transformar o conteúdo em uma forma própria de pensar.",
          },
          {
            icon: Video,
            text: "A jornada também conta com 3 encontros ao vivo: um para abrir o percurso, um para acompanhar o desenvolvimento e outro para consolidar a formação.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.text}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.75, ease, delay: 0.1 + i * 0.08 }}
            className="flex items-start gap-4 rounded-[1.25rem] border border-white/[0.07] bg-white/[0.02] p-6 md:p-7"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#008538]/15 text-[#008538]">
              <item.icon className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-white/65 md:text-[0.95rem]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ===== Fechamento ===== */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        transition={{ duration: 0.8, ease }}
        className="relative z-10 mx-auto mt-14 max-w-3xl text-center font-heading text-lg leading-snug font-medium tracking-tight text-white/90 text-balance md:mt-16 md:text-xl"
      >
        Do primeiro olhar sobre o caso à construção de uma direção clínica mais
        clara, você percorre uma jornada progressiva para desenvolver{" "}
        <span className="text-[#FFC800]">
          raciocínio, segurança e autonomia
        </span>{" "}
        na prática.
      </motion.p>
    </section>
  );
}
