import { FiEye, FiEyeOff } from "react-icons/fi"; 
import { useState } from "react";

const InputLogin = ({ placeholder, eye=false }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="gradient-input relative w-full p-2 mt-5">
        <input
          type={eye ? showPassword ? "text" : "password": 'text'}
          className="outline-none dark:bg-[#333333]"
          placeholder={placeholder}
          required
        />
        {eye ?  <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </span> : ''}

        
      </div>
    );
};

 
export default InputLogin;