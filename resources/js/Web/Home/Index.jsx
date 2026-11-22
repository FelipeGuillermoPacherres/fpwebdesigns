import React from "react";
import HeroFrame from "./HeroFrame.jsx";
import TechStack from "./TechStack.jsx";

export default function index({url, lang = 'es'}) {
    return(
        <>
            <HeroFrame url={url} lang={lang} />

            <TechStack lang={lang} />
        </>
    )
}
