import { MdOutlineGridView } from "react-icons/md";

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