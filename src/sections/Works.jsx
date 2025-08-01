import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProjectCard from "../components/ProjectCard";

const Works = () => {
  const text = `Tutkuyla ve özenle hazırlanmış, sonuç odaklı ve etki yaratan öne çıkan projelerim.`;

  useGSAP(() => {
    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="work" className="flex flex-col min-h-screen px-4 py-10 md:py-16 sm:px-6 lg:px-8">
      <AnimatedHeaderSection
        subTitle={"Mantık ve Estetiğin Buluştuğu Yer"}
        title={"Projelerim"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="grid grid-cols-1 gap-8 mt-16 projects-grid md:grid-cols-2 lg:gap-12">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};


export default Works;
