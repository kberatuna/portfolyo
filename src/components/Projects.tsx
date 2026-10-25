type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "Kişisel Portfolyo",
    description: "Kendimi ve hizmetlerimi tanıttığım, sıfırdan kurup yayına aldığım ilk web sitem.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://portfolyo-khaki-beta.vercel.app",
    githubUrl: "https://github.com/kberatuna/portfolyo",
  },
];

export default function Projects() {
  return (
    <section id="projeler" className="py-16">
      <h2 className="text-3xl font-bold">Projeler</h2>
      {projects.length === 0 ? (
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Yakında burada projelerim olacak.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-800"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4 text-sm font-medium text-blue-600">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Siteyi gör →
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Kodu gör →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
