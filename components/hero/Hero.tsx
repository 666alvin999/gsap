import "./style.css";

import HeroImage from "@/components/hero/component/HeroImage";

interface HeroProps {
    timeline: any
}

const Hero = ({timeline}: HeroProps) => {

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
                        <button className="hero-button button button--white">Explore</button>
                    </div>
                </section>
            </div>
        </>
    );

};

export default Hero;