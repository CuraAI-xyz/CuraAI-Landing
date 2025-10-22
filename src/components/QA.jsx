import CardQA from "./CardQA";
function QA(){
const qas = [
  {
    question: "What is CuraAI?",
    answer: {
      intro: "CuraAI is a privacy-first voice AI agent that automates the medical intake and triage process using confidential computing and encrypted analytics.",
      points: [
        "Built with Trusted Execution Environments (TEEs) and Fully Homomorphic Encryption (FHE), CuraAI runs sensitive AI inference securely — ensuring that even system operators cannot access raw patient data.",
        "Patients interact naturally by voice, describing their symptoms while the agent asks relevant follow-ups and structures the conversation into standardized summaries for clinicians.",
        "Doctors receive these summaries securely — complete with likely conditions, confidence levels, and reasoning — without CuraAI ever making a medical diagnosis.",
        "The goal: help doctors act faster with better information, not replace them."
      ]
    }
  },
  {
    question: "How does CuraAI improve healthcare?",
    answer: {
      intro: "CuraAI automates the intake and triage layer of healthcare:",
      points: [
        "Voice-based AI Agent — Converses naturally with patients to gather history, symptoms, and context.",
        "Intelligent Summarization — Generates structured clinical notes including symptom clusters, prior medication, family history, and relevant medical background.",
        "Smart Routing — Flags urgent cases and redirects patients to appropriate general or specialist care.",
        "TEE Enclaves — All inference runs inside secure enclaves, isolating patient data from any external access.",
        "FHE Analytics — Health providers get encrypted demographic and intake analytics without exposing sensitive data."
      ],
      conclusion: "CuraAI doesn't diagnose — it prepares doctors with structured, privacy-preserving information so they can focus on treatment, not paperwork."
    }
  },
  {
    question: "Is my data secure with CuraAI?",
    answer: {
      intro: "Yes — CuraAI is built from the ground up with privacy and data protection at its core.",
      points: [
        "All patient interactions and AI inference run inside Trusted Execution Environments (TEEs), ensuring that even system operators cannot access raw data.",
        "Additionally, our Fully Homomorphic Encryption (FHE) layer allows healthcare providers to extract valuable intake and demographic analytics without ever decrypting sensitive information.",
        "This means your voice, medical history, and personal context remain encrypted end-to-end — no one outside the secure enclave can see or intercept them.",
        "Unlike conventional digital intake tools or chatbots, CuraAI isolates every computation from external systems, ensuring compliance with the highest privacy and confidentiality standards in healthcare."
      ],
      conclusion: "In short: CuraAI never exposes your data — it processes it securely, privately, and ethically to help doctors act faster with better information."
    }
  },
  {
    question: "Why does CuraAI matter for healthcare?",
    answer: {
      intro: "Billions of people still face healthcare delays due to staff shortages and privacy barriers. CuraAI gives every patient a private, AI-powered voice that streamlines access to care — ethically and securely.",
      points: [
        "Healthcare Efficiency: CuraAI redefines healthcare efficiency by freeing doctors from repetitive intake work.",
        "Global Impact: NGOs and clinics can serve more patients in less time while maintaining privacy when connecting patients with healthcare providers.",
        "Healthcare Equity: Every patient gets a private AI voice at the point of need."
      ]
    }
  },
  {
    question: "What is CuraAI's competitive edge?",
    answer: {
      intro: "CuraAI is uniquely positioned at the intersection of Voice-AI and Privacy-First technology:",
      points: [
        "High Privacy + Voice AI: Unlike traditional chatbots or call centers, CuraAI combines natural voice interaction with enterprise-grade privacy protection",
        "Intelligent Pre-Diagnosis: Our AI doesn't just collect data—it provides structured clinical insights while maintaining complete patient confidentiality"
      ],
      conclusion: "While competitors offer either text-based solutions with high privacy (like secure messaging) or voice solutions with low privacy (like call centers and chatbots), CuraAI is the only solution that delivers both high privacy AND voice AI capabilities when connecting patients with health providers."
    }
  }
];

    return(
    <div className="py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="font-rubik text-center font-bold text-gray-900 text-3xl lg:text-4xl mb-12">Questions about CuraAI?</h2>
            <div className="space-y-4">
                {qas.map((qa, i) => (
                    <CardQA key={i} question={qa.question} answer={qa.answer}/>
                ))}
            </div>
        </div>
    </div>                    
    )
}

export default QA;