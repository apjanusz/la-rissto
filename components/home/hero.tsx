import Image from "next/image";
import { ActionLink, Container, SectionLabel } from "./shared";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-paper-light/25">
      <div className="relative w-full overflow-hidden sm:min-h-[min(64.6vw,775px)]">
      <div className="absolute inset-0 hidden sm:block">
        <Image src="/images/hero-v2.webp" alt="Pizza z mozzarellą i świeżą bazylią na drewnianej desce" fill priority sizes="100vw"
          className="object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,242,232,0.98)_0%,rgba(246,242,232,0.94)_28%,rgba(246,242,232,0.42)_40%,transparent_53%)]" />
      </div>
      <Container className="relative sm:max-w-none">
        <div className="py-12 sm:w-[41%] sm:max-w-[620px] sm:pt-[9.5%] sm:pb-[11%] sm:pl-[1.5%]">
          <SectionLabel>TRADYCYJNA WŁOSKA PIZZERIA</SectionLabel>
          <h1 id="hero-title" className="mt-7 text-[48px] leading-[1.12] tracking-[-0.035em] sm:mt-[min(3.2vw,38px)] sm:text-[clamp(44px,7.1vw,85px)]">Autentyczny<br />smak Włoch</h1>
          <p className="mt-6 max-w-[420px] text-[17px] leading-[1.6] text-muted sm:mt-[min(2.5vw,30px)] sm:max-w-[86%] sm:text-[clamp(14px,1.95vw,23.4px)]">
            Nasza pizza to połączenie tradycji, świeżych składników i pasji do włoskiej kuchni. Zapraszamy na prawdziwą podróż do słonecznej Italii.
          </p>
          <div className="mt-6 sm:mt-[min(3vw,36px)]"><ActionLink href="#menu" showArrow={false}>Zobacz menu</ActionLink></div>
        </div>
      </Container>
      <div className="relative h-[330px] sm:hidden">
        <Image src="/images/hero-v2.webp" alt="Włoska pizza prosto z pieca" fill sizes="100vw" className="object-cover object-[70%_center] [mask-image:linear-gradient(to_bottom,transparent,black_12%)]" />
      </div>
      </div>
    </section>
  );
}
