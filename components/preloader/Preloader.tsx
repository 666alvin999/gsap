"use client";

import "./style.css";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const Preloader = ({ timeline }: { timeline: gsap.core.Timeline}) => {

    useGSAP((context, contextSafe) => {
        const initialTextState = gsap.set(".preloader-text > span", {
            yPercent: 100,
        });

        const slideTextReveal = contextSafe!(() => {
            const tl = gsap.timeline({defaults: {ease: "power2.out"}});

            tl
                .from(".preloader-text", {
                    ease: "linear",
                    autoAlpha: 0
                })
                .to(".preloader-text > span", {
                    yPercent: 0,
                    delay: 0.5
                })
                .to(".preloader-text > span", {
                    yPercent: -110,
                    delay: 1
                })
                .to(".preloader-background", {
                    yPercent: -100,
                    duration: 1.5,
                    ease: "power4.inOut",
                }, "<");

        });

        timeline && timeline
            .add(initialTextState)
            .add(slideTextReveal);
    }, [timeline]);

    return (
        <>
            <div className="preloader">
                <p className="preloader-text">
                    <span>Say hello to N3</span>
                </p>
                <div className="preloader-background"></div>
            </div>
        </>
    );

};

export default Preloader;