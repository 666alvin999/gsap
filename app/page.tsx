"use client";

import Preloader from "@/components/preloader";
import Header from "@/components/header";
import Hero from "@/components/hero";
import {useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export default function Home() {

    const [timeline, setTimeline] = useState<any>();

    useGSAP(() => {
        const tl = gsap.timeline();
        setTimeline(tl);
    })

    return (
        <>
            <div className="hero-image-start"></div>
            <Preloader timeline={timeline} />
            <Header timeline={timeline} />
            <Hero timeline={timeline} />
        </>
    );
}
