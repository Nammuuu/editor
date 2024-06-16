// "use client"

// import React, { useContext } from 'react';
// import { BuilderContext } from '../context/BuilderContext';
// import { handleColorChange, handleFontSizeChange, handleFontWeightChange, handleFontFamilyChange, removeElement } from './data/sidebarData';
// import TextSettings from './data/slidebar/TextSettings';
// import ImageSettings from './data/slidebar/ImageSection';
// import VideoSettings from './data/slidebar/VideoSection';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const SettingsSidebar = () => {
//   const { elements, setElements, selectedElement, updateElement } = useContext(BuilderContext);

//   const handleRemoveElement = () => {
//     console.log('Removing element:', selectedElement);
//     const updatedElements = elements.filter((el) => el.id !== selectedElement.id); // Ensure unique identifier comparison
//     console.log('Updated elements:', updatedElements);
//     setElements(updatedElements);
//   };

//   return (
//     <div className="w-1/4 h-full bg-gray-100 p-4 overflow-auto">
//       <h2 className="mb-4 text-lg font-bold">Element Settings</h2>
//       {selectedElement && (
//         <>
//           {selectedElement.type === 'text' && (
//             <TextSettings
//               selectedElement={selectedElement}
//               handleFontSizeChange={(e) => handleFontSizeChange(selectedElement, e, updateElement)}
//               handleFontWeightChange={(e) => handleFontWeightChange(selectedElement, e, updateElement)}
//               handleFontFamilyChange={(e) => handleFontFamilyChange(selectedElement, e, updateElement)}
//               handleColorChange={(color) => handleColorChange(selectedElement, color, updateElement)}
//               updateElement={updateElement}
//             />
//           )}
//           {selectedElement.type === 'image' && (
//             <ImageSettings selectedElement={selectedElement} updateElement={updateElement} />
//           )}
//           {selectedElement.type === 'video' && (
//             <VideoSettings selectedElement={selectedElement} updateElement={updateElement} />
//           )}
//           <button
//             onClick={handleRemoveElement}
//             className="mt-4 w-full bg-red-500 text-white p-2 flex items-center justify-center"
//           >
//             <FontAwesomeIcon icon={faTrash} className="mr-2" /> Remove Element
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default SettingsSidebar;


"use client";

import React, { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';
import { 
  handleColorChange,
   handleFontSizeChange, 
   handleFontWeightChange,
    // handleFontFamilyChange
   } from './data/sidebarData';

// import  {handleFontFamilyChange } from './data/SidebarData';
import { handleFontFamilyChange } from './data/sidebarData';


import TextSettings from './data/slidebar/TextSettings';
import ElementList from './data/slidebar/ElementList';
import ImageSettings from './data/slidebar/ImageSection';
import VideoSettings from './data/slidebar/VideoSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const SettingsSidebar = () => {
  const { sections, selectedElement, updateElement, removeElement, selectedSectionId } = useContext(BuilderContext);
  const { elements = [], setElements,  } = useContext(BuilderContext);
  const handleRemoveElement = () => {
    if (selectedElement) {
      const section = sections.find(section => section.id === selectedSectionId);
      if (section) {
        const elementIndex = section.elements.indexOf(selectedElement);
        removeElement(selectedSectionId, elementIndex);
      }
    }
  };

  return (
    <div className="w-1/4 h-full bg-gray-100 p-4 overflow-auto">
      <h2 className="mb-4 text-lg font-bold">Element Settings</h2>
      {selectedElement && (
        <>
          {selectedElement.type === 'text' && (
            <TextSettings
              selectedElement={selectedElement}
              handleFontSizeChange={(e) => handleFontSizeChange(selectedElement, e, updateElement)}
              handleFontWeightChange={(e) => handleFontWeightChange(selectedElement, e, updateElement)}
              handleFontFamilyChange={(e) => handleFontFamilyChange(selectedElement, e, updateElement)}
              handleColorChange={(color) => handleColorChange(selectedElement, color, updateElement)}
              updateElement={updateElement}
            />
          )}
          {selectedElement.type === 'image' && (
            <ImageSettings selectedElement={selectedElement} updateElement={updateElement} />
          )}
          {selectedElement.type === 'video' && (
            <VideoSettings selectedElement={selectedElement} updateElement={updateElement} />
          )}



          
          <button
            onClick={handleRemoveElement}
            className="mt-4 w-full bg-red-500 text-white p-2 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" /> Remove Element
          </button>


          
          <ElementList elements={elements} setElements={setElements} removeElement={removeElement} />
        </>
      )}
    </div>
  );
};

export default SettingsSidebar;
