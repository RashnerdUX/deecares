const ImpactSection = () => {

    return (
        <>
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="mx-auto max-w-300 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Number of people reached */}
                        <div className="impact-stat-container">
                            <h3 className="impact-stat-title">100+</h3>
                            <p className="impact-stat-value">Seniors Supported</p>
                        </div>
                        {/* Number of Communities reached */}
                        <div className="impact-stat-container">
                            <h3 className="impact-stat-title">2+</h3>
                            <p className="impact-stat-value">Communities Reached</p>
                        </div>
                        {/* Number of Partners */}
                        <div className="impact-stat-container">
                            <h3 className="impact-stat-title">5+</h3>
                            <p className="impact-stat-value">Active Partners</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ImpactSection;