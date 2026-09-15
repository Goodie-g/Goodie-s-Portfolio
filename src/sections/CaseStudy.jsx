import {
  FaBullseye,
  FaHammer,
  FaChartLine,
  FaQuoteLeft,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

import ernizaPreview from "../assets/Projects/erniza-preview.webp";

function getDomain(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return url;
    }
}

// ---------------------------------------------------------------------
// Case study data. Each entry can include `result` and `quote` — both
// are optional and simply won't render until you fill them in, so the
// section never shows placeholder text on the live site.
//
// TODO (Erniza): once you have real numbers or feedback, fill in:
//   result: "e.g. Launched in March 2025 — the client reported a
//            steady rise in inquiry emails within the first month."
//   quote: { text: "...", name: "...", role: "Owner, Erniza Africa Safaris" }
// ---------------------------------------------------------------------
const caseStudies = [
    {
        title: "Erniza Africa Safaris",
        url: "https://ernizaafricasafaris.com",
        image: ernizaPreview,
        tech: ["HTML", "CSS", "JavaScript"],
        ask:
            "Erniza Africa Safaris needed a website that could present Tanzania's safaris, mountain treks, and destinations credibly to travelers researching a trip from abroad — clear enough to build confidence before anyone ever sends an inquiry.",
        built:
            "A responsive, multi-page marketing site: a full-bleed imagery homepage, dedicated sections for safaris, mountain treks, and destinations, and clear calls-to-action guiding visitors toward booking. Built with HTML, CSS, and JavaScript, with a language switcher for international visitors.",
        result: null,
        quote: null
    }
];

function CaseStudyCard({ study }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

            {/* Browser-chrome frame around the preview — consistent with Projects */}
            <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-white/10 bg-[#0f1015] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58c4dc]/60"
            >
                <div className="flex items-center gap-1.5 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="ml-2 flex items-center gap-1.5 truncate rounded bg-white/5 px-2 py-0.5 text-[10px] text-gray-500">
                        {getDomain(study.url)}
                        <FaArrowUpRightFromSquare
                            aria-hidden="true"
                            className="text-[9px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                    </span>
                </div>
                <div className="aspect-video overflow-hidden">
                    <img
                        src={study.image}
                        alt={`${study.title} website preview`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                </div>
            </a>

            <div className="p-6 md:p-8">

                {/* Title + tech */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                        {study.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                        {study.tech.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-gray-400"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Ask / Built / Result breakdown */}
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#58c4dc]">
                            <FaBullseye aria-hidden="true" />
                            The Ask
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-gray-400">
                            {study.ask}
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#58c4dc]">
                            <FaHammer aria-hidden="true" />
                            What I Built
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-gray-400">
                            {study.built}
                        </p>
                    </div>

                    {study.result && (
                        <div>
                            <div className="flex items-center gap-2 text-sm font-medium text-[#58c4dc]">
                                <FaChartLine aria-hidden="true" />
                                The Result
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                {study.result}
                            </p>
                        </div>
                    )}
                </div>

                {/* Optional client quote */}
                {study.quote && (
                    <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#58c4dc]/20 bg-[#58c4dc]/[0.04] p-5">
                        <FaQuoteLeft aria-hidden="true" className="mt-1 shrink-0 text-[#58c4dc]" />
                        <div>
                            <p className="text-sm italic leading-relaxed text-gray-300">
                                {study.quote.text}
                            </p>
                            <p className="mt-2 text-xs font-medium text-gray-500">
                                {study.quote.name}
                                {study.quote.role && `, ${study.quote.role}`}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function CaseStudy() {
    if (caseStudies.length === 0) return null;

    return (
        <section
            id="CaseStudy"
            aria-label="Case study"
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
                    <span className="text-xs font-medium uppercase tracking-wider text-[#58c4dc]">
                        Case Study
                    </span>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                        A closer look at real client work
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto leading-relaxed text-gray-400">
                        What the client needed, what I built, and how it turned out.
                    </p>
                </div>

                {/* Case studies */}
                <div className="mt-12 flex flex-col gap-8">
                    {caseStudies.map((study) => (
                        <CaseStudyCard key={study.title} study={study} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default CaseStudy;
