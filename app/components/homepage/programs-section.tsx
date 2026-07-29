import { MdOutlineArrowForward, MdOutlineCampaign, MdOutlineDirectionsRun, MdOutlineMedicalServices, MdOutlineMedication } from "react-icons/md";

const ProgramsSection = () => {

    return (
        <>
            <section className="py-24 bg-surface">
                <div className="mx-auto max-w-300 items-center px-4">
                    {/* The title */}
                    <div className="space-y-4 text-center mb-16">
                        <h1 className="text-5xl font-bold text-primary">
                            Our Programs
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-foreground/70 font-normal">
                            Comprehensive support systems designed to address the unique challenges of aging in the 21st century
                        </p>
                    </div>

                    {/* The Programs available */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <ProgramCard icon={<MdOutlineMedicalServices className="text-primary group-hover:text-primary-foreground text-3xl"/>} title="Preventive Health" body="Regular health screenings and medication management for chronic conditions"/>
                        <ProgramCard icon={<MdOutlineDirectionsRun className="text-primary group-hover:text-primary-foreground text-3xl"/>} title="Activities" body="Engaging the elderly in light activities to keep mind, body & soul active"/>
                        <ProgramCard icon={<MdOutlineMedication className="text-primary group-hover:text-primary-foreground text-3xl"/>} title="Free Drugs" body="Provision of essential supplements to support their detriorating health "/>
                        <ProgramCard icon={<MdOutlineCampaign className="text-primary group-hover:text-primary-foreground text-3xl" />} title="Advocacy" body="Educating the public on the intricacies associated with elderly care"/>  
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProgramsSection;

interface ProgramCardsProps {
    icon: React.ReactNode;
    title: string;
    body: string;
}

const ProgramCard = ({icon, title, body}:ProgramCardsProps) => {
    return (
        <div className="p-8 bg-neutral-background rounded-lg hover:shadow-xl transition-all duration-300 group border border-outline-variant/30">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                {icon}
            </div>
            <h3 className="font-semibold text-md text-primary mb-4 text-2xl">{title}</h3>
            <p className="font-body-md text-foreground/70 mb-6">{body}</p>
            <a className="text-primary font-normal flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore <MdOutlineArrowForward className="text-sm"/></a>
        </div>
    );
}