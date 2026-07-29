const FeaturedSection = () => {

    return (
        <>
            <section className="py-24">
                <div className="max-w-300 mx-auto px-4">
                    <div className="bg-primary rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        {/* The image on the left for the Featured Campaign */}
                        <div className="md:w-1/2 min-h-100">
                            <div className="w-full h-full bg-cover bg-center">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuArq30m-PUZEmCBZC8ZU7bLotXWcMmQyz8CVY2b19f3Mw8NA9CfpbYEhcv1ebgWVKilclNighsrOfy5NkYcICqvFm1Ef2GX_BxzRF7_0RESvF109gvwzCHtMOPvq7sG2adCfP05RiD0BgfVRYIBFdJwT_BTjev8yNujkFZnYNJXnYSv3_KCwh8jXQH-7Z0yyEv9i3zvAwk4OpeIDTZ9m97QGetGlvMXflCYcxDMnrMgHnX_dwXKWHKjFEuadDuYRihNEs5CWFQjOA" alt="A heartwarming close-up of a young volunteer laughing with an elderly grandfather figure in a vibrant Nigerian setting. They are sharing a photo album. The image exudes warmth, connection, and generational bridging. Soft lighting, high professional resolution, with colors that pop against the primary blue of the campaign card." />
                            </div>
                        </div>
                        {/* Information about the featured content */}
                        <div className="md:w-1/2 p-12 lg:p-20 text-primary-foreground flex flex-col justify-center space-y-8">
                            <span className="inline-block px-4 py-1 bg-secondary-container text-secondary font-label-md rounded-full w-fit uppercase tracking-wider">Featured Campaign</span>
                            <h2 className="font-bold text-2xl"> Christmas Special </h2>
                            <p className="font-normal text-lg opacity-90">Your little donation goes a long way to putting a smile on the Elderly and ensuring their continued ease of living on this blue planet</p>
                            <div className="flex flex-wrap gap-4">
                                <button className="pill-button bg-surface text-primary px-10 py-4 font-normal text-sm">Sponsor Now</button>
                                <button className="pill-button border border-primary-foreground/30 text-primary-foreground px-10 py-4 font-normal text-sm hover:bg-primary-foreground/10">Share Campaign</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturedSection;