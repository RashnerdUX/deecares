const MailingListSection = () => {

    return (
        <>
            <section className="py-24 bg-neutral-background">
                <div className="mx-auto max-w-300 px-4 text-center">
                    <div className="p-12 bg-surface rounded-xl shadow-lg border border-outline-variant/20">
                        <h2 className="font-bold text-[48px] text-primary mb-4">Stay Informed</h2>
                        <p className="font-normal text-base text-foreground/70 mb-8">Join our mailing list to receive quarterly impact reports and news about our initiatives</p>
                        <form className="flex flex-col lg:flex-row gap-4">
                            <input className="grow px-6 py-4 rounded-lg bg-neutral-background border-none focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Your email address" type="email"/>
                            <button className="pill-button bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm" type="submit">Subscribe Now</button>
                        </form>
                        <p className="mt-4 font-label-sm text-on-surface-variant/60">We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MailingListSection;