"use client";

import Image from "next/image";

const HeroImage = () => {

    return (
        <>
            <div className="hero-image">
                <Image src="/hero.jpg" alt="N3 Bike" layout="responsive" width={0} height={0} />
            </div>
        </>
    );

};

export default HeroImage