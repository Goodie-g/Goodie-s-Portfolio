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

import profileImg from "../assets/profile.jpg";

function About() {
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
            id="About"
            aria-label="About me"
            className="relative px-6 md:px-12 lg:px-16 py-20 md:py-24 overflow-hidden"
        >

            {/* Ambient glow — centered behind image, softened at edges */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 -translate-x-1/4 rounded-full bg-[#58c4dc]/[0.07] blur-[100px]"
            />

            {/* Top edge fade */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#16171d] to-transparent"
            />

            {/* Bottom edge fade */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#16171d] to-transparent"
            />

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

                {/* Profile Image */}
                <figure className="relative shrink-0">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 scale-125 rounded-full bg-[#58c4dc]/15 blur-3xl"
                    />
                    <img
                        src={profileImg}
                        alt="Portrait of Godluck John Mbise, a frontend developer based in Dar es Salaam, Tanzania"
                        width={240}
                        height={240}
                        loading="lazy"
                        decoding="async"
                        className="relative h-48 w-48 md:h-60 md:w-60 rounded-full object-cover ring-1 ring-[#58c4dc]/30"
                    />
                </figure>

                {/* Bio + Tools */}
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-2xl font-semibold tracking-tight text-white">
                        About me
                    </h2>
                    <p className="mt-4 leading-relaxed text-gray-400">
                        I'm Goodie, a frontend developer and independent web
                        developer based in Dar es Salaam. I enjoy turning ideas into
                        clean, responsive, and practical web experiences.
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-400">
                        I work directly with businesses and organizations to
                        design, build, and launch websites that help them grow
                        — with a focus on quality, clear communication, and
                        lasting results.
                    </p>

                    {/* Languages & Tools */}
                    <div className="mt-8">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500">
                            Languages &amp; tools I work with
                        </h3>
                        <ul className="mt-4 flex flex-wrap justify-center md:justify-start gap-3 list-none m-0 p-0">
                            {skills.map((skill) => (
                                <li
                                    key={skill.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-gray-400 transition-all duration-300 hover:border-[#58c4dc]/60 hover:text-[#58c4dc]"
                                    title={skill.name}
                                >
                                    {skill.icon}
                                    <span className="sr-only">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
