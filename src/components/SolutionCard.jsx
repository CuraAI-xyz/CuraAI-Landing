function SolutionCard({title,image,description}) {
    return (
        <div className="bg-white font-rubik p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 min-w-0 flex flex-col h-full">
            <div className="flex flex-col items-center flex-grow">
                <img className="mx-auto mb-4" width={48} height={48} src={image} alt={`${title} icon`} />
                <h3 className="text-lg text-center font-semibold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed flex-grow">{description}</p>
            </div>
        </div>
    )
}
export default SolutionCard;

