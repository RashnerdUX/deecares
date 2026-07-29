import { MdOutlineGridView } from "react-icons/md";

const topImages: GalleryImageProps[] = [
    {
        imageUrl: "https://vsrcjtowcixvisnzlzyv.supabase.co/storage/v1/object/public/outreach-images/30-05-2026/DSC_0104.jpg",
        altText: "The members of Deecares test out the Blood Sugar machine"
    },
        {
        imageUrl: "https://vsrcjtowcixvisnzlzyv.supabase.co/storage/v1/object/public/outreach-images/30-05-2026/DSC_0124.jpg",
        altText: "The team members from Deecares"
    },
    {
        imageUrl: "https://vsrcjtowcixvisnzlzyv.supabase.co/storage/v1/object/public/outreach-images/30-05-2026/DSC_0127.jpg",
        altText: "Four elderly people are pictured on a chair along with members of DeeCares foundation in the background"
    },
    {
        imageUrl: "https://vsrcjtowcixvisnzlzyv.supabase.co/storage/v1/object/public/outreach-images/30-05-2026/DSC_0134.jpg",
        altText: "A team member from DeeCares gives a riveting talk to the Elderly people in attendance"
    },
    {
        imageUrl: "https://vsrcjtowcixvisnzlzyv.supabase.co/storage/v1/object/public/outreach-images/30-05-2026/DSC_0183.jpg",
        altText: "An elderly man gets his blood pressure checked by a team member from DeeCares"
    },
]

const GallerySection = () => {

    return (
        <>
            <section className="py-24 bg-surface">
                <div className="mx-auto max-w-300 px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div className="max-w-xl">
                            <h1 className="font-bold text-[48px] text-primary"> See Us In Action </h1>
                            <p className="font-normal text-lg text-foreground/70">Moments from our recent community outreaches and events across the nation.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-primary font-sm hover:underline transition-all">View Full Gallery <MdOutlineGridView /></button>
                    </div>
                    {/* A grid of images */}
                    <div className="columns-1 md:columns-3 gap-6 space-y-6">
                        {topImages.map((image) => {
                            return <SmallGalleryImage
                                imageUrl={image.imageUrl}
                                altText={image.altText}
                            />
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default GallerySection;

interface GalleryImageProps{
    imageUrl: string,
    altText: string,
}

const SmallGalleryImage = ({imageUrl, altText}:GalleryImageProps) => {
    return (
        <div className="rounded-lg overflow-hidden break-inside-avoid shadow-lg">
            <img src={imageUrl} alt={altText} className="w-full h-auto"/>
        </div>
    );
}