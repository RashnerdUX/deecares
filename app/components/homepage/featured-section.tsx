const FeaturedSection = () => {

    return (
        <>
            <section className="py-24" id="featured-section">
                <div className="max-w-300 mx-auto px-4">
                    <div className="bg-primary rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        {/* The image on the left for the Featured Campaign */}
                        <div className="w-auto h-100 md:w-1/2 md:min-h-130">
                            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage:'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArq30m-PUZEmCBZC8ZU7bLotXWcMmQyz8CVY2b19f3Mw8NA9CfpbYEhcv1ebgWVKilclNighsrOfy5NkYcICqvFm1Ef2GX_BxzRF7_0RESvF109gvwzCHtMOPvq7sG2adCfP05RiD0BgfVRYIBFdJwT_BTjev8yNujkFZnYNJXnYSv3_KCwh8jXQH-7Z0yyEv9i3zvAwk4OpeIDTZ9m97QGetGlvMXflCYcxDMnrMgHnX_dwXKWHKjFEuadDuYRihNEs5CWFQjOA")'}}>
                            </div>
                        </div>
                        {/* Information about the featured content */}
                        <div className="md:w-1/2 p-12 lg:p-20 text-primary-foreground flex flex-col justify-center space-y-8">
                            <span className="inline-block px-4 py-2.5 bg-secondary-container text-secondary font-semibold text-xs md:py-1 md:text-lg rounded-full w-fit uppercase tracking-wider">Featured Campaign</span>
                            <h2 className="font-bold text-2xl md:text-4xl text-wrap"> Christmas Special </h2>
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