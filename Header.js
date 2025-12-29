function Header() {
    try {
        const [isScrolled, setIsScrolled] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 20);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return (
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--primary)]/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`} data-name="header" data-file="components/Header.js">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[var(--ui-blue)] rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                            <div className="icon-activity text-2xl"></div>
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">Prescura</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
                        <a href="#features" className="hover:text-[var(--ui-lavender)] transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-[var(--ui-lavender)] transition-colors">How it works</a>
                        <a href="#security" className="hover:text-[var(--ui-lavender)] transition-colors">Security</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden md:block text-white hover:text-[var(--ui-lavender)] font-medium">Log In</button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full font-medium backdrop-blur-sm transition-colors border border-white/20">
                            Doctor Portal
                        </button>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Header component error:', error);
        return null;
    }
}