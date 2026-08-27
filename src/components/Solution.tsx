"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import Image from "next/image";
import { CTA_LINK } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.25 } as const;

const learnings = [
  {
    title: "Organizar os dados clínicos",
    description:
      "Conectar as informações que aparecem ao longo das sessões, em vez de tratá-las como elementos soltos.",
  },
  {
    title: "Compreender o funcionamento do paciente",
    description:
      "Visualizar as relações entre acontecimentos, aprendizados, gatilhos, crenças, emoções, comportamentos e consequências.",
  },
  {
    title: "Construir hipóteses clínicas reais",
    description:
      "Sair de uma compreensão genérica do caso e identificar o que pode estar desenvolvendo e mantendo o sofrimento daquele paciente.",
  },
  {
    title: "Escolher os próximos passos com mais critério",
    description:
      "Usar a hipótese construída para avaliar prioridades e decidir quais intervenções fazem sentido e por quê.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="o-mapa"
      className="relative w-full bg-[linear-gradient(180deg,#F2EEE7_0%,#FBF9F5_38%,#F2EEE7_100%)] px-6 py-20 text-[#13181E] md:py-28"
    >
      {/* ===== Abertura ===== */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl font-heading text-[1.75rem] leading-[1.18] font-medium tracking-tight text-balance md:text-[2rem] lg:text-[2.5rem]"
        >
          Antes de escolher a técnica, você precisa entender o{" "}
          <span className="text-[#008538]">funcionamento do caso</span>.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-[#13181E]/70 md:text-lg"
        >
          <p>
            Um caso clínico não é apenas uma coleção de sintomas, pensamentos ou
            comportamentos.
          </p>
          <p>
            É uma rede de relações: o que o paciente viveu, o que aprendeu, como
            interpreta as situações, o que sente, como responde e de que forma
            essas respostas acabam mantendo o sofrimento.
          </p>
        </motion.div>

        {/* Afirmação-eixo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mt-12 flex flex-col items-center md:mt-16"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#008538]/50 to-transparent" />
          <p className="mt-6 font-heading text-[1.375rem] leading-snug font-medium tracking-tight md:text-[1.75rem]">
            O MAPA torna essa rede{" "}
            <span className="text-[#008538]">visível</span>.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#13181E]/70 md:text-lg">
            Baseado nos princípios da TCC e na análise funcional do
            comportamento, ele ajuda você a transformar informações dispersas em
            uma conceituação visual, lógica e funcional do caso.
          </p>
        </motion.div>
      </div>

      {/* ===== O que você aprende ===== */}
      <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-12 md:mt-20 lg:grid-cols-12 lg:gap-16">
        {/* Coluna esquerda — lista editorial */}
        <div className="lg:col-span-7">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
            className="font-heading text-lg font-medium tracking-tight md:text-xl"
          >
            Com o MAPA, você aprende a:
          </motion.p>

          <ul className="mt-8 border-t border-[#13181E]/10">
            {learnings.map((item, i) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ duration: 0.7, ease, delay: 0.08 * i }}
                className="group flex gap-5 border-b border-[#13181E]/10 py-6 md:gap-7 md:py-7"
              >
                <span className="font-heading text-sm font-medium tabular-nums text-[#008538] md:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-base leading-snug font-semibold tracking-tight md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#13181E]/70 md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Coluna direita — encontro ao vivo do MAPA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="lg:col-span-5 lg:self-start"
        >
          <div className="lg:sticky lg:top-20">
            <div className="rounded-3xl border border-[#13181E]/8 bg-white p-4 shadow-[0_24px_60px_-40px_rgba(19,24,30,0.5)]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/mapa-aprendizado.webp"
                  alt="Encontro ao vivo do MAPA com dezenas de psicólogas participando por videochamada"
                  fill
                  sizes="(max-width: 1024px) 90vw, 34vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== Fechamento e CTA ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        transition={{ duration: 0.8, ease }}
        className="mx-auto mt-16 flex w-full max-w-3xl flex-col items-center gap-5 text-center md:mt-20"
      >
        <p className="font-heading text-lg leading-snug font-medium tracking-tight md:text-xl">
          O MAPA não é uma ficha para preencher mecanicamente.
        </p>
        <p className="text-base leading-relaxed text-[#13181E]/70 md:text-lg">
          É uma forma de manter a{" "}
          <span className="font-semibold text-[#13181E]">
            conceituação viva
          </span>
          : guiando o que você investiga, o que prioriza e como ajusta o
          tratamento ao longo do processo.
        </p>

        <div className="mt-4">
          <CTAButton
            href={CTA_LINK}
            label="Quero aprender a usar o MAPA"
            className="px-6 py-2.5 text-sm md:px-7 md:py-3 md:text-sm"
          />
        </div>
      </motion.div>
    </section>
  );
}
