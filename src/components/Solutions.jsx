import SolutionCard from "./SolutionCard";
function Solutions() {
    const sols = [
        {
            title: "Voice-Based AI Agent",
            image: "./robot.png",
            description: "Natural voice conversations that gather patient history, symptoms, and context through intelligent follow-up questions."
        },
        {
            title: "Secure Medical Intake",
            image: "./automation.png",
            description: "All patient data processed in Trusted Execution Environments (TEEs) ensuring complete privacy and confidentiality."
        },
        {
            title: "Intelligent Clinical Summaries",
            image: "./data-analytics.png",
            description: "Structured clinical notes with symptom clusters, medical history, and smart routing to appropriate care providers."
        }
    ]
  return (
    <div className="py-16 lg:py-20 px-4" id="solutions">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-rubik text-center text-gray-900 font-bold text-3xl lg:text-4xl mb-3">Our Solutions</h2>
            <p className="font-rubik text-center text-gray-600 text-base lg:text-lg mb-12 max-w-2xl mx-auto">Discover how CuraAI streamlines healthcare intake while protecting patient privacy</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sols.map((sol, i) => (
                <SolutionCard key={i} title={sol.title} image={sol.image} description={sol.description}/>
            ))}
            </div>
        </div>
</div>
  )
}
export default Solutions;