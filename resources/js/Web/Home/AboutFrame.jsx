import React, { useId } from "react";

const content = {
    es: {
        eyebrow: "DETRÁS DE CADA PROYECTO",
        title: "Soy Felipe.",
        highlight: "Construyo webs con propósito.",
        introduction:
            "Me gusta entender cómo funciona tu negocio y convertir tus ideas en herramientas que realmente te ayuden.",
        description:
            "Diseño y desarrollo sitios web, sistemas e integraciones a medida. Busco que cada proyecto tenga identidad propia, sea fácil de usar y pueda evolucionar contigo.",
        approach:
            "Trabajo directamente contigo: escucho lo que necesitas, propongo soluciones y cuido tanto lo que se ve como lo que hace funcionar tu web.",
        signature: "Diseño con carácter. Código con propósito.",
        photoLabel: "FELIPE",
        photoDescription: "Diseño y desarrollo web",
        photoAlt: "Retrato de Felipe en blanco y negro",
        contact: "Cuéntame tu idea",
    },
    en: {
        eyebrow: "BEHIND EVERY PROJECT",
        title: "I'm Felipe.",
        highlight: "I build websites with purpose.",
        introduction:
            "I like understanding how your business works and turning your ideas into tools that truly help you.",
        description:
            "I design and develop custom websites, systems, and integrations. My goal is to give every project its own identity, make it easy to use, and help it grow with you.",
        approach:
            "I work directly with you: listening to your needs, suggesting solutions, and caring for both how your website looks and how it works.",
        signature: "Design with character. Code with purpose.",
        photoLabel: "FELIPE",
        photoDescription: "Web design and development",
        photoAlt: "Black and white portrait of Felipe",
        contact: "Tell me about your idea",
    },
};

export default function AboutFrame({ lang = "es" }) {
    const titleId = useId();
    const text = content[lang] ?? content.es;

    return (
        <section className="fp-about" aria-labelledby={titleId}>
            <div className="fp-about__container">
                <header className="fp-about__header">
                    <p className="fp-about__eyebrow">
                        {text.eyebrow}
                    </p>

                    <h2 className="fp-about__title" id={titleId}>
                        {text.title}

                        <span>{text.highlight}</span>
                    </h2>
                </header>

                <figure className="fp-about__portrait">
                    <img
                        className="fp-about__image"
                        src="/img/felipe-sobre-mi.jpg"
                        alt={text.photoAlt}
                        width="1086"
                        height="1448"
                        loading="lazy"
                        decoding="async"
                    />

                    <figcaption className="fp-about__caption">
                        <span className="fp-about__name">
                            {text.photoLabel}
                        </span>

                        <span className="fp-about__role">
                            {text.photoDescription}
                        </span>
                    </figcaption>
                </figure>

                <div className="fp-about__content">
                    <p className="fp-about__introduction">
                        {text.introduction}
                    </p>

                    <div className="fp-about__description">
                        <p>{text.description}</p>
                        <p>{text.approach}</p>
                    </div>

                    <p className="fp-about__signature">
                        {text.signature}
                    </p>

                    <a className="fp-about__contact" href="#contacto">
                        <span>{text.contact}</span>

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
