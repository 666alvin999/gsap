import "./style.css";

import HeroImage from "@/components/hero/component/HeroImage";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const Hero = ({timeline}: { timeline: gsap.core.Timeline }) => {

    useGSAP((context, contextSafe) => {

        const initialState = contextSafe!(() => {
            gsap.set(".hero-caption > span, .hero-title > span > span", {
                yPercent: 100
            });

            gsap.set("hero-button", {
                borderRadius: 0
            });
        });

        const slideTextReveal = gsap.to(".hero-caption > span, .hero-title > span > span", {
            yPercent: 0,
            delay: 3.3
        });

        timeline && timeline
            .add(initialState)
            .add(slideTextReveal);
    }, [timeline])

    return (
        <>
            <div className="hero-wrapper">
                <section className="hero">
                    <HeroImage/>

                    <div className="hero-content">
                        <p className="hero-caption">
                            <span>More details. More fun.</span>
                        </p>
                        <h1 className="hero-title">
                            <span>
                                <span>A new way to </span>
                            </span>

                            <span>
                                <span>ride in style.</span>
                            </span>
                        </h1>
                        <button className="hero-button button button-white">Explore</button>
                    </div>
                </section>
            </div>
        </>
    );

};

export default Hero;