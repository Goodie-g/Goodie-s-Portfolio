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
        <h2 style={{ display:"block"}}>Languages and Tools</h2>
      <div className="flex gap-2 justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-2xl">{skill.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;