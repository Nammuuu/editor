import React from 'react';

const ElementList = ({ elements, setElements, removeElement }) => {
  const safeElements = elements || [];

  return (
    <ul>
      {safeElements.map((element, index) => (
        <li key={index} className="mb-2 flex justify-between">
          {element.type === 'text' && element.content}
          {element.type === 'image' && 'Image Element'}
          {element.type === 'video' && 'Video Element'}
          <button onClick={() => removeElement(safeElements, setElements, index)} className="ml-2 bg-red-500 text-white p-1">
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ElementList;
