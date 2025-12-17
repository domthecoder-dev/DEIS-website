import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Wild And Free Travel Tribe - Revamp",
        type: "Travel Safety Platform",
        tech: "React + Vite",
        date: "December 2025",
        beforeAfterImage: "/assets/Mockup1.svg",
        speed: "Desktop: 6.2s → 0.7s ",
        lighthouse: "| lighthouse: 100/90/100/91",
        features: [
            "Fully responsive, mobile-first design",
            "3-tier safety packages with emotional copy",
            "Contact form + EmailJS integration",
            "Structured data (FAQ + Organization)",
            "Mobile-optimized hero and CTAs"
        ],
        liveUrl: "https://wildandfreetraveltribe.com"
    },
    //{
        //title: "The Meischke Way Foundation - Revamp",
        //type: "Non-profit",
        //tech: "Next.js 14 + Tailwind CSS",
        //date: "December 2025",
        //beforeAfterImage: "/assets/Mockup1.svg",
        //speed: "From 6.2s → 1.1s",
        //lighthouse: "100/100/96/100",
        //features: [
            //"Fully responsive, mobile-first design",
            //"PayPal donation integration",
            //"Dynamic blog system",
            //"JSON-LD NGO schema",
            //"WCAG 2.1 AA compliant"
        //],
        //liveUrl: "https://themeischkeway.org"
    //},
    {
        title: "The Creavtive Corner -> Web Build",
        type: "Creative Studio",
        tech: "React.js",
        date: "April 2025",
        beforeAfterImage: "/assets/mockup2.svg",
        features: [
            "Booking Form Intergration",
            "Dynamic Banner",
            "Mock Instagram",
            "Customized Fonts"
        ],
        liveUrl: "https://thecontentcorner.co.za"
    },
    // ADD NEW PROJECTS HERE — JUST COPY THIS OBJECT
    // {
    //   title: "New Client",
    //   type: "E-commerce",
    //   tech: "React + Vite",
    //   date: "January 2026",
    //   beforeAfterImage: "/images/new-mockup.webp",
    //   speed: "From 8.0s → 0.9s",
    //   lighthouse: "98/100/95/100",
    //   features: ["Feature 1", "Feature 2"],
    //   liveUrl: "https://example.com"
    // }
];

export default function Projects() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
                    Our <span className="text-accent">Work</span>
                </h1>

                <div className="space-y-16 max-w-5xl mx-auto">
                    {projects.map((project, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            {/* Title + Meta */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-black">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-600">
                                        <span className="font-bold">{project.type}</span> | {project.tech} | {project.date}
                                    </p>
                                </div>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 md:mt-0 inline-flex items-center btn-primary text-black font-bold px-6 py-3 rounded hover:bg-teal-400 transition"
                                >
                                    Explore Live Site
                                    <ExternalLink className="ml-2 w-5 h-5" />
                                </a>
                            </div>

                            {/* Before/After Image */}
                            <div className="mb-6">
                                <img
                                    src={project.beforeAfterImage}
                                    alt={`${project.title} - Before → After: Desktop + Mobile mockup`}
                                    className="w-full rounded-lg shadow"
                                />
                                <p className="text-center text-sm text-gray-600 mt-2 italic">
                                    {project.speed}{project.lighthouse}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div>
                                <h3 className="font-bold text-lg mb-3">Key Features</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}