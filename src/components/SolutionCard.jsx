function SolutionCard({title,image,description}) {
    return (
        <div className="bg-white font-rubik p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img className="mx-auto mb-3" width={40} height={40} src={image} alt="" />
            <h3 className="text-xl text-center font-medium mb-2">{title}</h3>
            <p className="text-gray-700 text-center">Brief description of the solution offered by Cura.</p>
        </div>
    )
}
export default SolutionCard;

