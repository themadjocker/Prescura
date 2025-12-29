function Hero() {
    try {
        return (
            <section className="relative min-h-screen bg-[var(--primary)] overflow-hidden flex items-center pt-20" data-name="hero" data-file="components/Hero.js">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[var(--ui-blue)]/5 skew-x-12 transform origin-top-right"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        
                        {/* Left Side: Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                            
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mx-auto lg:mx-0">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                <span className="text-[var(--ui-lavender)] text-sm font-medium tracking-wide uppercase">Trusted by 500+ Clinics</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Digital Prescriptions. <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--ui-blue)] to-[var(--ui-lavender)]">Safer. Faster. Smarter.</span>
                            </h1>

                            {/* Subtext */}
                            <p className="text-lg text-[var(--ui-lavender)]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Prescura connects doctors, patients, and pharmacists — secure e-prescriptions with QR verification, history tracking, and intelligent interaction alerts.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <button className="btn-primary w-full sm:w-auto justify-center group">
                                    Get Started (Doctor)
                                    <div className="icon-arrow-right group-hover:translate-x-1 transition-transform"></div>
                                </button>
                                <button className="btn-outline w-full sm:w-auto justify-center">
                                    <div className="icon-user"></div>
                                    View Patient Portal
                                </button>
                            </div>

                            {/* Features Mini-List */}
                            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3">
                                <div className="flex items-center gap-2 text-white/60 text-sm">
                                    <div className="icon-shield-check text-[var(--ui-blue)]"></div>
                                    <span>HIPAA Compliant</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/60 text-sm">
                                    <div className="icon-smartphone text-[var(--ui-blue)]"></div>
                                    <span>Mobile Ready</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/60 text-sm">
                                    <div className="icon-cloud text-[var(--ui-blue)]"></div>
                                    <span>Cloud Sync</span>
                                </div>
                            </div>

                        </div>

                        {/* Right Side: Visualization */}
                        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                            <MockupVisualization />
                        </div>

                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return null;
    }
}