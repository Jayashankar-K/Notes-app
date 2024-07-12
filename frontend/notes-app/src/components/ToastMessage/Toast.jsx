import React, { useEffect } from 'react';
import { LuCheck } from 'react-icons/lu';
import { MdClose, MdDeleteOutline } from 'react-icons/md';

const Toast = ({ isShown, message, type, onClose }) => {

  useEffect(() => {
    const timeoutId = setTimeout(() =>{
      onClose();
    },3000)
    
    return () => {
      clearTimeout(timeoutId);
    }
  }, [onClose]);
  
  return (
    <div className={`fixed top-20 right-6 transition-opacity duration-300 ${isShown ? "opacity-100" : "opacity-0"}`}>
      <div className={`min-w-52 bg-white border shadow-2xl rounded-md relative ${
        type === "delete" ? "border-red-500" : "border-green-500"
      }`}>
        <div className={`w-[5px] h-full absolute left-0 top-0 rounded-l-md ${
          type === "delete" ? "bg-red-500" : "bg-green-500"
        }`}></div>
        <div className='flex items-center gap-3 py-2 px-4'>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
            type === "delete" ? "bg-red-100" : "bg-green-100"
          }`}>
           {type === 'delete' ? <MdDeleteOutline className={"text-xl text-red-600"} /> : <LuCheck className={"text-xl text-green-600"} />}
          </div>
          <p className='text-sm text-slate-800'>{message}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Toast;
