function MockupVisualization() {
    try {
        return (
            <div className="relative w-full max-w-lg mx-auto lg:max-w-xl" data-name="mockup-visualization" data-file="components/MockupVisualization.js">
                {/* Background decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--ui-blue)] opacity-20 blur-[100px] rounded-full"></div>

                {/* Main Interface Card - Doctor's Dashboard */}
                <div className="relative z-10 glass-panel rounded-2xl p-5 mb-8 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                    {/* Fake Browser Header */}
                    <div className="flex items-center gap-2 mb-4 opacity-50">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <div className="ml-4 h-2 w-32 bg-white/20 rounded-full"></div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="flex gap-4">
                        {/* Sidebar */}
                        <div className="w-12 flex flex-col items-center gap-4 py-2 border-r border-white/10">
                            <div className="icon-layout-dashboard text-white/80 text-xl"></div>
                            <div className="icon-users text-white/40 text-xl"></div>
                            <div className="icon-file-text text-[var(--accent)] text-xl"></div>
                            <div className="icon-settings text-white/40 text-xl"></div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-white font-semibold text-lg">New Prescription</h3>
                                    <p className="text-[var(--ui-lavender)] text-xs">Patient: Sarah Jensen (ID: #8392)</p>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-bold flex items-center gap-1">
                                    <div className="icon-shield-check text-xs"></div> Verified
                                </div>
                            </div>

                            {/* Drug Entry Form Mockup */}
                            <div className="space-y-3">
                                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                    <div className="flex justify-between mb-1">
                                        <div className="h-2 w-24 bg-white/40 rounded"></div>
                                        <div className="icon-x text-white/40 text-xs"></div>
                                    </div>
                                    <div className="h-4 w-48 bg-white/10 rounded mb-2"></div>
                                    <div className="flex gap-2">
                                        <div className="h-6 w-16 bg-[var(--ui-blue)]/30 rounded border border-[var(--ui-blue)]/50"></div>
                                        <div className="h-6 w-16 bg-white/5 rounded border border-white/10"></div>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-3 rounded-lg border border-white/10 opacity-60">
                                    <div className="h-2 w-20 bg-white/40 rounded mb-2"></div>
                                    <div className="h-4 w-40 bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Card: Drug Interaction Warning */}
                <div className="absolute -right-4 top-10 z-20 bg-[#2C2C2E] border border-red-500/30 p-4 rounded-xl shadow-2xl w-56 animate-bounce" style={{animationDuration: '3s'}}>
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                            <div className="icon-triangle-alert text-red-500"></div>
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-bold">Interaction Alert</h4>
                            <p className="text-gray-400 text-xs mt-1">Aspirin interacts with Warfarin.</p>
                        </div>
                    </div>
                </div>

                {/* Floating Card: QR Code */}
                <div className="absolute -left-8 bottom-12 z-20 glass-panel p-4 rounded-xl shadow-2xl flex items-center gap-4">
                    <div className="bg-white p-2 rounded-lg">
                        <div className="icon-qr-code text-3xl text-slate-900"></div>
                    </div>
                    <div>
                        <div className="text-white text-sm font-bold">Scan to Fill</div>
                        <div className="text-[var(--ui-lavender)] text-xs">Secure & Instant</div>
                    </div>
                </div>

                {/* Floating Card: Patient History */}
                <div className="absolute -right-2 bottom-0 z-10 glass-panel p-3 rounded-xl shadow-xl w-48 opacity-90">
                     <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                        <div className="icon-history text-[var(--ui-lavender)] text-sm"></div>
                        <span className="text-white text-xs font-medium">History Tracked</span>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-white/70">Amoxicillin</span>
                            <span className="text-white/40">2mo ago</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-white/70">Ibuprofen</span>
                            <span className="text-white/40">6mo ago</span>
                        </div>
                     </div>
                </div>

            </div>
        );
    } catch (error) {
        console.error('MockupVisualization component error:', error);
        return null;
    }
}