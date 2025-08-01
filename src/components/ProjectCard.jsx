import React from 'react';
import { Icon } from '@iconify/react';

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Projeyi İncele: ${project.name}`}
      className="relative block w-full overflow-hidden text-white transition-shadow duration-300 ease-in-out bg-black border border-transparent rounded-2xl group hover:shadow-2xl hover:shadow-gold/20 min-h-[400px] md:min-h-[450px]"
    >
      {/* Arka Plan Resmi */}
      <img
        src={project.bgImage}
        alt={`${project.name} arkaplan`}
        loading="lazy"
        className="absolute inset-0 object-cover w-full h-full transition-all duration-700 ease-in-out opacity-40 group-hover:opacity-60 group-hover:scale-105"
      />

      {/* İçerik Alanı */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
        {/* Üst Kısım: Başlık ve Açıklama */}
        <div>
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {project.name}
          </h3>
          <p className="text-base font-light leading-relaxed text-white/80">
            {project.description}
          </p>
        </div>

        {/* Alt Kısım: Teknolojiler ve Link */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {project.frameworks.map((framework) => (
              <span
                key={framework.id}
                className="px-3 py-1 text-xs font-semibold text-black uppercase transition-colors duration-300 rounded-full bg-white/80 group-hover:bg-gold"
              >
                {framework.name}
              </span>
            ))}
          </div>
          <div className="flex items-center text-lg font-semibold text-gold">
            Projeyi İncele
            <Icon icon="lucide:arrow-right" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
