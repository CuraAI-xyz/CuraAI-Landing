import { useState } from "react";

function CardQA({ question, answer }) {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return (
      <div onClick={handleShow} className='font-rubik w-6/10 py-8 mx-auto border p-4 rounded-lg bg-[#61A5C2] shadow-md text-white'>
        <div className="flex justify-between items-center cursor-pointer">
        <h3 className="font-bold mb-2">{question}</h3>
        <img width={30} src="/down-arrow.png" alt="down arrow"/>
        </div>
        <p className={`${show ? 'block' : 'hidden'}`}>{answer}</p>

      </div>
    );
  }

    export default CardQA;