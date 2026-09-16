// Static export: pre-generated AVIF/WebP srcsets, with a dedicated mobile crop.
import portraits from './portraits.json';

type PortraitName = keyof typeof portraits;
function srcSet(name: PortraitName, format: string) {
  return portraits[name].widths.map((width) => `/images/portraits/${name}-${width}.${format} ${width}w`).join(', ');
}

export function Portrait({ name, alt, className = '' }: {
  name: 'hero' | 'about' | 'contact';
  alt: string;
  className?: string;
}) {
  const hero = name === 'hero';
  const sizes = hero
    ? '(min-width: 1440px) 1267px, (min-width: 900px) 90vw, (min-width: 600px) 70vw, 100vw'
    : '(min-width: 1200px) 440px, (min-width: 768px) 40vw, calc(100vw - 48px)';
  const { width, height } = portraits[name];
  return (
    <picture className={className}>
      {hero && <>
        <source media="(max-width: 899px)" type="image/avif" srcSet={srcSet('hero-mobile', 'avif')} sizes={sizes} width={3700} height={3700} />
        <source media="(max-width: 899px)" type="image/webp" srcSet={srcSet('hero-mobile', 'webp')} sizes={sizes} width={3700} height={3700} />
      </>}
      <source type="image/avif" srcSet={srcSet(name, 'avif')} sizes={sizes} />
      <img
        src={`/images/portraits/${name}-${hero ? 1280 : 800}.webp`}
        srcSet={srcSet(name, 'webp')}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={hero ? 'eager' : 'lazy'}
        fetchPriority={hero ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  );
}
