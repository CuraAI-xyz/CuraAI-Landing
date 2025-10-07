import SolutionCard from "./SolutionCard";
function Solutions() {
    const sols = [
        {
            title: "AI-Powered Diagnostics",
            image: "./robot.png",
            description: "Enhance diagnostic accuracy with machine learning algorithms that analyze medical images and patient data."
        },
        {
            title: "Automated Patient Monitoring",
            image: "./automation.png",
            description: "Real-time monitoring of patient vitals using AI to alert healthcare providers of any anomalies."
        },
        {
            title: "Predictive Analytics for Healthcare",
            image: "./data-analytics.png",
            description: "Leverage big data and AI to predict patient outcomes and optimize treatment plans."
        }
    ]
  return (
    <div className="pt-20 pb-20" id="solutions">
        <h2 className="font-rubik text-center text-gray-900 font-bold text-3xl">Our Solutions</h2>
        <p className="font-rubik text-center text-gray-700">Discover how our work is transforming the healthcare sector</p>
        <div className="flex gap-4 p-8 justify-center">
        {sols.map((sol, i) => (
            <SolutionCard key={i} title={sol.title} image={sol.image} description={sol.description}/>
        ))}
        </div>
</div>
  )
}
export default Solutions;