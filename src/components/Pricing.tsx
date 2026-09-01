"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";
import Image from "next/image";
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
      className="relative w-full overflow-hidden px-6 pt-24 pb-52 text-[#13181E] md:pt-36 md:pb-64"
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

      {/* Costura entre a seção escura que termina e o dourado que começa */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[#13181E] opacity-25"
      />

      {/* Clareira atrás do cartão: o dourado adensa no centro e o cartão escuro
          passa a flutuar sobre ele, em vez de boiar num chapado. */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[18%] left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[#13181E] opacity-[0.10] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-[880px]">
        {/* ── Manchete ─────────────────────────────── */}
        {/* Fica sobre o dourado, fora do cartão: é a última fala da seção, e o
            cartão logo abaixo é a resposta a ela. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="mx-auto max-w-[720px] text-center font-heading text-[34px] leading-[1.1] font-semibold tracking-tight text-balance sm:text-[42px] md:text-[56px]">
            Ao entrar no MAPA, você recebe:
          </h2>
          <div
            aria-hidden
            className="mx-auto mt-7 h-px w-[110px] bg-[#13181E] opacity-40 md:mt-8"
          />
        </motion.div>

        {/* ── Cartão da oferta ─────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.9, ease, delay: 0.14 }}
          className="group relative mt-14 md:mt-16"
        >
          {/* Halo escuro que descola o cartão do fundo dourado — adensa no hover */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[572px] -translate-x-1/2 rounded-[2rem] bg-[#13181E]/12 blur-2xl transition-all duration-500 group-hover:bg-[#13181E]/20" />

          {/* `pb` generoso: sobra deliberada no pé do cartão para a imagem que
              virá apoiada sobre ele — o conteúdo continua ancorado no topo */}
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            style={{ "--mx": "50%", "--my": "0%" } as CSSProperties}
            className="section-bg relative mx-auto max-w-[540px] overflow-hidden rounded-[20px] border border-[#13181E]/25 px-6 pt-9 pb-48 shadow-[0_50px_110px_-45px_rgba(19,24,30,0.85)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-[#FFC800]/45 group-hover:shadow-[0_60px_120px_-45px_rgba(19,24,30,0.95)] md:px-12 md:pt-11 md:pb-84"
          >
            {/* Aresta dourada: o único ouro estrutural do cartão */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFC800] to-transparent"
            />

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
            <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 ring-1 ring-[#FFC800]/25 transition-opacity duration-500 ring-inset group-hover:opacity-100" />
            <div className="grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" />

            {/* ── Entregas ───────────────────────────── */}
            {/* Coluna única: a lista é a espinha do cartão, e duas colunas
                quebrariam a leitura de cima a baixo que desemboca no preço. */}
            <ul className="relative mx-auto max-w-[480px] space-y-1">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-lg border border-transparent px-4 py-1.5"
                >
                  {/* Selo cheio, com o traço escuro: o dourado vazado sobre o
                      cartão quase some, e preenchido ele ainda vira ouro. */}
                  <span
                    aria-hidden
                    className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#FFC800] text-[#13181E]"
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-snug font-light text-white md:text-[17px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* ── Preço ──────────────────────────────── */}
            <div className="relative mt-7 border-t border-white/10 pt-7 text-center md:mt-8 md:pt-8">
              <p className="text-base font-light text-white/60 md:text-lg">
                De{" "}
                <s className="decoration-[#FFC800]/60 decoration-1">R$ 347</s>{" "}
                por
              </p>

              <p className="mt-3 font-heading text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase md:text-xs">
                à vista
              </p>
              {/* O corpo cai no menor mobile só para o preço caber em uma linha:
                  quebrado em duas ele deixa de ler como preço. */}
              <p className="mt-1.5 font-heading text-[40px] leading-none font-semibold tracking-tight min-[380px]:text-[48px] sm:text-[56px] md:text-[72px]">
                <span className="text-sheen">R$ 197,00</span>
              </p>

              <p className="mt-3 text-base font-light text-white/60 md:text-lg">
                ou <span className="font-semibold text-white">12x</span> no
                cartão
              </p>

              <CTAButton
                href={CTA_LINK}
                label="Quero entrar no MAPA"
                className="mt-7 w-full max-w-[420px] px-8 py-4 text-sm md:py-5 md:text-base"
              />
            </div>
          </div>

          {/* ── Prévia da área de membros ──────────── */}
          {/* Sobreposta ao cartão, não empurrada por ele: fica em `absolute`
              ancorada no rodapé, ocupando exatamente a sobra do `pb`. Por isso
              é irmã do cartão, e não filha — o `overflow-hidden` de lá cortaria
              a sangria lateral. */}
          <div className="pointer-events-none absolute -bottom-36 left-1/2 z-20 w-[112%] max-w-[640px] -translate-x-1/2">
            <Image
              src="/Group%201171276940.png"
              alt="A área de membros do MAPA aberta em notebook, tablet e celular"
              width={1970}
              height={1288}
              sizes="(max-width: 640px) 100vw, 640px"
              draggable={false}
              className="block h-auto w-full select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
