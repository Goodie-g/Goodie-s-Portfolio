import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa6";

function Footer() {
    const currentYear = new Date().getFullYear();

    const contactIcons = [
        {
            name: "GitHub profile",
            icon: <FaGithub aria-hidden="true" />,
            link: "https://github.com/Goodie-g",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            name: "LinkedIn profile",
            icon: <FaLinkedin aria-hidden="true" />,
            link: "https://www.linkedin.com/in/godluck-john-mbise-b8aab8323/",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            name: "Instagram profile",
            icon: <FaInstagram aria-hidden="true" />,
            link: "https://www.instagram.com/goodie.dev/",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            name: "WhatsApp contact",
            icon: <FaWhatsapp aria-hidden="true" />,
            link: "https://wa.me/255782897186",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ];

    return (
        <footer
            id="Contact"
            aria-label="Contact information and footer"
            className="relative px-6 md:px-12 lg:px-16 pt-24 pb-8 overflow-hidden"
        >

            {/* Ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-20 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-[#58c4dc]/[0.07] blur-[100px]"
            />

            {/* Top edge fade */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#16171d] to-transparent"
            />

            {/* Contact CTA */}
            <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">

                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Let's work together
                </h2>

                <p className="mt-4 max-w-md leading-relaxed text-gray-400">
                    Have a project in mind or want to discuss opportunities?
                    I'd love to hear from you.
                </p>

                {/* Primary CTA */}
                <a
                    href="mailto:godluckjohnmbise@gmail.com"
                    className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#58c4dc] px-7 py-3 font-medium text-[#16171d] transition-colors duration-300 hover:bg-[#8fe8f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d]"
                >
                    <FaEnvelope aria-hidden="true" className="text-lg" />
                    Get in Touch
                </a>

                {/* Secondary: Socials */}
                <nav aria-label="Social media links" className="mt-8">
                    <ul className="flex flex-row items-center gap-3 list-none m-0 p-0">
                        {contactIcons.map((contactIcon) => (
                            <li key={contactIcon.name}>
                                <a
                                    href={contactIcon.link}
                                    target={contactIcon.target}
                                    rel={contactIcon.rel}
                                    aria-label={contactIcon.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-[#58c4dc]/60 hover:text-[#58c4dc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16171d]"
                                >
                                    <span className="text-lg" aria-hidden="true">
                                        {contactIcon.icon}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

            {/* Footer bar */}
            <div className="relative mt-20 border-t border-white/5 pt-6 text-center text-sm text-gray-500">
                <p>
                    <small>© {currentYear} GoodieDev. All rights reserved.</small>
                </p>
            </div>

        </footer>
    );
}

export default Footer;
