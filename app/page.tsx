export default function HomePage() {
  const inlineLogoStyle = { width: '2.6rem', height: '2.6rem' };
  const heroLogoStyle = { width: 'clamp(300px, 42vw, 480px)', height: 'auto' };

  return (
    <section className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="font-serif text-1xl text-ink md:text-3xl">Hi,</p>
        <h1 className="font-serif text-1xl text-ink md:text-3xl">
          I&apos;m{' '}
          <span className="inline-flex items-center -mr-[2px]" style={{ gap: '0px' }}>
            <img
              src="/logo/logo.svg"
              alt="Y logo"
              style={inlineLogoStyle}
              className="inline-block align-middle"
            />
            angyang,
          </span>
          <br />
          Software Engineer building for AI era.
        </h1>
        <p className="text-sm text-ink/50">
          Master in Computing &amp; Software at McMaster
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/logo/logo.svg"
          alt="Yangyang Zhang logo mark"
          style={heroLogoStyle}
          className="rotate-[-45deg]"
        />
      </div>
    </section>
  );
}
