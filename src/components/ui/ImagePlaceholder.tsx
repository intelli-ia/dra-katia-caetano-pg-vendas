import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  /** Proporção da caixa, ex.: "4/5", "16/9". Use `null` para controlar a altura via classes. */
  ratio?: string | null;
  /** Fundo sobre o qual a moldura será exibida. */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Espaço reservado para imagem ainda não fornecida pela cliente.
 * Renderiza apenas a moldura vazia — nenhum conteúdo fictício.
 */
export function ImagePlaceholder({
  ratio = "4/5",
  tone = "dark",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      style={ratio ? { aspectRatio: ratio } : undefined}
      className={cn(
        "w-full rounded-2xl border border-dashed",
        tone === "dark"
          ? "border-white/12 bg-white/[0.02]"
          : "border-[#13181E]/12 bg-[#13181E]/[0.02]",
        className,
      )}
    />
  );
}
