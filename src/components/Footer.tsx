import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#0F141A] px-6 py-12 md:py-14">
      {/* Fio dourado que fecha a página */}
      <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#FFC800]/45 to-transparent" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-3 text-center">
        <p className="font-heading text-base font-medium tracking-tight text-white/85 md:text-lg">
          Drª. Kátia Caetano
        </p>
        <p className="text-xs leading-relaxed text-white/40">
          © {year} {SITE_NAME}. Todos os direitos reservados.
        </p>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/25">
          Este site não é afiliado, associado, autorizado, endossado ou de
          qualquer forma oficialmente vinculado ao Facebook, Instagram, Meta
          Platforms, Inc. ou a qualquer uma de suas subsidiárias ou afiliadas.
          Os nomes Facebook e Instagram, bem como as marcas relacionadas, são
          marcas registradas de seus respectivos proprietários.
        </p>
      </div>
    </footer>
  );
}
