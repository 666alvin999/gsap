"use client";

import Image from "next/image";

const HeroImage = () => {

    return <>
        <div className="hero-image">
            <Image
                src="/hero.jpg"
                alt="N3 Bike"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto"
                }} />
        </div>
    </>;

};

export default HeroImage