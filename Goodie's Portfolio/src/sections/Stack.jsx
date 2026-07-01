import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma
} from "react-icons/si";

function Stack() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Vite", icon: <SiVite /> }
    // { name: "Figma", icon: <SiFigma /> }
  ];

  return (
    <div className="flex flex-col gap-2 justify-center mt-36">
        <h2 className="text-xl block">Languages and Tools:</h2>
      <div className="flex gap-2 justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-2xl active:scale-95 size-[30px] max-[1024px]:size-[26px] max-[640px]:size-[24px] max-[384px]:size-[22px] hover:scale-108 max-[1024]:hover:scale-105 transition-normal transition duration-200 hover:brightness-125">{skill.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;