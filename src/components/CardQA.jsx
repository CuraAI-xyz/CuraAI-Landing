import { useState } from "react";

function CardQA({ question, answer }) {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return (
      <div onClick={handleShow} className='font-rubik w-full py-4 px-6 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200'>
        <div className="flex justify-between items-center">
        <h3 className="font-semibold text-base text-gray-900 pr-4">{question}</h3>
        <svg 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${show ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        </div>
        {show && (
          <div className="text-sm text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100">
            {typeof answer === 'string' ? (
              <p className="whitespace-pre-line">{answer}</p>
            ) : (
              <div className="space-y-4">
                <p>{answer.intro}</p>
                {answer.points && (
                  <ul className="space-y-2 ml-4">
                    {answer.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {answer.conclusion && (
                  <p className="font-medium text-gray-700">{answer.conclusion}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

    export default CardQA;