import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBluesky
} from "react-icons/fa6";

import profileImg from "../assets/profile.jpg"

function Intro() {
    const contactIcons = [
        { name: "Github", icon: <FaGithub />, link: "https://github.com/Goodie-g", target: "_blank", rel: "noopener noreferrer" },
        { name: "Linked", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/godluck-john-mbise-b8aab8323/", target: "_blank", rel: "noopener noreferrer" },
        { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/goodie.dev/", target: "_blank", rel: "noopener noreferrer" },
        { name: "Bluesky", icon: <FaBluesky />, link: "https://bsky.app/profile/goodiedev.bsky.social", target: "_blank", rel: "noopener noreferrer" }
    ]

    return (
        <section className="flex justify-start pt-12">
            <div className="flex flex-col items-center">
                <h1>Hi! I'm <span style={{ fontFamily: "Jersey"}}
                    className="text-6xl floating-text inline-block bg-[radial-gradient(circle,#8fe8f7_20%,#58c4dc_55%,#24718c_100%)] bg-clip-text text-transparent"
                    >Godluck John Mbise</span>
                </h1>
                <h3 className="text-xl">Self Taught Frontend Developer.</h3>
                <div className="flex flex-row gap-2 ">
                    { contactIcons.map((contactIcon) => (
                        <a 
                            href={contactIcon.link}
                            target={contactIcon.target}
                            rel={contactIcon.rel}
                            key={contactIcon.name}
                            className="text-[#58c4dc] transition-all duration-300 hover:text-white hover:scale-110"
                        >
                            <div
                            className="flex flex-col items-center gap-2"
                            >
                            <span className="text-2xl" >{contactIcon.icon}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <img src={profileImg} alt="Goodie" />
        </section>
    )
}

export default Intro;