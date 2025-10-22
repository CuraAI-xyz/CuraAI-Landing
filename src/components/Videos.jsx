function Videos(){
    return(
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                   <div className="w-full max-w-lg">
                     <iframe 
                       width="100%" 
                       height="280" 
                       src="https://www.youtube.com/embed/xX7BaMqXl9E"
                       title="YouTube video player" 
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen
                       className="rounded-lg shadow-md">
                     </iframe>
                   </div>
                   <div className="w-full max-w-lg">
                     <iframe 
                       width="100%" 
                       height="280" 
                       src="https://www.youtube.com/embed/o85LSEdqNjs"
                       title="YouTube video player" 
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen
                       className="rounded-lg shadow-md">
                     </iframe>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Videos