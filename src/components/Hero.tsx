"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="section-bg relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pt-20 pb-24 md:pt-24 md:pb-32"
    >
      {/* ===== Imagem de fundo ===== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Mobile: faixa deslocada para a esquerda. Desktop: largura total */}
        <div className="absolute top-0 left-0 h-[62%] w-full md:h-full">
          <Image
            src="/hero-bg.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[100%_38%] md:object-[center_38%]"
          />
          {/* Mobile: a base da foto dissolve no fundo escuro */}
          <div className="absolute inset-0 md:hidden bg-[linear-gradient(180deg,transparent_18%,rgba(24,31,40,0.55)_45%,rgba(24,31,40,0.85)_66%,rgba(24,31,40,0.97)_84%,#181F28_100%)]" />
          {/* Desktop: lado esquerdo escurecido dá contraste para a copy */}
          <div className="absolute inset-0 hidden md:block bg-[linear-gradient(90deg,#13181E_0%,rgba(19,24,30,0.92)_26%,rgba(19,24,30,0.55)_46%,transparent_66%)]" />
        </div>
        {/* Fecha a base para costurar com a onda da próxima seção */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_74%,#13181E_100%)]" />
      </div>

      {/* ===== Camadas decorativas ===== */}
      <div className="grid-overlay pointer-events-none absolute inset-0 z-0 opacity-40" />

      {/* ===== Conteúdo principal ===== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl py-14 lg:py-10">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          className="mx-auto flex max-w-[90%] translate-y-24 flex-col items-center text-center sm:max-w-md md:translate-y-0 md:ml-12 md:max-w-2xl md:items-start md:text-left lg:ml-20"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.9, ease }}
            className="max-w-xl font-heading text-[1.75rem] leading-[1.2] font-medium tracking-tight text-white md:text-[2rem] lg:text-[2.75rem]"
          >
            Aprenda a formular seus casos com{" "}
            <span className="text-[#FFC800]">clareza</span> e saiba qual caminho
            seguir no tratamento com{" "}
            <span className="text-[#FFC800]">segurança</span>.
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8, ease }}
            className="mt-4 max-w-lg text-base leading-relaxed font-normal text-white/65 md:mt-6 md:text-lg"
          >
            Com o <span className="font-semibold text-white">MAPA</span>, você
            organiza os dados clínicos, visualiza como os elementos do caso se
            relacionam e transforma a conceitualização em direção para sua
            prática.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease }}
            className="mt-7 md:mt-10"
          >
            <CTAButton
              href="#oferta"
              label="Quero usar o MAPA em meus atendimentos"
              mobileLabel="Quero conhecer o MAPA"
              className=""
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ===== Transição em onda para a próxima seção (clara) ===== */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full leading-none">
        <svg
          className="block h-12 w-full text-[#F2EEE7] md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C150,90 350,110 600,110 C850,110 1050,90 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
