"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle, X } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { HighlightText } from "@/components/ui/highlight-text";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.25 } as const;

const questions = [
  "Qual é a hipótese que está se formando?",
  "O que ainda precisa ser investigado?",
  "Qual técnica faz sentido para este caso — e neste momento do tratamento?",
  "Como escolher a ferramenta para cada caso?",
];

const consequences = [
  "Reunir muitos dados sem conseguir conectá-los;",
  "Conhecer várias técnicas, mas não saber qual escolher;",
  "Conduzir a sessão com sensibilidade e ainda terminar sem clareza sobre o próximo passo;",
  "Depender de uma resposta externa sempre que o caso foge do esperado.",
  "Faz várias formações e ainda se sente insegura(o) e perdida(o) sobre como conduzir o caso.",
];

export default function ProblemSection() {
  return (
    <section
      id="proxima-secao"
      className="relative w-full bg-[linear-gradient(180deg,#F2EEE7_0%,#FBF9F5_38%,#F2EEE7_100%)] px-6 py-20 text-[#13181E] md:py-28"
    >
      {/* ===== Bloco 1: o desafio ===== */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl font-heading text-[1.875rem] leading-[1.18] font-medium tracking-tight md:text-[2.5rem] lg:text-[3rem]"
        >
          A teoria faz sentido no papel.{" "}
          <span className="text-[#008538]">
            O desafio aparece quando o paciente está na sua frente.
          </span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-[#13181E]/70 md:text-xl"
        >
          <p>
            Você estudou TCC. Conhece pensamentos automáticos, crenças,
            comportamentos, emoções e diferentes técnicas de intervenção.
          </p>
          <p>
            Mas, diante de um caso real, com uma história cheia de detalhes e
            informações que surgem aos poucos, pode ser difícil saber como
            conectar tudo isso.
          </p>
        </motion.div>

        {/* Perguntas que ficam abertas na sessão */}
        <div className="mt-12 grid w-full grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {questions.map((question, i) => (
            <motion.div
              key={question}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.1 }}
              className="flex flex-col gap-4 rounded-2xl border border-[#13181E]/8 bg-white p-6 text-left shadow-[0_10px_30px_-20px_rgba(19,24,30,0.4)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#008538]/10 text-[#008538]">
                <HelpCircle className="h-5 w-5" />
              </span>
              <p className="text-base leading-relaxed text-[#13181E]/80 md:text-lg">
                {question}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Faixa de acolhimento */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mt-10 flex w-full max-w-3xl items-start gap-4 rounded-2xl border border-dashed border-[#008538]/35 bg-[#008538]/[0.06] px-6 py-5 text-left md:items-center"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#008538] text-white md:mt-0">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <p className="text-base leading-relaxed text-[#13181E]/80 md:text-lg">
            Se depois de algumas sessões você já se pegou revisando mentalmente
            tudo o que aconteceu para tentar entender se conduziu o caso na
            direção certa e ainda se sente insegura(o), saiba: isso{" "}
            <strong className="font-semibold text-[#13181E]">não</strong>{" "}
            significa que você não estudou o suficiente ou que não tenha
            capacidade para a clínica.
          </p>
        </motion.div>
      </div>

      {/* ===== Divisor ===== */}
      <div className="mx-auto my-16 w-full max-w-6xl border-t border-[#13181E]/10 md:my-20" />

      {/* ===== Bloco 2: o que falta nas formações ===== */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Coluna esquerda — registro clínico em sessão */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.9, ease }}
          className="flex justify-center lg:col-span-6 lg:h-full"
        >
          <div className="flex w-full max-w-lg flex-col rounded-3xl border border-[#13181E]/8 bg-white p-4 shadow-[0_24px_60px_-40px_rgba(19,24,30,0.5)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:flex-1">
              <Image
                src="/conceituacao.webp"
                alt="Psicólogo registrando anotações clínicas em prancheta durante sessão"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        {/* Coluna direita — texto e consequências */}
        <div className="flex flex-col gap-6 lg:col-span-6">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
            className="font-heading text-[1.5rem] leading-[1.18] font-medium tracking-tight md:text-[2rem] lg:text-[2.5rem]"
          >
            Muitas formações ensinam os conceitos da TCC, mas não mostram com
            clareza como transformar o que você escuta em sessão em uma{" "}
            <span className="text-[#008538]">conceituação viva</span> —{" "}
            <HighlightText>
              uma hipótese que organize o caso e oriente suas decisões com mais
              clareza e segurança.
            </HighlightText>
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="text-lg text-[#13181E]/70 md:text-xl"
          >
            E, sem esse eixo, você:
          </motion.p>

          <ul className="flex flex-col gap-4">
            {consequences.map((item, i) => (
              <motion.li
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <X className="h-4 w-4" strokeWidth={3} />
                </span>
                <p className="text-lg leading-relaxed text-[#13181E]/80 md:text-xl">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Fechamento ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        transition={{ duration: 0.8, ease }}
        className="mx-auto mt-16 flex w-full max-w-3xl flex-col items-center gap-5 text-center md:mt-20"
      >
        <p className="text-lg leading-relaxed text-[#13181E]/70 md:text-xl">
          <strong className="font-semibold text-[#13181E]">
            O problema não é você não saber TCC.
          </strong>{" "}
          É tentar pensar um caso complexo sem uma estrutura que ajude a
          transformar informação em compreensão — e compreensão em direção
          clínica.
        </p>
        <p className="text-lg leading-relaxed text-[#13181E]/70 md:text-xl">
          Quando essa estrutura existe, o caso não deixa de ser complexo. Mas
          começa a fazer mais sentido.
        </p>
        <p className="pt-6 font-heading text-[1.5rem] leading-[1.18] font-semibold tracking-tight text-[#13181E] md:pt-10 md:text-[2rem] lg:text-[2.5rem]">
          É isso que o <span className="text-[#008538]">MAPA</span> vai ajudar
          você a construir.
        </p>
        <div className="mt-8 md:mt-10">
          <CTAButton href="#oferta" label="Quero usar o MAPA na minha clínica" />
        </div>
      </motion.div>
    </section>
  );
}
