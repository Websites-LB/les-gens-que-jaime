import { LOGO_PATHS, LOGO_VIEWBOX } from "@/lib/logo-paths";

/** The restaurant's own handwritten wordmark. Each stroke group has its own clip so the hero can write it out. */
export function Logo({ className, animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg className={className} viewBox={LOGO_VIEWBOX} role="img" aria-label="Les gens que j'aime" fill="currentColor">
      {animated && (
        <defs>
          {LOGO_PATHS.map((_, i) => (
            <clipPath key={i} id={`logo-clip-${i}`}>
              <rect data-logo-rect x="128" y="832" width="544" height="250" />
            </clipPath>
          ))}
        </defs>
      )}
      {LOGO_PATHS.map((d, i) => (
        <path key={i} d={d} clipPath={animated ? `url(#logo-clip-${i})` : undefined} />
      ))}
    </svg>
  );
}
