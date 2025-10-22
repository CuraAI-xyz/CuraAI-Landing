function Support (){
    return(
        <div className="bg-gray-400 flex w-8/12 mx-auto rounded-4xl mt-5 px-8 p-5 justify-between items-center font-bold shadow-sm">
            <h2 className="font-rubik text-center font-bold text-white text-5xl">Backed by:</h2>
            <div className="flex gap-4 justify-center items-center">
                <img width={300} src="/lisk.png" alt="" />
                <img width={300} src="/PL_logo.png" alt="" />
                <img width={100} src="/aleph.png" alt="" />
            </div>
        </div>
    )
}

export default Support