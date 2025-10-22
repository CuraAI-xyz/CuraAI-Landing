function Awards() {
    return (
        <div className="py-16 lg:py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
                {/* Main Message - First */}
                <p className="font-rubik text-gray-700 text-lg lg:text-xl leading-relaxed mb-12 max-w-4xl mx-auto">
                    From hackathon idea to business solution — CuraAI is building the future of privacy-first healthcare AI with support from leading tech communities.
                </p>

                {/* Awards Display - Second */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-12">
                    {/* Aleph Achievement */}
                    <div className="flex flex-col items-center group">
                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-gray-100">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="/aleph.png" 
                                    alt="Aleph Hackathon" 
                                    className="w-10 h-10"
                                />
                                <div className="text-left">
                                    <h3 className="font-rubik text-gray-900 font-semibold text-sm">Aleph Hackathon 2025</h3>
                                    <p className="font-rubik text-gray-600 text-xs">Protocol Labs AI Track</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-yellow-500 text-sm">🏆</span>
                                        <p className="font-rubik text-[#61A5C2] font-semibold text-xs">3rd Place</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lisk Program */}
                    <div className="flex flex-col items-center group">
                        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-gray-100">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="/lisk.png" 
                                    alt="Lisk Founders Track" 
                                    className="w-10 h-10"
                                />
                                <div className="text-left">
                                    <h3 className="font-rubik text-gray-900 font-semibold text-sm">Lisk Founders Track</h3>
                                    <p className="font-rubik text-gray-600 text-xs">Crecimiento Buildathon</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-green-500 text-sm">✨</span>
                                        <p className="font-rubik text-[#61A5C2] font-semibold text-xs">Selected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
