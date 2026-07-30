import { MdOutlinePlayCircleFilled } from "react-icons/md";


const topBlogPosts: BlogCardProps[] = [
    {
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuARY71etFJqkRdQ3-rtsL8mU6KKuB8fPlcM3MhTtMmVeahGQl37df0kz4sTjWd3ozWnm3XmYCiiu1bekmHsiTzBdV20coLATBdyoMnN0jX3T6YLLreXE1NY_xTHsos6JiCo9RgcX81P2uYBFWPtx0F2edMT6ouzUFt2B6NO9PHHjroup3FwVrn_Mc8AA2UKtEcr8tUv5pnMsmdnIvCntPdwMsK8I1VdJC__c5DaMblquCMn3JSdasoJmhfa98nOpT1CfB6tE3Lb6w",
        altText: "A high-quality image of a new community center opening ceremony, with a blue ribbon being cut. There are happy people in the background. Modern, corporate non-profit style.",
        title: "Opening Our Third Community Hub in Abuja",
        previewText: "Bringing our holistic care model to more seniors in the northern region this month",
        category: "Expansion",
        date: "Jul 29"
    },
    {
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsD9Y6HtDEyIUWQD0PBQRMTs0RsAXWOcdM4v4fJKSf8AfIgVkMdfcviGXpcnrmUuI63GT-4QMivzIBKTIOXZkrTuvwx49F0D26cA-K0JtMjC6JgsKb6Q7x7trPV2CoC8KtA5sT3DPlh7ry1WwAUqQ1leY1XvtHTwfNZozMN0Ir19dLU3jfMwxpOLf2lBUMR2J1LbNpPG5WUGsKgXlUEdr6Mb4vD1UDd8mN7z9_d5NHimuCrNfFlIJfU8oLKrphSd1p5ROXaCay0g",
        altText: "A medical seminar for seniors, with a doctor presenting to an engaged audience. The slides are about heart health. Professional and informative lighting.",
        title: "World Heart Day: Free Screenings Report",
        previewText: "We reached over 400 seniors during our city-wide cardiovascular screening event last week.",
        category: "Health",
        date: "Jul 14"
    },
    {
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXxaq1oE1MG88QowepFgVSwwvzobLUWhIs31agz6wc_tPtU09hal8zRPC6N7tyqdDuMBy6603S-5qaVMrlZ2kMtZPJViC_Z9OWx2rw6PU1HfBXp5ab9NrSBwXaFxgf92KOXVHD_Yd97qyAEyfj0Sb5wyH5cgdbAeqanyoJhQUu-EZMHFH-UaKagdv5AsBJi6eUa7VzSCtcbn5v9A83pI5LCGHMrBKtFIqMCorLlRikqG86x0Udl-YhWzN3MuWbDfnzVookOqK1sg",
        altText: "A cheerful social gathering of elderly women sharing a meal and tea. Warm, domestic, joyful atmosphere.",
        title: "Combatting Loneliness Through Tea Clubs",
        previewText: "Our social programs are proving that connection is just as vital as medication for elderly wellbeing.",
        category: "Health",
        date: "Jul 24"
    },
]

const BlogSection = () => {

    return (
        <>
            <section className="py-24 bg-surface" id="blog-section">
                <div className="mx-auto max-w-300 px-4">
                    <div className="flex justify-between items-center mb-12">
                        <h1 className="font-headline-lg text-headline-lg text-primary"></h1>
                        <a href="/blog" className="pill-button border-2 border-primary text-primary px-6 py-2 font-base"> View Blog</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {topBlogPosts.map((blogPost, index)=> {
                            return <BlogCard 
                                key={index}
                                imageUrl={blogPost.imageUrl}
                                altText={blogPost.altText}
                                title={blogPost.title}
                                previewText={blogPost.previewText}
                                category={blogPost.category}
                                date={blogPost.date}
                            />
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogSection;

interface BlogCardProps {
    imageUrl: string,
    altText: string,
    title: string,
    category: string,
    date: string,
    previewText: string,
}

const BlogCard = ({imageUrl, title, altText, category, date, previewText}: BlogCardProps) => {
    return (
        <article className="group cursor-pointer">
            <div className="rounded-lg overflow-hidden h-60 mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt={altText} src={imageUrl}/>
            </div>
            <div className="text-secondary-container font-sm uppercase tracking-widest flex gap-1 items-center">
                <span>{category}</span>
                <MdOutlinePlayCircleFilled size={8}/>
                <span>{date}</span>
            </div>
            <h3 className="font-semibold text-primary text-2xl mt-2 group-hover:text-secondary-container transition-colors">{title}</h3>
            <p className="font-normal text-foreground/70 mt-4 line-clamp-2 text-ellipsis">{previewText}</p>
        </article>
    );
}