import {
  FaGlobe,
  FaPenNib,
  FaReact,
  FaMobileScreen,
  FaPlug,
  FaLanguage,
  FaServer,
  FaShieldHalved
} from "react-icons/fa6";

function Services() {
    const services = [
        {
            name: "Business Websites",
            description:
                "Professional websites that build credibility and turn visitors into customers — tailored to your business goals.",
            icon: <FaGlobe aria-hidden="true" />
        },
        {
            name: "Website Design & Redesign",
            description:
                "Modern, clean designs that reflect your brand — or a fresh new look for your existing website.",
            icon: <FaPenNib aria-hidden="true" />
        },
        {
            name: "React Development",
            description:
                "Fast, interactive web experiences built with modern React — reliable, maintainable, and built to last.",
            icon: <FaReact aria-hidden="true" />
        },
        {
            name: "Responsive & Mobile-Friendly",
            description:
                "Your website will look and work beautifully on every device — phones, tablets, and desktops.",
            icon: <FaMobileScreen aria-hidden="true" />
        },
        {
            name: "API & Payment Integration",
            description:
                "Secure integration of payment gateways, forms, and third-party services your business relies on.",
            icon: <FaPlug aria-hidden="true" />
        },
        {
            name: "Content & Localization",
            description:
                "Clear, well-structured content that speaks to your audience — including multilingual support.",
            icon: <FaLanguage aria-hidden="true" />
        },
        {
            name: "Deployment & Hosting Setup",
            description:
                "I handle the technical setup — hosting, domain, and SSL — so your site goes live smoothly and securely.",
            icon: <FaServer aria-hidden="true" />
        },
        {
            name: "Maintenance & Updates",
            description:
                "Ongoing care after launch: updates, improvements, and support so your website stays fast and secure.",
            icon: <FaShieldHalved aria-hidden="true" />
        }
    ];

    return (
        <section
            id="Services"
            aria-label="Services I offer"
            className="relative px-6 md:px-12 lg:px-16 py-20 md:py-24 overflow-hidden"
        >

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

            <div className="relative mx-auto max-w-4xl">

                {/* Section header */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        What I can do for you
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto leading-relaxed text-gray-400">
                        From first idea to launch and beyond — I offer everything
                        your business needs to succeed online.
                    </p>
                </div>

                {/* Services grid */}
                <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0">
                    {services.map((service) => (
                        <li
                            key={service.name}
                            className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-[#58c4dc]/40 hover:bg-[#58c4dc]/[0.04]"
                        >
                            <div className="flex items-start gap-4">
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#58c4dc]/25 bg-[#58c4dc]/5 text-[#58c4dc] transition-colors duration-300 group-hover:border-[#58c4dc]/50">
                                    {service.icon}
                                </span>
                                <div>
                                    <h3 className="text-base font-medium text-white">
                                        {service.name}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}

export default Services;
