import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";

function Intro() {
    const contactIcons = [
        { name: "Github", icon: <FaGithub /> },
        { name: "Linked", icon: <FaLinkedin /> },
        { name: "Instagram", icon: <FaInstagram /> },
        { name: "X", icon: <FaXTwitter /> }
    ]
    return (
        <section className="flex justify-start pt-12">
            <div className="flex flex-col items-center">
                <h1>Hi! I'm <span style={{ fontFamily: "Jersey", color: "#58c4dc"}}
                className="text-5xl floating-text inline-block">Godluck John Mbise</span></h1>
                <h3 style={{fontSize: "1.2rem"}}>Self Taught Frontend Developer.</h3>
                <div className="flex flex-row gap-2 ">
                    { contactIcons.map((contactIcon) => (
                        <div
                        key={contactIcon.name}
                        className="flex flex-col items-center gap-2"
                        >
                        <span className="text-2xl" >{contactIcon.icon}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Intro;