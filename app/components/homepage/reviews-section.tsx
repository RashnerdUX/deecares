import { MdOutlineFormatQuote } from "react-icons/md";

const reviews: ReviewCardProps[] = [
    {
        first_name: "Baba",
        last_name: "Ahmed",
        title: "Elderly",
        location: "Osogbo, Osun",
        reviewBody: "The medical check-ups provided by DeeCares saved my life. I didn't know I had high blood pressure until their mobile clinic visited my neighborhood."
    },
    {
        first_name: "Titilayo",
        last_name: "Adeboye",
        title: "Nurse",
        location: "Ibadan, Oyo",
        reviewBody: "Volunteering here has given me a new perspective on life. Seeing the smiles on these seniors' faces when we visit is the most rewarding part of my week."
    },
]

const ReviewsSection = () => {

    return (
        <>
            <section className="py-24 bg-neutral-background overflow-hidden">
                <div className="mx-auto max-w-300 px-4">
                    <div className="text-center mb-16">
                        <h1 className="font-bold text-[48px] text-primary"> Voices of Impact </h1>
                        <p className="font-normal text-lg text-foreground/70"> Here from the people we've been able to reach</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        {reviews.map((review, index) => {
                            return <ReviewCard 
                                first_name={review.first_name}
                                last_name={review.last_name}
                                title={review.title}
                                location={review.location}
                                reviewBody={review.reviewBody}
                            />
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ReviewsSection;

interface ReviewCardProps {
    first_name: string,
    last_name: string,
    title: string,
    location: string,
    reviewBody: string, 
}

const ReviewCard = ({first_name, last_name, title, location, reviewBody}:ReviewCardProps) => {
    return (
        <div className="bg-surface p-10 rounded-xl shadow-sm border border-outline-variant/20 flex-1 flex flex-col justify-between">
            <div className="space-y-6">
                <MdOutlineFormatQuote className="text-secondary-container text-4xl" />
                <p className="font-normal text-base italic text-foreground/70">"{reviewBody}"</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">{first_name.charAt(0)+last_name.charAt(0)}</div>
                <div>
                    <h4 className="font-sm text-foreground/80">{first_name} {last_name}</h4>
                    <div className="font-xs text-foreground/70 flex gap-1">
                        <p>{title}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}