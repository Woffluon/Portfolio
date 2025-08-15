import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Benim için yazılım, sadece bir kariyer seçimi değil; kendini ifade etmenin, dünyaya müdahil olmanın, sistemleri sorgulamanın bir yöntemi.`;
  const aboutText = `Her proje bir problemi çözmenin ötesinde, o problemin neden var olduğunu, hangi değerler ekseninde anlamlı olduğunu sorgulamakla başlar. Bu yüzden projelerime yaklaşırken yalnızca “nasıl” değil, “neden” sorusunu da öncelikli kılarım.\n\nBeni Tanımlayan Düşünce Biçimi:\n- Derinliksiz hiçbir şeyi sevmem. Geliştirdiğim her sistem, mutlaka bir anlam taşımalı.\n- Hızdan çok ‘neden’e önem veririm. Bir şeyi çabuk yapmak yerine neden öyle yapılması gerektiğini anlarım.\n- Yapay zekâyı sadece kullanmam, ona akıl yüklerim. Onu bir asistan değil, düşünsel bir araç olarak görürüm.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    if (imgRef.current) {
      gsap.set(imgRef.current, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      });
      gsap.to(imgRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: { trigger: imgRef.current },
      });
    }
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Neden'e Odaklanmak"}
        title={"Hakkımda"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-6 md:px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <AnimatedTextLines text={aboutText} className={"w-full lg:w-3/4 mx-auto"} />
      </div>
    </section>
  );
};

export default About;

