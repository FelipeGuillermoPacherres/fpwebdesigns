import React from "react";
import FrameIMG from "../../../../public/img/frame-pic.jpg";

export default function HeroFrame({ url, lang = "es" }) {

    console.log(lang);
    const frameText = {
        es: {
            eyebrow: "DISEÑO & DESARROLLO WEB A MEDIDA",
            description:
                "Tu negocio tiene su propia identidad. Tu web también debería tenerla.",
            projects: "Explorar proyectos",
            contact: "Cuéntame tu idea",
            detail1: "Diseño con carácter.",
            detail2: "Código con propósito.",
            caption: "LA PERSONA DETRÁS DEL CÓDIGO",
            imageAlt:
                "Felipe junto a un auto deportivo y pantallas de código iluminadas.",
        },
        en: {
            eyebrow: "CUSTOM WEB DESIGN & DEVELOPMENT",
            description:
                "Your business has its own identity. Your website should too.",
            projects: "Explore projects",
            contact: "Tell me your idea",
            detail1: "Design with character.",
            detail2: "Code with purpose.",
            caption: "THE PERSON BEHIND THE CODE",
            imageAlt:
                "Felipe beside a sports car and illuminated code displays.",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    return (
        <section className="fp-hero" aria-labelledby="fp-hero-title">
            <div className="fp-hero__content">
                <p className="fp-hero__eyebrow">
                    {text.eyebrow}
                </p>

                <h1 id="fp-hero-title" className="fp-hero__title">
                    <span>Your vision.</span>
                    <span>Built without</span>
                    <span className="fp-hero__highlight">limits.</span>
                </h1>

                <p className="fp-hero__description">
                    {text.description}
                </p>

                <div className="fp-hero__actions">
                    <a
                        href="#proyectos"
                        className="fp-hero__button"
                    >
                        {text.projects}
                        <i
                            className="fa-solid fa-arrow-up-right-from-square"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="#contacto"
                        className="fp-hero__contact"
                    >
                        {text.contact}
                        <i
                            className="fa-solid fa-arrow-right"
                            aria-hidden="true"
                        />
                    </a>
                </div>

                <div className="fp-hero__details">
                    <span>{text.detail1}</span>
                    <span>{text.detail2}</span>
                </div>
            </div>

            <div className="fp-hero__visual">
                <img
                    src={FrameIMG}
                    alt={text.imageAlt}
                    className="fp-hero__image"
                    fetchPriority="high"
                />

                <span className="fp-hero__caption">
                    {text.caption}
                </span>
            </div>
        </section>
    );
}
