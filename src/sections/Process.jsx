function Process() {
    const steps = [
        {
            number: "01",
            title: "Discovery",
            description:
                "We discuss your goals, audience, content, and requirements — so the website is built around your business, not the other way around."
        },
        {
            number: "02",
            title: "Design & Planning",
            description:
                "I plan the structure and visual direction of the website, and you review it before any code is written."
        },
        {
            number: "03",
            title: "Development",
            description:
                "I build and test the website across desktop and mobile devices, keeping you updated along the way."
        },
        {
            number: "04",
            title: "Launch",
            description:
                "I handle deployment, domain configuration, SSL, and every technical detail — your site goes live smoothly."
        },
        {
            number: "05",
            title: "Support",
            description:
                "After launch, I'm here for updates, maintenance, and improvements as your business grows."
        }
    ];

    return (
        <section
            id="Process"
            aria-label="How I work"
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

            <div className="relative mx-auto max-w-2xl">

                {/* Section header */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        How I work
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto leading-relaxed text-gray-400">
                        A clear, straightforward process — you'll always know
                        what's happening and what comes next.
                    </p>
                </div>

                {/* Steps */}
                <ol className="mt-12 mx-auto flex max-w-lg flex-col gap-8 list-none p-0 text-left">
                    {steps.map((step, index) => (
                        <li key={step.number} className="relative flex items-start gap-5">

                            {/* Connector line — centered on the circle (w-11 = 2.75rem, center = 1.375rem) */}
                            {index < steps.length - 1 && (
                                <span
                                    aria-hidden="true"
                                    className="absolute left-[1.375rem] top-11 bottom-[-2rem] w-px -translate-x-1/2 bg-white/10"
                                />
                            )}

                            {/* Step number */}
                            <span
                                aria-hidden="true"
                                className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#58c4dc]/30 bg-[#58c4dc]/5 text-sm font-medium leading-none text-[#58c4dc]"
                            >
                                {step.number}
                            </span>

                            {/* Step content — title baseline aligned with circle center */}
                            <div className="flex-1">
                                <h3 className="flex h-11 items-center text-base font-medium text-white">
                                    {step.title}
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                                    {step.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

            </div>
        </section>
    );
}

export default Process;
