function Support (){
    return(
        <div className="py-12 px-4">
            <div className="bg-gray-800 w-11/12 sm:w-10/12 lg:w-8/12 xl:max-w-4xl mx-auto rounded-2xl px-6 sm:px-8 py-8 sm:py-10 shadow-lg">
                <p className="font-rubik text-center text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">Backed by</p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
                    <img 
                        width={120} 
                        className="w-[120px] sm:w-[140px] lg:w-[160px] max-w-full h-auto hover:scale-105 transition-transform duration-300" 
                        src="/lisk.png" 
                        alt="Lisk" 
                    />
                    <img 
                        width={120} 
                        className="w-[120px] sm:w-[140px] lg:w-[160px] max-w-full h-auto hover:scale-105 transition-transform duration-300" 
                        src="/PL_logo.png" 
                        alt="Protocol Labs" 
                    />
                    <img 
                        width={70} 
                        className="w-[70px] sm:w-[80px] lg:w-[90px] max-w-full h-auto hover:scale-105 transition-transform duration-300" 
                        src="/aleph.png" 
                        alt="Aleph" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Support