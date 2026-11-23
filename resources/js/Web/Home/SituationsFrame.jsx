import React, { useId, useState } from "react";

const content = {
    es: {
        eyebrow: "TU NEGOCIO MARCA EL RITMO",
        title: "¿Tu negocio crece,",
        titleMiddle: "pero tu web",
        titleHighlight: "se queda corta?",
        description: "Tu web debería adaptarse a tu forma de trabajar.",
        closing: "Tu web puede hacer más por tu negocio.",
        situations: [
            {
                id: "funciones",
                title: "Necesito algo y mi web no me deja.",
                category: "DESARROLLO A MEDIDA",
                description:
                    "Construimos las funciones que tu negocio necesita, adaptadas a tu forma de trabajar.",
                alt: "Sistema de gestión con módulos personalizables.",
            },
            {
                id: "automatizacion",
                title: "Pierdo tiempo haciendo todo a mano.",
                category: "AUTOMATIZACIÓN",
                description:
                    "Conectamos formularios, solicitudes y tareas para reducir el trabajo repetitivo.",
                alt: "Flujo de solicitudes y tareas automatizadas.",
            },
            {
                id: "integraciones",
                title: "Mis herramientas trabajan por separado.",
                category: "INTEGRACIONES",
                description:
                    "Conectamos tu web con las plataformas que ya utilizas para aprovechar mejor tus herramientas.",
                alt: "Sitio web conectado con pagos, reservas y clientes.",
            },
            {
                id: "google",
                title: "Mi negocio no aparece en Google.",
                category: "PRESENCIA DIGITAL",
                description:
                    "Trabajamos la estructura y presencia de tu negocio para facilitar que tus clientes te encuentren.",
                alt: "Resultados de búsqueda y ubicación de un negocio.",
            },
            {
                id: "movil",
                title: "En el celular mi web es difícil de usar.",
                category: "EXPERIENCIA MÓVIL",
                description:
                    "Diseñamos una experiencia clara para consultar, contactar o comprar desde cualquier pantalla.",
                alt: "Sitio web adaptado a computadora y teléfono.",
            },
            {
                id: "idiomas",
                title: "Mis clientes hablan otros idiomas. Mi web no.",
                category: "WEB MULTILINGÜE",
                description:
                    "Presenta tu negocio en español e inglés, con una experiencia clara para cada público.",
                alt: "Computadora y teléfono mostrando una web en español e inglés.",
            },
            {
                id: "renovacion",
                title: "Mi negocio evolucionó. Mi web sigue igual.",
                category: "EVOLUCIÓN DIGITAL",
                description:
                    "Actualizamos la imagen y las funciones de tu web para acompañar la nueva etapa de tu negocio.",
                alt: "Transformación de un sitio web antiguo a uno moderno.",
            },
        ],
    },

    en: {
        eyebrow: "YOUR BUSINESS SETS THE PACE",
        title: "Is your business growing,",
        titleMiddle: "but your website",
        titleHighlight: "holding you back?",
        description: "Your website should adapt to the way you work.",
        closing: "Your website can do more for your business.",
        situations: [
            {
                id: "funciones",
                title: "I need something my website can't do.",
                category: "CUSTOM DEVELOPMENT",
                description:
                    "We build the features your business needs, tailored to the way you work.",
                alt: "Business management system with customizable modules.",
            },
            {
                id: "automatizacion",
                title: "I spend too much time doing everything manually.",
                category: "AUTOMATION",
                description:
                    "We connect forms, requests and tasks to reduce repetitive work.",
                alt: "Automated workflow for requests and tasks.",
            },
            {
                id: "integraciones",
                title: "My tools work separately.",
                category: "INTEGRATIONS",
                description:
                    "We connect your website with the platforms you already use to make better use of your tools.",
                alt: "Website connected to payments, bookings and customers.",
            },
            {
                id: "google",
                title: "My business doesn't show up on Google.",
                category: "DIGITAL PRESENCE",
                description:
                    "We work on your website's structure and business presence to help customers find you.",
                alt: "Business search results and map location.",
            },
            {
                id: "movil",
                title: "My website is difficult to use on a phone.",
                category: "MOBILE EXPERIENCE",
                description:
                    "We design a clear experience for browsing, contacting or shopping on any screen.",
                alt: "Website adapted to desktop and mobile screens.",
            },
            {
                id: "idiomas",
                title: "My customers speak other languages. My website doesn't.",
                category: "MULTILINGUAL WEBSITE",
                description:
                    "Present your business in Spanish and English, with a clear experience for each audience.",
                alt: "Desktop and phone displaying a website in Spanish and English.",
            },
            {
                id: "renovacion",
                title: "My business evolved. My website didn't.",
                category: "DIGITAL EVOLUTION",
                description:
                    "We update your website's appearance and features to support your business's next chapter.",
                alt: "An older website transformed into a modern design.",
            },
        ],
    },
};

