import React from "react";
import Divider from "../../Components/Divider.jsx";
import HeroFrame from "./HeroFrame.jsx";
import TechStack from "./TechStack.jsx";
import AboutFrame from "./AboutFrame.jsx";
import SituationsFrame from "./SituationsFrame.jsx";
import ProjectsFrame from "./ProjectsFrame.jsx";
import ServicesFrame from "./ServicesFrame.jsx";


export default function index({url, lang = 'es'}) {
    return(
        <>
            <HeroFrame url={url} lang={lang} />

            <TechStack lang={lang} />

            <div id="sobre-mi" className="anchor">
                <AboutFrame lang={lang} />
            </div>

            <Divider />

            <SituationsFrame lang={lang} />

            <div id="proyectos" className="anchor">
                <Divider />

                <ProjectsFrame lang={lang} />
            </div>

            <div id="servicios" className="anchor">
                <Divider />
                <ServicesFrame lang={lang} />
            </div>
        </>
    )
}
