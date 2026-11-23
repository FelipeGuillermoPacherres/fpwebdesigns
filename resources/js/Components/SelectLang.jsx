import React, { useEffect, useRef, useState } from "react";

const languages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
];

export default function SelectLang({ lang = "es" }) {
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const containerRef = useRef(null);
    const triggerRef = useRef(null);

    const currentLang = lang === "en" ? "en" : "es";
    const isSpanish = currentLang === "es";

    useEffect(() => {
        function handleOutsideClick(event) {
            if (!containerRef.current?.contains(event.target)) {
                setOpen(false);
            }
        }

        function handleEscape(event) {
            if (event.key === "Escape" && open) {
                setOpen(false);
                triggerRef.current?.focus();
            }
        }

        document.addEventListener("pointerdown", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("pointerdown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [open]);

    async function changeLanguage(nextLang) {
        if (saving) return;

        if (nextLang === currentLang) {
            setOpen(false);
            triggerRef.current?.focus();
            return;
        }

        setSaving(true);
        setError("");

        try {
            const csrfToken = document.querySelector(
                'meta[name="csrf-token"]'
            )?.content;

            if (!csrfToken) {
                throw new Error("Missing CSRF token");
            }

            const response = await fetch("/language", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({ lang: nextLang }),
            });

            if (!response.ok) {
                throw new Error(`Language change failed: ${response.status}`);
            }

            const result = await response.json();

            if (!result.success) {
                throw new Error("Language change was not confirmed");
            }

            window.location.reload();
        } catch {
            console.error("Error al cambiar idioma:", error);

            setError(
                isSpanish
                    ? "No se pudo cambiar el idioma. Inténtalo de nuevo."
                    : "Unable to change the language. Please try again."
            );

            setSaving(false);
            setOpen(true);
        }
    }

    return (
        <div className="fp-lang" ref={containerRef}>
            {open && (
                <div className="fp-lang__panel" id="fp-lang-options">
                    <div
                        className="fp-lang__options"
                        role="group"
                        aria-label={isSpanish ? "Idiomas" : "Languages"}
                        aria-busy={saving}
                    >
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                type="button"
                                className="fp-lang__option"
                                lang={language.code}
                                aria-pressed={currentLang === language.code}
                                disabled={saving}
                                onClick={() => changeLanguage(language.code)}
                            >
                                <span>{language.label}</span>

                                {currentLang === language.code && (
                                    <i
                                        className="fa-solid fa-check"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {error && (
                        <p className="fp-lang__error" role="alert">
                            {error}
                        </p>
                    )}
                </div>
            )}

            <button
                ref={triggerRef}
                type="button"
                className="fp-lang__trigger"
                aria-label={
                    isSpanish ? "Seleccionar idioma" : "Select language"
                }
                aria-expanded={open}
                aria-controls={open ? "fp-lang-options" : undefined}
                onClick={() => {
                    setError("");
                    setOpen((previous) => !previous);
                }}
            >
                <i className="fa-solid fa-language" aria-hidden="true" />

                <span>{currentLang.toUpperCase()}</span>

                <i
                    className={`fa-solid ${
                        saving
                            ? "fa-spinner"
                            : open
                                ? "fa-chevron-down"
                                : "fa-chevron-up"
                    }`}
                    aria-hidden="true"
                />
            </button>
        </div>
    );
}
