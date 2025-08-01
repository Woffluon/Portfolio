import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "İnovasyon",
    "Hassasiyet",
    "Güven",
    "İş Birliği",
    "Mükemmellik",
  ];
  const items2 = [
    "iletişime geç",
    "iletişime geç",
    "iletişime geç",
    "iletişime geç",
    "iletişime geç",
  ];


  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Gelin, <br />
          <span className="font-normal">unutulmaz</span> &{" "}
          <span className="italic">ilham veren</span> <br />
          bir web uygulamasını <span className="text-gold">birlikte</span> inşa edelim “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
