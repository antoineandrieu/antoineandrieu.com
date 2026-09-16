type LogoProps = {
  variant?: "light" | "dark" | "black";
  className?: string;
  width?: number;
  height?: number;
  decorative?: boolean;
};

/** The supplied SVG is kept as the single geometry source; variants only swap its charcoal fill. */
export function Logo({
  variant = "light",
  className = "",
  width = 131,
  height = 85,
  decorative = true,
}: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- external SVG keeps its IDs isolated and its geometry untouched
    <img
      src={`/brand/antoine-andrieu-aa${variant === "dark" ? "-dark" : variant === "black" ? "-black" : ""}.svg`}
      width={width}
      height={height}
      className={`logo ${className}`}
      alt={decorative ? "" : "Antoine Andrieu"}
      aria-hidden={decorative ? true : undefined}
      decoding="async"
    />
  );
}
