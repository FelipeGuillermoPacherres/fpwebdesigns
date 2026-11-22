import React from "react";
import HeroFrame from "./HeroFrame.jsx";

export default function index({url, lang = 'es'}) {
    return(
        <>
            <HeroFrame url={url} lang={lang} />
        </>
    )
}
