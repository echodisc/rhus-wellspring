interface ParallaxImageProps {
  src: string;
  alt: string;
  height?: string;
  overlay?: boolean;
}

const ParallaxImage = ({
  src,
  alt,
  height = "min-h-[50vh]",
  overlay = true,
}: ParallaxImageProps) => (
  <section
    className={`${height} relative z-[1] overflow-hidden`}
    role="img"
    aria-label={alt}
  >
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    {overlay && (
      <div className="absolute inset-0 bg-foreground/10" style={{ forcedColorAdjust: "none" } as React.CSSProperties} />
    )}
  </section>
);

export default ParallaxImage;
