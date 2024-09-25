import React, { useState } from 'react';

function Checkbox({ texto }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center my-4 w-full gap-2">
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label className="text-sm font-medium text-gray-900">
        {texto}
      </label>
    </div>
  );
}

export default Checkbox