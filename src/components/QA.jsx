import CardQA from "./CardQA";
function QA(){
const qas = [
  {
    question: "What is CuraAI?",
    answer: `CuraAI is a privacy-first voice AI agent that automates the medical intake and triage process using confidential computing and encrypted analytics.
Built with Trusted Execution Environments (TEEs) and Fully Homomorphic Encryption (FHE), CuraAI runs sensitive AI inference securely — ensuring that even system operators cannot access raw patient data.
Patients interact naturally by voice, describing their symptoms while the agent asks relevant follow-ups and structures the conversation into standardized summaries for clinicians.
Doctors receive these summaries securely — complete with likely conditions, confidence levels, and reasoning — without CuraAI ever making a medical diagnosis.
The goal: help doctors act faster with better information, not replace them.`
  },
  {
    question: "How does CuraAI improve healthcare?",
    answer: `CuraAI automates the intake and triage layer of healthcare.

Voice-based AI Agent — Converses naturally with patients to gather history, symptoms, and context.
Intelligent Summarization — Generates structured clinical notes including symptom clusters, prior medication, family history, and relevant medical background.
Smart Routing — Flags urgent cases and redirects patients to appropriate general or specialist care.
TEE Enclaves — All inference runs inside secure enclaves, isolating patient data from any external access.
FHE Analytics — Health providers get encrypted demographic and intake analytics without exposing sensitive data.

CuraAI doesn't diagnose — it prepares doctors with structured, privacy-preserving information so they can focus on treatment, not paperwork.`

 },
  {
    question: "Is my data secure with CuraAI?",
    answer: `Yes — CuraAI is built from the ground up with privacy and data protection at its core.

All patient interactions and AI inference run inside Trusted Execution Environments (TEEs), ensuring that even system operators cannot access raw data. 
Additionally, our Fully Homomorphic Encryption (FHE) layer allows healthcare providers to extract valuable intake and demographic analytics without ever decrypting sensitive information.

This means your voice, medical history, and personal context remain encrypted end-to-end — no one outside the secure enclave can see or intercept them.

Unlike conventional digital intake tools or chatbots, CuraAI isolates every computation from external systems, ensuring compliance with the highest privacy and confidentiality standards in healthcare.

In short: CuraAI never exposes your data — it processes it securely, privately, and ethically to help doctors act faster with better information.`
  }
];

    return(
    <div className="flex flex-col mt-80 mb-80 gap-5">
        <h2 className="font-rubik text-center font-bold text-gray-900 text-5xl">Questions about CuraAI?</h2>
        {qas.map((qa, i) => (
            <CardQA key={i} question={qa.question} answer={qa.answer}/>
        ))}
    </div>                    
    )
}

export default QA;