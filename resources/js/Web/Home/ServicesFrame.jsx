import React, { useId } from "react";

const content = {
    es: {
        eyebrow: "LO QUE PODEMOS CONSTRUIR",
        title: "Soluciones para lo que",
        highlight: "tu negocio necesita.",
        description:
            "Desde tu presencia en internet hasta las herramientas que hacen más fácil tu día a día.",
        closing: "¿Tienes una idea o necesitas mejorar lo que ya tienes?",
        contact: "Hablemos de tu proyecto",
        services: [
            {
                id: "web",
                icon: "fa-solid fa-laptop-code",
                title: "Diseño y desarrollo web",
                description:
                    "Una web con identidad propia, pensada para tus clientes y para la forma en que trabaja tu negocio.",
                features: [
                    "Diseño a medida y adaptable a móvil",
                    "Contenido multilingüe",
                    "Sitios nuevos y renovación de webs",
                ],
            },
            {
                id: "systems",
                icon: "fa-solid fa-gears",
                title: "Sistemas y automatización",
                description:
                    "Herramientas que organizan tu información y reducen el tiempo dedicado a tareas repetitivas.",
                features: [
                    "Gestión de clientes y solicitudes",
                    "Formularios y procesos internos",
                    "Funciones para tu operación",
                ],
            },
            {
                id: "integrations",
                icon: "fa-solid fa-plug",
                title: "Integraciones",
                description:
                    "Conectamos tu web con las plataformas que ya utilizas, para que tus herramientas trabajen juntas.",
                features: [
                    "Pagos y reservas online",
                    "Conexiones con Shopify y Square",
                    "Integraciones según tu proyecto",
                ],
            },
            {
                id: "digital",
                icon: "fa-solid fa-magnifying-glass-chart",
                title: "Presencia digital",
                description:
                    "Preparamos tu presencia online para que puedan encontrarte y puedas medir lo que ocurre.",
                features: [
                    "SEO técnico y presencia en Google",
                    "Analítica y medición de conversiones",
                    "Configuración y campañas de Google Ads",
                ],
            },
        ],
    },

    en: {
        eyebrow: "WHAT WE CAN BUILD",
        title: "Solutions for what",
        highlight: "your business needs.",
        description:
            "From your online presence to the tools that make your everyday work easier.",
        closing: "Have an idea or need to improve what you already have?",
        contact: "Let's talk about your project",
        services: [
            {
                id: "web",
                icon: "fa-solid fa-laptop-code",
                title: "Web design and development",
                description:
                    "A website with its own identity, designed around your customers and the way your business works.",
                features: [
                    "Custom, mobile-friendly design",
                    "Multilingual content",
                    "New websites and website redesigns",
                ],
            },
            {
                id: "systems",
                icon: "fa-solid fa-gears",
                title: "Systems and automation",
                description:
                    "Tools that organize your information and reduce the time spent on repetitive tasks.",
                features: [
                    "Customer and request management",
                    "Forms and internal processes",
                    "Features built for your operations",
                ],
            },
            {
                id: "integrations",
                icon: "fa-solid fa-plug",
                title: "Integrations",
                description:
                    "We connect your website with the platforms you already use so your tools can work together.",
                features: [
                    "Online payments and bookings",
                    "Connections with Shopify and Square",
                    "Integrations tailored to your project",
                ],
            },
            {
                id: "digital",
                icon: "fa-solid fa-magnifying-glass-chart",
                title: "Digital presence",
                description:
                    "We prepare your online presence to help people find you and let you measure what happens.",
                features: [
                    "Technical SEO and Google presence",
                    "Analytics and conversion tracking",
                    "Google Ads setup and campaigns",
                ],
            },
        ],
    },
};

export default function ServicesFrame({ lang = "es" }) {
    const titleId = useId();
    const text = content[lang] ?? content.es;

    return (
        <section
            className="fp-services"
            aria-labelledby={titleId}
        >
            <div className="fp-services__container">
                <header className="fp-services__header">
                    <p className="fp-services__eyebrow">
                        {text.eyebrow}
                    </p>

                    <h2
                        id={titleId}
                        className="fp-services__title"
                    >
                        <span>{text.title}</span>

                        <span className="fp-services__highlight">
                            {text.highlight}
                        </span>
                    </h2>

                    <p className="fp-services__intro">
                        {text.description}
                    </p>
                </header>

                <div className="fp-services__grid">
                    {text.services.map((service) => (
                        <article
                            key={service.id}
                            className="fp-services__item"
                        >
                            <div className="fp-services__top">
                                <i
                                    className={service.icon}
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className="fp-services__name">
                                {service.title}
                            </h3>

                            <p className="fp-services__description">
                                {service.description}
                            </p>

                            <ul className="fp-services__features">
                                {service.features.map((feature) => (
                                    <li key={feature}>
                                        <i
                                            className="fa-solid fa-plus"
                                            aria-hidden="true"
                                        />

                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="fp-services__footer">
                    <p className="fp-services__closing">
                        {text.closing}
                    </p>

                    <a
                        href="#contacto"
                        className="fp-services__contact"
                    >
                        {text.contact}

                        <i
                            className="fa-solid fa-arrow-up-right-from-square"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
