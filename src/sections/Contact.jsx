import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";
import "../styles/contact-enhancements.css";

const Contact = () => {
  const text = `Bir proje fikriniz mi var veya sadece merhaba mı demek istiyorsunuz? Bana ulaşmaktan çekinmeyin.`;
  const items = [
    "Teknolojiyle Düşünmek",
    "Sistemler Kurmak",
    "Anlam Yaratmak",
    "Kodla İfade Etmek",
    "Geleceği İnşa Etmek",
  ];
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
    });
    
    tl.from(".contact-item", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    })
    .from(".contact-link", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.5")
    .from(".marquee-container", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.3");
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Birlikte Üretelim"}
          title={"İletişim"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-6 md:px-10 font-light text-white leading-none">
          <div className="flex flex-col w-full gap-12">
            <div className="contact-item">
              <h2 className="text-sm md:text-base uppercase tracking-wider text-white/90">E-posta</h2>
              <div className="w-full h-px my-3 bg-gradient-to-r from-white/20 via-white/50 to-white/20" />
              <p className="text-lg tracking-wider lowercase md:text-2xl lg:text-3xl font-light hover:text-white/80 transition-all duration-300 cursor-pointer">
                efe.arabaci.dev@gmail.com
              </p>
            </div>
            
            <div className="contact-item">
              <h2 className="text-sm md:text-base uppercase tracking-wider text-white/90">GitHub</h2>
              <div className="w-full h-px my-3 bg-gradient-to-r from-white/20 via-white/50 to-white/20" />
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link text-lg tracking-wider lowercase md:text-2xl lg:text-3xl font-light hover:text-white/80 transition-all duration-300 cursor-pointer"
                >
                  {social.href.replace('https://', '')}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <Marquee items={items} className="text-white bg-transparent" />
      </div>
    </section>
  );
};

export default Contact;

