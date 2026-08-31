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

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center">
        {/* ===== Título centralizado ===== */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="text-center font-heading text-[1.875rem] leading-[1.18] font-semibold tracking-tight text-balance md:text-[2.5rem] lg:text-[3rem]"
        >
          Ao entrar no <span className="text-[#008538]">MAPA</span>, você recebe:
        </motion.h2>

        {/* ===== Card da oferta centralizado ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="mt-10 w-full md:mt-12"
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

              {/* Entregáveis */}
              <ul className="relative flex flex-col gap-4 text-left">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#13181E] text-[#FFC800] shadow-[0_6px_16px_-8px_rgba(19,24,30,0.9)]">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <p className="text-lg leading-relaxed font-medium text-white/85 md:text-xl">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="relative mx-auto mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Preço anterior */}
              <div className="relative mt-5 flex items-center justify-center gap-2 text-lg text-white/45 md:text-xl">
                <span>De</span>
                <span className="font-heading font-medium text-white/60 line-through decoration-[#FFC800]/60 decoration-1">
                  R$ 347
                </span>
                <span>por apenas:</span>
              </div>

              <div className="relative mt-5 flex flex-col items-center font-heading font-semibold tracking-tight">
                <span className="text-sheen text-[2rem] leading-none md:text-[3rem]">12x de</span>
                <span className="text-sheen text-[4rem] leading-none md:text-[6rem]">R$29,70</span>
              </div>

              <div className="relative mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#FFC800]/50 to-transparent" />

              <p className="relative mt-6 text-lg text-white/70 md:text-xl">
                ou <span className="font-semibold text-white">R$297,00</span>{" "}
                à vista
              </p>

              <div className="relative mt-8">
                <CTAButton
                  href={CTA_LINK}
                  label="Quero entrar no MAPA"
                  className="w-full"
                />
              </div>

              {/* Imagem placeholder — último elemento */}
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] flex items-center justify-center">
                <span className="text-sm text-white/30">imagem do produto</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
