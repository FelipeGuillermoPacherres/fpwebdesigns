import React, { useEffect, useRef, useState } from 'react';
import logo from "../../../../public/img/fp-web-designs-logo-white.svg"
import SelectLang from "../../Components/SelectLang.jsx";

export default function Header({ url = '', lang = 'es' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const drawerRef = useRef(null);
    const closeButtonRef = useRef(null);

    const translations = {
        es: {
            about: 'Sobre mí',
            services: 'Servicios',
            projects: 'Proyectos',
            contact: 'Hablemos',
            navigation: 'Navegación principal',
            open: 'Abrir menú',
            close: 'Cerrar menú',
            explore: 'EXPLORA FP',
            home: 'Volver al inicio',
        },
        en: {
            about: 'About me',
            services: 'Services',
            projects: 'Projects',
            contact: "Let's talk",
            navigation: 'Main navigation',
            open: 'Open menu',
            close: 'Close menu',
            explore: 'EXPLORE FP',
            home: 'Back to top',
        },
    };

    const text = translations[lang] ?? translations.en;

    const links = [
        { href: '#sobre-mi', label: text.about },
        { href: '#servicios', label: text.services },
        { href: '#proyectos', label: text.projects },
    ];

    function closeMenu() {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
    }

    useEffect(() => {
        if (!menuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeMenu();
                return;
            }

            if (event.key !== 'Tab') return;

            const elements = drawerRef.current?.querySelectorAll(
                'a[href], button:not([disabled])',
            );

            if (!elements?.length) return;

            const first = elements[0];
            const last = elements[elements.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [menuOpen]);

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 992px)');

        function handleResize(event) {
            if (event.matches) setMenuOpen(false);
        }

        desktop.addEventListener('change', handleResize);

        return () => {
            desktop.removeEventListener('change', handleResize);
        };
    }, []);

    return (
        <>
            <header className="fp-header">
                <nav
                    className="fp-header__nav"
                    aria-label={text.navigation}
                >
                    <a
                        href="#"
                        className="fp-header__brand"
                        aria-label={text.home}
                    >
                        <img
                            src={logo}
                            alt="FP Web Designs"
                            width="132"
                            height="51"
                        />
                    </a>

                    <div className="fp-header__links">
                        {links.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contacto"
                        className="fp-header__contact fp-header__desktop-contact"
                    >
                        {text.contact}
                        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="fp-header__toggle"
                        aria-label={text.open}
                        aria-expanded={menuOpen}
                        aria-controls="fp-mobile-menu"
                        onClick={() => setMenuOpen(true)}
                    >
                        <i
                            className="fa-solid fa-bars"
                            aria-hidden="true"
                        />
                    </button>
                </nav>
            </header>

            {menuOpen && (
                <div className="fp-mobile-navigation">
                    <div
                        className="fp-mobile-navigation__backdrop"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />

                    <div
                        ref={drawerRef}
                        id="fp-mobile-menu"
                        className="fp-mobile-navigation__drawer"
                        role="dialog"
                        aria-modal="true"
                        aria-label={text.navigation}
                    >
                        <div className="fp-mobile-navigation__heading">
                            <img
                                className="fp-header__drawer-logo"
                                src={logo}
                                alt="FP Web Designs"
                            />

                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="fp-mobile-navigation__close"
                                aria-label={text.close}
                                onClick={closeMenu}
                            >
                                <i
                                    className="fa-solid fa-xmark"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                        <nav
                            className="fp-mobile-navigation__links"
                            aria-label={text.navigation}
                        >
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            ))}

                            <a
                                href="#contacto"
                                className="fp-header__contact"
                                onClick={closeMenu}
                            >
                                {text.contact}
                                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                            </a>
                        </nav>
                    </div>
                </div>
            )}
            <SelectLang lang={lang} />
        </>
    );
}
