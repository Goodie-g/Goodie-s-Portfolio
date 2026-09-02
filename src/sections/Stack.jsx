import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVite
} from "react-icons/si";

function Stack() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 aria-hidden="true" /> },
    { name: "CSS3", icon: <SiCss aria-hidden="true" /> },
    { name: "JavaScript", icon: <SiJavascript aria-hidden="true" /> },
    { name: "React", icon: <SiReact aria-hidden="true" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" /> },
    { name: "Git", icon: <SiGit aria-hidden="true" /> },
    { name: "GitHub", icon: <SiGithub aria-hidden="true" /> },
    { name: "Vite", icon: <SiVite aria-hidden="true" /> }
  ];

  return (
    <section
      id="Languages-&-Tools"
      aria-label="Languages and tools I use"
      className="flex flex-col gap-2 justify-center p-6"
    >
      <h2 className="text-xl block text-center">Languages and Tools</h2>
      <ul className="flex gap-2 justify-center list-none m-0 p-0">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-2xl active:scale-95 size-[30px] max-[1024px]:size-[26px] max-[640px]:size-[24px] max-[384px]:size-[22px] hover:scale-108 max-[1024px]:hover:scale-105 transition-all transition duration-200 hover:brightness-125"
              title={skill.name}
            >
              {skill.icon}
            </span>
            <span className="sr-only">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Stack;
