import CardQA from "./CardQA";
function QA(){
    const qas = [
        {
            question: "What is CuraAI?",
            answer: "CuraAI is a cutting-edge technology company specializing in artificial intelligence solutions for the healthcare industry. Our mission is to enhance patient care and streamline medical processes through innovative AI applications."
        },
        {
            question: "How does CuraAI improve healthcare?",
            answer: "CuraAI leverages advanced machine learning algorithms to analyze vast amounts of medical data, enabling more accurate diagnoses, personalized treatment plans, and efficient resource management. Our solutions help healthcare providers make informed decisions, ultimately improving patient outcomes."
        },
        {
            question: "Is my data secure with CuraAI?",
            answer: "Absolutely. At CuraAI, we prioritize data security and patient privacy. We implement robust encryption protocols and comply with all relevant healthcare regulations to ensure that your data is protected at all times."
        }
    ]
    return(
    <div className="flex flex-col mt-80 mb-80 gap-5">
        <h2 className="font-rubik text-center font-bold text-gray-900 text-6xl">Questions about CuraAI?</h2>
        {qas.map((qa, i) => (
            <CardQA key={i} question={qa.question} answer={qa.answer}/>
        ))}
    </div>                    
    )
}

export default QA;