export default function SituationsFrame({ lang = "es" }) {
    const [activeId, setActiveId] = useState(null);
    const sectionId = useId();
    const text = content[lang] ?? content.es;

    function isDesktopMouse(event) {
        return (
            event.pointerType === "mouse" &&
            window.matchMedia("(min-width: 992px)").matches
        );
    }

    function closeSituation(id) {
        setActiveId((current) => (current === id ? null : current));
    }

    return (
        <section
            className="fp-situations"
            aria-labelledby={`${sectionId}-title`}
        >
            <header className="fp-situations__header">
                <p className="fp-situations__eyebrow">
                    {text.eyebrow}
                </p>

                <h2
                    id={`${sectionId}-title`}
                    className="fp-situations__title"
                >
                    <span>{text.title}</span>
                    <span>{text.titleMiddle}</span>

                    <span className="fp-situations__highlight">
                        {text.titleHighlight}
                    </span>
                </h2>

                <p className="fp-situations__description">
                    {text.description}
                </p>
            </header>

            <div
                className="fp-situations__list"
                onKeyDown={(event) => {
                    if (event.key === "Escape") {
                        setActiveId(null);
                    }
                }}
            >
                {text.situations.map((situation) => {
                    const isOpen = activeId === situation.id;
                    const triggerId = `${sectionId}-${situation.id}-trigger`;
                    const panelId = `${sectionId}-${situation.id}-panel`;

                    return (
                        <article
                            key={situation.id}
                            className={`fp-situations__item${
                                isOpen ? " is-open" : ""
                            }`}
                            onPointerEnter={(event) => {
                                if (isDesktopMouse(event)) {
                                    setActiveId(situation.id);
                                }
                            }}
                            onPointerLeave={(event) => {
                                if (
                                    isDesktopMouse(event) &&
                                    !event.currentTarget.contains(
                                        document.activeElement
                                    )
                                ) {
                                    closeSituation(situation.id);
                                }
                            }}
                            onBlur={(event) => {
                                if (
                                    !event.currentTarget.contains(
                                        event.relatedTarget
                                    )
                                ) {
                                    closeSituation(situation.id);
                                }
                            }}
                        >
                            <h3 className="fp-situations__heading">
                                <button
                                    id={triggerId}
                                    type="button"
                                    className="fp-situations__trigger"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => {
                                        setActiveId((current) =>
                                            current === situation.id
                                                ? null
                                                : situation.id
                                        );
                                    }}
                                >
                                    <span
                                        className="fp-situations__toggle"
                                        aria-hidden="true"
                                    >
                                        <i className="fa-solid fa-chevron-down" />
                                    </span>

                                    <span>{situation.title}</span>
                                </button>
                            </h3>

                            <div
                                id={panelId}
                                className="fp-situations__panel"
                                role="region"
                                aria-labelledby={triggerId}
                                hidden={!isOpen}
                            >
                                <div className="fp-situations__copy">
                                    <p className="fp-situations__category">
                                        {situation.category}
                                    </p>

                                    <p className="fp-situations__solution">
                                        {situation.description}
                                    </p>
                                </div>

                                <div className="fp-situations__visual">
                                    <img
                                        src={`/img/situaciones/situacion-${situation.id}.jpg`}
                                        alt={situation.alt}
                                        className="fp-situations__image"
                                        loading="eager"
                                        decoding="async"
                                        width="1024"
                                        height="1024"
                                    />
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <p className="fp-situations__closing">
                {text.closing}
            </p>
        </section>
    );
}
