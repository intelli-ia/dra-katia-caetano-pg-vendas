"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 } as const;

const faqs = [
  {
    question: "O MAPA é uma ferramenta ou um curso?",
    answer:
      "Os dois. O MAPA é o método visual de conceitualização de caso, e o curso ensina você a compreender, construir e utilizar esse método na prática clínica.",
  },
  {
    question: "Para quem é o MAPA?",
    answer:
      "Para psicólogas que atuam ou desejam atuar com TCC e querem desenvolver mais clareza e segurança na formulação de casos, na escolha das técnicas e na definição dos próximos passos do tratamento — independentemente da fase da carreira.",
  },
  {
    question: "Preciso estar no início da carreira para aproveitar?",
    answer:
      "Não. O MAPA pode ajudar tanto quem está começando quanto quem já atende há algum tempo, mas deseja tornar seu raciocínio clínico mais organizado, estratégico e explícito.",
  },
  {
    question:
      "Já fiz pós-graduação e outros cursos de TCC. O que há de diferente?",
    answer:
      "O foco do MAPA não é oferecer mais conteúdo solto. A proposta é ensinar como conectar os dados da sessão, construir uma hipótese sobre o funcionamento do caso e usar essa hipótese para orientar as decisões clínicas.",
  },
  {
    question: "O MAPA serve apenas para casos de ansiedade?",
    answer:
      "Não. A estrutura pode ser utilizada para compreender diferentes casos clínicos. A ansiedade pode aparecer como um dos contextos de aplicação, mas o objetivo é desenvolver uma forma de raciocinar que possa ser adaptada a diferentes pacientes.",
  },
  {
    question: "O MAPA fornece respostas prontas para cada caso?",
    answer:
      "Não. Ele não substitui o julgamento clínico nem oferece uma fórmula automática. O MAPA ajuda você a organizar as informações e construir hipóteses para tomar decisões com mais critério.",
  },
  {
    question: "Como funciona a formação?",
    answer:
      "A formação acontece ao longo de 8 semanas, com 8 módulos liberados progressivamente, exercícios práticos, aplicação em casos clínicos, materiais de apoio e 3 encontros ao vivo ao longo da jornada.",
  },
  {
    question: "O MAPA substitui uma supervisão clínica?",
    answer:
      "Não. O MAPA é uma ferramenta de desenvolvimento do raciocínio clínico. Ele pode complementar a supervisão, mas não substitui o acompanhamento profissional necessário para cada caso e para cada momento da carreira.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-[#FBF9F5] px-6 py-20 text-[#13181E] md:py-28"
    >
      {/* Malha discreta para separar da seção anterior */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(19,24,30,0.028) 1px, transparent 1px), linear-gradient(to bottom, rgba(19,24,30,0.028) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="text-center font-heading text-[1.875rem] leading-[1.18] font-medium tracking-tight text-balance md:text-[2.5rem] lg:text-[3rem]"
        >
          Perguntas <span className="text-[#008538]">frequentes</span>
        </motion.h2>

        <div className="mt-12 flex flex-col gap-3 md:mt-14">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ duration: 0.6, ease, delay: 0.05 * i }}
              >
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-400 ${
                    isOpen
                      ? "border-[#008538]/35 shadow-[0_18px_44px_-30px_rgba(0,133,56,0.55)]"
                      : "border-[#13181E]/8 shadow-[0_10px_30px_-26px_rgba(19,24,30,0.5)] hover:border-[#008538]/25"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left md:px-7 md:py-6"
                  >
                    <span
                      className={`font-heading text-lg leading-snug font-semibold tracking-tight transition-colors duration-300 md:text-xl ${
                        isOpen ? "text-[#008538]" : "text-[#13181E]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-400 ${
                        isOpen
                          ? "rotate-135 bg-[#008538] text-white"
                          : "bg-[#008538]/10 text-[#008538]"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-7 md:pb-7">
                          <div className="mb-4 h-px w-full bg-gradient-to-r from-[#008538]/30 to-transparent" />
                          <p className="text-base leading-relaxed text-[#13181E]/70 md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-10 flex justify-center md:mt-12"
        >
          <CTAButton href="#oferta" label="Quero usar o MAPA na minha clínica" />
        </motion.div>
      </div>
    </section>
  );
}
