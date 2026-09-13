import ernizaPreview from "../assets/projects/erniza-preview.webp";
import cargoSentinelPreview from "../assets/projects/cargo-sentinel-preview.webp";
import carTrackerPreview from "../assets/Projects/car-tracker-preview.webp";

function getDomain(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return url;
    }
}

function ProjectCard({ project }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-[#58c4dc]/40 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[#58c4dc]/60"
        >
            {/* Browser-chrome frame around the preview */}
            <div className="border-b border-white/10 bg-[#0f1015]">
                <div className="flex items-center gap-1.5 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="ml-2 truncate rounded bg-white/5 px-2 py-0.5 text-[10px] text-gray-500">
                        {getDomain(project.url)}
                    </span>
                </div>
                <div className="aspect-video overflow-hidden">
                    <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                </div>
            </div>

            {/* Project details */}
            <div className="p-5">
                <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-gray-400"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}

function ProjectGroup({ label, projects }) {
    if (projects.length === 0) return null;

    return (
        <div className="mt-12 first:mt-10">
            <div className="flex items-center gap-3">
                <h3 className="text-sm font-medium text-gray-300">{label}</h3>
                <span className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-gray-500">{projects.length}</span>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}

function Projects() {
    // Add the e-commerce demo builds here once they're live.
    const clientWork = [
        {
            title: "Erniza Africa Safaris",
            description:
                "A responsive tourism website built for a Tanzanian safari company to showcase safari packages, destinations, and travel experiences.",
            tech: ["HTML", "CSS", "JavaScript"],
            image: ernizaPreview,
            url: "https://ernizaafricasafaris.com",
        },
    ];

    const experiments = [
        {
            title: "CargoSentinel",
            description:
                "A logistics-focused business platform developed during an Africa's Talking hackathon, exploring how AI can help address logistical challenges.",
            tech: ["JavaScript", "AI", "Africa's Talking"],
            image: cargoSentinelPreview,
            url: "https://cargo-logistics-business-website.vercel.app/",
        },
        {
            title: "CarTracker",
            description:
                "A vehicle tracking concept developed during an Africa's Talking hackathon with a focus on using technology and AI to solve logistical challenges.",
            tech: ["JavaScript", "AI", "Africa's Talking"],
            image: carTrackerPreview,
            url: "https://car-tracker-sigma-coral.vercel.app/",
        },
    ];

    return (
        <section
            id="Projects"
            aria-label="My projects"
            className="relative px-6 py-20 md:px-12 md:py-24 lg:px-16"
        >
            <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-2xl font-semibold tracking-tight">
                    Projects
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-center text-sm text-gray-400">
                    A selection of client work and applications I've built.
                </p>

                <ProjectGroup label="Client work" projects={clientWork} />
                <ProjectGroup label="Experiments & hackathons" projects={experiments} />
            </div>
        </section>
            );
        }

        export default Projects;