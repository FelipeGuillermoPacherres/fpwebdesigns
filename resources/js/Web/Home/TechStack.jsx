import React from "react";

const technologies = [
    "PHP",
    "JavaScript",
    "CSS",
    "GitHub",
    "AWS",
    "Google Marketing Tools"
];

export default function TechStack({ lang = "es" }) {
    return (
        <section
            className="fp-stack"
            aria-label={
                lang === "es"
                    ? "Tecnologías y herramientas que utilizamos"
                    : "Technologies and tools we use"
            }
        >
            <ul className="fp-stack__list">
                {technologies.map((technology) => (
                    <li
                        className="fp-stack__item"
                        key={technology}
                    >
                        {technology}
                    </li>
                ))}
            </ul>
        </section>
    );
}
