import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa6";

function Intro() {
    const contactIcons = [
        {
            name: "Github",
            icon: <FaGithub />,
            link: "https://github.com/Goodie-g",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/godluck-john-mbise-b8aab8323/",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            link: "https://www.instagram.com/goodie.dev/",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp />,
            link: "https://wa.me/255782897186",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ];

    return (
        <section className="relative px-6 md:px-12 lg:px-16 pt-24 pb-24 md:pt-32 md:pb-28 overflow-hidden">

            {/* Ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-8 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-[#58c4dc]/10 blur-[120px]"
            />

            {/* Hero Content */}
            <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">

                {/* Availability badge */}
                <span className="inline-flex items-center gap-2.5 rounded-full border border-[#58c4dc]/25 bg-[#58c4dc]/5 px-4 py-1.5 text-xs md:text-sm tracking-wide text-[#8fe8f7]">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#58c4dc] opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#58c4dc]" />
                    </span>
                    Available for freelance projects
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                    I build modern websites for{" "}
                    <span className="bg-gradient-to-r from-[#8fe8f7] via-[#58c4dc] to-[#2f89a8] bg-clip-text text-transparent">
                        businesses &amp; brands.
                    </span>
                </h1>

                <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-gray-400">
                    I create responsive, custom websites with React and modern
                    web technologies — focused on clean design, performance,
                    and great user experiences.
                </p>

                {/* CTA Buttons */}
                <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="#Contact"
                        className="px-7 py-3 rounded-lg bg-[#58c4dc] text-[#16171d] font-medium transition-colors duration-300 hover:bg-[#8fe8f7]"
                    >
                        Work With Me
                    </a>
                    <a
                        href="#Projects"
                        className="px-7 py-3 rounded-lg border border-[#58c4dc]/40 text-[#58c4dc] font-medium transition-colors duration-300 hover:border-[#58c4dc] hover:bg-[#58c4dc]/10"
                    >
                        View My Work
                    </a>
                </div>

                {/* Social Links */}
                <div className="mt-10 flex flex-row items-center gap-3">
                    {contactIcons.map((contactIcon) => (
                        <a
                            href={contactIcon.link}
                            target={contactIcon.target}
                            rel={contactIcon.rel}
                            key={contactIcon.name}
                            aria-label={contactIcon.name}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-[#58c4dc]/60 hover:text-[#58c4dc]"
                        >
                            <span className="text-lg">
                                {contactIcon.icon}
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Intro;
