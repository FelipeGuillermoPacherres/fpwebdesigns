import React, { useId } from "react";

const projectUrls = {
    bertha: "https://holabertha.com/pe",
    heavenly: "https://heavenlyhairfl.com",
    raquel: "https://raquelintampa.com",
};

const content = {
    es: {
        eyebrow: "PROYECTOS EN DESARROLLO Y EVOLUCIÓN",
        title: "Ideas que toman",
        highlight: "forma real.",
        description:
            "Cada negocio plantea un reto diferente. Así voy construyendo sus soluciones.",
        peruLink: "Conocer la interfaz de Perú",
        mexicoLink: "Conocer la interfaz de México",
        newTab: "se abre en otra pestaña",
        projects: [
            {
                id: "bertha",
                name: "Hola Bertha",
                category: "WEB + SISTEMA DE GESTIÓN",
                description:
                    "Una web con su propio sistema para organizar postulantes, clientes y contrataciones, con presencia en Perú y México.",
                image: "/img/proyectos/proyecto-hola-bertha.png",
                alt: "Página de inicio de Hola Bertha para Perú.",
            },
            {
                id: "heavenly",
                name: "Heavenly Hair Salon",
                category: "IDENTIDAD + PRESENCIA DIGITAL",
                description:
                    "Una presencia digital que refleja el estilo y la personalidad del salón.",
                image: "/img/proyectos/proyecto-heavenly-hair.png",
                alt: "Página de inicio de Heavenly Hair Salon.",
            },
            {
                id: "raquel",
                name: "Raquel in Tampa",
                category: "SERVICIOS + CONTACTO + RESERVAS",
                description:
                    "Una experiencia clara para descubrir servicios de belleza y bienestar y dar el siguiente paso.",
                image: "/img/proyectos/proyecto-raquel-in-tampa.png",
                alt: "Página de inicio de Raquel in Tampa.",
            },
        ],
    },

    en: {
        eyebrow: "PROJECTS IN DEVELOPMENT AND EVOLUTION",
        title: "Ideas taking",
        highlight: "real shape.",
        description:
            "Every business presents a different challenge. Here's how I build their solutions.",
        peruLink: "Explore the Peru website",
        mexicoLink: "Explore the Mexico website",
        newTab: "opens in a new tab",
        projects: [
            {
                id: "bertha",
                name: "Hola Bertha",
                category: "WEBSITE + MANAGEMENT SYSTEM",
                description:
                    "A website with its own system for organizing applicants, clients and hiring, with a presence in Peru and Mexico.",
                image: "/img/proyectos/proyecto-hola-bertha.png",
                alt: "Hola Bertha home page for Peru.",
            },
            {
                id: "heavenly",
                name: "Heavenly Hair Salon",
                category: "IDENTITY + DIGITAL PRESENCE",
                description:
                    "A digital presence that reflects the salon's style and personality.",
                image: "/img/proyectos/proyecto-heavenly-hair.png",
                alt: "Heavenly Hair Salon home page.",
            },
            {
                id: "raquel",
                name: "Raquel in Tampa",
                category: "SERVICES + CONTACT + BOOKINGS",
                description:
                    "A clear experience for discovering beauty and wellness services and taking the next step.",
                image: "/img/proyectos/proyecto-raquel-in-tampa.png",
                alt: "Raquel in Tampa home page.",
            },
        ],
    },
};

export default function ProjectsFrame({ lang = "es" }) {
    const titleId = useId();
    const text = content[lang] ?? content.es;

    return (
        <section
            className="fp-projects"
            aria-labelledby={titleId}
        >
            <header className="fp-projects__header">
                <div>
                    <p className="fp-projects__eyebrow">
                        {text.eyebrow}
                    </p>

                    <h2
                        id={titleId}
                        className="fp-projects__title"
                    >
                        <span>{text.title}</span>

                        <span className="fp-projects__highlight">
                            {text.highlight}
                        </span>
                    </h2>
                </div>

                <p className="fp-projects__intro">
                    {text.description}
                </p>
            </header>

            <div className="fp-projects__grid">
                {text.projects.map((project) => (
                    <article
                        key={project.id}
                        className={`fp-projects__item${
                            project.id === "raquel"
                                ? " fp-projects__item--wide"
                                : ""
                        }`}
                    >
                        <div className="fp-projects__visual">
                            <div
                                className="fp-projects__browser"
                                aria-hidden="true"
                            >
                                <span />
                                <span />
                                <span />
                            </div>

                            <img
                                src={project.image}
                                alt={project.alt}
                                className="fp-projects__image"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="fp-projects__content">
                            <p className="fp-projects__category">
                                {project.category}
                            </p>

                            <h3 className="fp-projects__name">
                                <a
                                    className="fp-projects__link"
                                    href={projectUrls[project.id]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.name}${
                                        project.id === "bertha"
                                            ? lang === "en"
                                                ? " — Peru"
                                                : " — Perú"
                                            : ""
                                    } (${text.newTab})`}
                                >
                                    {project.name}

                                    <i
                                        className="fa-solid fa-arrow-up-right-from-square"
                                        aria-hidden="true"
                                    />
                                </a>
                            </h3>

                            <p className="fp-projects__description">
                                {project.description}
                            </p>

                            {project.id === "bertha" && (
                                <div className="fp-projects__markets">
                                    <a
                                        href="https://holabertha.com/pe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${text.peruLink} (${text.newTab})`}
                                    >
                                        {text.peruLink}

                                        <i
                                            className="fa-solid fa-arrow-up-right-from-square"
                                            aria-hidden="true"
                                        />
                                    </a>

                                    <a
                                        href="https://holabertha.com/mx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${text.mexicoLink} (${text.newTab})`}
                                    >
                                        {text.mexicoLink}

                                        <i
                                            className="fa-solid fa-arrow-up-right-from-square"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
