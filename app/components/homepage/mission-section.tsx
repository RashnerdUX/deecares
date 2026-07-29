import { MdOutlineCheckCircleOutline } from "react-icons/md";

const MissionSection = () => {

    return (
        <>
            <section className="py-24 bg-neutral-background">
                <div className="grid md:grid-cols-2 gap-20 mx-auto max-w-300 items-center px-4">
                    {/* The images */}
                    <div className="order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            {/* First image */}
                            <div className="rounded-lg overflow-hidden h-64 mt-8">
                                <img className="w-full h-full object-cover" data-alt="A candid photo of a community health outreach event in a Nigerian village. A healthcare worker in a blue uniform is measuring the blood pressure of an elderly man who is sitting under the shade of a large tree. The scene is bright and professional, emphasizing compassionate service and medical excellence. The color palette is natural with prominent blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSAUIFOmAVQIfr85KnNtc7YzIdcyGsOH-Dr28tbemB13czhi3hTAv1r8WaDSkeJHb7Yu_R_SPIzZT-hB41dKCDfLmJCmAdYcCGscDTeC8PzMDmu30TBzOpkR2eBAhEoDhJvha5Wtv_dA7PPLun2_UosoIfeRRUgA4J4zsvrfsPjuqB2Fu5gwi5GbmhL2hPSuXZh7hcgoXRx3Q1kawJcq1CDMx7g7EM5NCaqeegrZNrgtAQnyu4XppchTQ69sjK2hekvcMbxt3ysw"/>
                            </div>
                            {/* Second image */}
                            <div className="rounded-lg overflow-hidden h-64">
                                <img className="w-full h-full object-cover" data-alt="A group of elderly Nigerians participating in a gentle outdoor exercise class on a grassy field. They are smiling and stretching, led by a young instructor. The lighting is crisp morning light, highlighting themes of vitality and community health. Professional photography style with a clean, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCiZ-B2rzXMKsPwO_LtbhSwmjq0UFd03rBA9aJ6mQ4bRDm5ZHIZhimmLMcLQ3m40N7Zyk112lkdT4zeUQGI9IM3d9KhHnb2ngYnfzbYuIDeXe9XKLQuOQbPDChP8fs0LCEkJOuXd6BRRLb1C3l0WiS4LVfHbAEa-CAd-nVwGEdM3Pe-ymuRFP4ssiSFVIoBn47LGCKjbrRbr3YB8ZXvCJD8FK64XUAsjKJoRPJlWQ5BdD94gr108b4oXUQ3cIgO2bILOyEnXcFHA"/>
                            </div>
                        </div>
                    </div>
                    {/* The text */}
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-primary text-5xl font-bold">
                            Dedicated to Every Elder
                        </h2>
                        <p className="text-foreground/90 text-lg font-normal">
                            Founded on the principle that aging should be a celebration of life, DeeCares Foundation provides essential resources to seniors across Nigeria who often face social isolation and limited healthcare access
                        </p>
                        {/* A collection of key points */}
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <MdOutlineCheckCircleOutline size={16} className="text-success"/>
                                <p className="text-xs font-semibold text-foreground">Community-driven outreach models</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdOutlineCheckCircleOutline size={16} className="text-success"/>
                                <p className="text-xs font-semibold text-foreground">
Specialized geriatric healthcare advocacy</p>
                            </li>
                        </ul>
                        {/* A button to learn more */}
                        <button type="button" className="pill-button border-2 border-primary text-primary px-8 py-3 font-normal text-base hover:bg-primary/5 transition-colors">
                            Learn More About Our Mission
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MissionSection;