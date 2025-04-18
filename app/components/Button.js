import React from 'react';


const Button = ({ text,Icon }) => {
  return (
    <button 
      className={`flex items-center whitespace-nowrap rounded-md  ${text==='login'? 'gap-0 ' : 'gap-1 '} `}
    >
      {Icon && <Icon className={` text-sm ${text==='Write a Review' ? 'text-orange-600 ': ''} ${text==='login'? 'h-6 w-6' : ' w-4 h-4 ' }`} />}
      <span>{text}</span>
    </button>
  );
};

export default Button