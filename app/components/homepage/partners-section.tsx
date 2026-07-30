
const listOfPartners: string[] = [
    "The Eben Foundation",
    "NextCapital",
    "Dee Brand",
    "Insight"
]

const PartnersSection = () => {

    return (
        <>
            <section className="py-12 bg-surface-container/40 border-y border-outline-variant/10" id="partners-section">
                <div className="mx-auto max-w-300 px-4">
                    <h4 className="text-center font-normal text-foreground/70 mb-8 uppercase tracking-[0.2em]"> Our Trusted Partners</h4>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {listOfPartners.map((partnerName, index) => {
                            return <span key={index} className="text-3xl font-bold uppercase">{partnerName}</span>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PartnersSection;