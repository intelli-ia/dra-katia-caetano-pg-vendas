"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_LINK } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 } as const;

const deliverables = [
  "8 módulos de raciocínio clínico",
  "Exercícios práticos com casos clínicos",
  "Modelo visual e editável do MAPA",
  "Materiais de apoio",
  "3 encontros ao vivo ao longo da jornada de 8 semanas",
];

export default function PricingSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Alimenta o foco de luz que acompanha o cursor dentro do cartão
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="oferta"
      className="relative w-full overflow-hidden px-6 py-20 text-[#13181E] md:py-28"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, #FFD84D 0%, #FFC800 55%, #F0B800 100%)",
      }}
    >
      {/* Malha e grão em tom escuro — mesma textura da identidade, invertida */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(19,24,30,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(19,24,30,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="grain pointer-events-none absolute inset-0 z-0 opacity-[0.12] mix-blend-multiply" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ===== Coluna esquerda: o que está incluso ===== */}
        <div className="lg:col-span-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
            className="max-w-lg font-heading text-[1.75rem] leading-[1.16] font-semibold tracking-tight text-balance md:text-[2rem] lg:text-[2.5rem]"
          >
            Ao entrar no MAPA, você recebe:
          </motion.h2>

          <ul className="mt-9 flex flex-col gap-4 md:mt-10">
            {deliverables.map((item, i) => (
              <motion.li
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ duration: 0.65, ease, delay: 0.08 * i }}
                className="flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#13181E] text-[#FFC800] shadow-[0_6px_16px_-8px_rgba(19,24,30,0.9)]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <p className="text-base leading-relaxed font-medium text-[#13181E]/85 md:text-lg">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ===== Coluna direita: o preço ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="lg:col-span-6"
        >
          <div className="group relative">
            {/* Halo escuro que descola o cartão do fundo dourado — adensa no hover */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[#13181E]/12 blur-2xl transition-all duration-500 group-hover:-inset-6 group-hover:bg-[#13181E]/20" />

            <div
              ref={cardRef}
              onMouseMove={handleMove}
              style={{ "--mx": "50%", "--my": "0%" } as CSSProperties}
              className="section-bg relative overflow-hidden rounded-[1.75rem] border border-[#13181E]/25 px-7 py-10 text-center shadow-[0_40px_80px_-40px_rgba(19,24,30,0.85)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-[#FFC800]/45 group-hover:shadow-[0_55px_100px_-45px_rgba(19,24,30,0.95)] md:px-9 md:py-12"
            >
              {/* Foco de luz que segue o cursor */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--mx) var(--my), rgba(255,200,0,0.16), transparent 66%)",
                }}
              />
              {/* Lâmina de brilho atravessando o cartão */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-[1200ms] ease-out group-hover:translate-x-[320%]"
              />
              {/* Contorno interno dourado que acende */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 ring-1 ring-[#FFC800]/25 transition-opacity duration-500 ring-inset group-hover:opacity-100" />
              <div className="grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" />

              {/* Preço anterior */}
              <div className="relative flex items-center justify-center gap-2 text-sm text-white/45 md:text-base">
                <span>De</span>
                <span className="font-heading font-medium text-white/60 line-through decoration-[#FFC800]/60 decoration-2">
                  R$ 347
                </span>
                <span>por:</span>
              </div>

              <p className="relative mt-5 font-heading text-[4rem] leading-none font-semibold tracking-tight md:text-[6rem]">
                <span className="text-sheen">R$ 197,00</span>
              </p>
              <p className="relative mt-3 font-heading text-base font-medium tracking-[0.2em] text-white/70 uppercase">
                à vista
              </p>

              <div className="relative mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#FFC800]/50 to-transparent" />

              <p className="relative mt-6 text-base text-white/70 md:text-lg">
                ou <span className="font-semibold text-white">12x</span> no
                cartão
              </p>

              <div className="relative mt-8">
                <CTAButton
                  href={CTA_LINK}
                  label="Quero entrar no MAPA"
                  className="w-full px-6 py-3 text-sm md:py-3.5 md:text-base"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
