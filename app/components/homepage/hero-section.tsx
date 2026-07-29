import { MdOutlineFavorite, MdOutlineStar } from "react-icons/md";

const HeroSection = () => {

    return (
        <>
            <section className="relative min-h-217.5 flex items-center overflow-hidden bg-surface">
                <div className="max-w-300 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 py-section">
                    {/* First grid for Hero text */}
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-1.5 bg-secondary-container text-secondary-container-foreground font-label-md rounded-full">EST. 2026 • NIGERIA</span>
                        <h1 className="font-bold text-[64px] leading-tight text-primary">Empowering Aging with <span className="text-secondary-container">Dignity and Joy</span></h1>
                        <p className="font-normal text-lg text-foreground/70 max-w-lg">At DeeCares Foundation, we bridge the gap in elderly care through community health programs, social advocacy, and holistic support for the golden generation.</p>
                        {/* Hero section buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="pill-button bg-primary text-primary-foreground px-8 py-4 font-normal text-base flex items-center gap-2"> 
                                Donate Now <MdOutlineFavorite size={20} />
                            </button>
                            <button className="pill-button border-2 border-primary text-primary px-8 py-4 font-normal text-base hover:bg-primary/5 transition-colors">
                                Become A Volunteer
                            </button>
                        </div>
                    </div>

                    {/* Second grid for hero image */}
                    <div className="relative">
                        {/* Hero image */}
                        <div className="aspect-4/5 rounded-xl overflow-hidden shadow-2xl relative z-10">
                            <img className="w-full h-full object-cover" data-alt="A warm, emotionally resonant portrait of an elderly Nigerian woman laughing heartily while a young caregiver gently holds her hand. The lighting is soft and golden, suggesting a sunset or warm indoor glow. The background is a blurred, comfortable living room environment. The image uses a professional high-contrast style with rich blue and warm orange tones to align with the brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj8MMaBGUN0vxCtyETSH9ob28N2Z1eiSNDBiPZ2TBzRUuXt-K_a46gFK47LQ0u0BNtjpOSXOctX2LP_dpgJGWgmUi-uxEOxSI3n3WvwRx9y39-fvkwvg3HZZJRT0shDWOe10_L_202v3nGl_yFeyc-vFLBD93fv6aSTH3vUlxaiHj1y19-9eBKmBl-GPJptw-aMpUTThVZ4eXlIq_HwFi28_qF0F7SZ07wO4_img4JH1sBmNIS_9htqXBO02OH8fzAZHIg-TJi5A"/>
                        </div>
                        {/* Pulse Animation*/}
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-container rounded-lg -z-10 animate-pulse"></div>
                        {/* Impact overlay image */}
                        <div className="absolute -top-10 right-0 p-6 bg-surface shadow-xl rounded-lg z-20 max-w-50">
                            <div className="flex gap-2 items-center mb-2">
                                <MdOutlineStar size={20}/>
                                <span className="font-normal text-primary">Direct Impact</span>
                            </div>
                            <p className="font-normal text-sm text-foreground/70">Helping seniors live more fulfilled, active lives every single day.</p>
                        </div>
                    </div>
                </div>
                {/* Background for the section */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10 -skew-x-12 translate-x-1/2"></div>
            </section>
        </>
    );
}

export default HeroSection;