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
    className={`${height} relative z-[1] bg-fixed bg-cover bg-center`}
    style={{ backgroundImage: `url(${src})` }}
    role="img"
    aria-label={alt}
  >
    {overlay && (
      <div className="absolute inset-0 bg-foreground/10" />
    )}
    {/* Mobile fallback — iOS doesn't support background-attachment: fixed */}
    <style>{`
      @supports (-webkit-touch-callout: none) {
        [style*="background-image: url(${src})"] {
          background-attachment: scroll !important;
        }
      }
    `}</style>
  </section>
);

export default ParallaxImage;
