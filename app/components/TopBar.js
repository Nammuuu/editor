
// "use client"


// // import { useContext } from 'react';
// // import { BuilderContext } from '../context/BuilderContext';
// // import RichTextEditor from './RichTextEditor';

// import React from 'react';
// import { SketchPicker } from 'react-color';
// import { useContext } from 'react';
// import { BuilderContext } from '../context/BuilderContext';

// const TopBar = () => {
//   const { selectedElement, updateElement } = useContext(BuilderContext);

//   const handleChange = (content) => {
//     if (selectedElement) {
//       updateElement({ ...selectedElement, content });
//     }
//   };

//   const handleColorChange = (color) => {
//     if (selectedElement) {
//       updateElement({ ...selectedElement, color: color.hex });
//     }
//   };
//   // <SketchPicker color={selectedElement.color} onChange={handleColorChange} />
//   return (
//     <div className="w-full h-12 bg-gray-200 flex items-center justify-around fixed top-0 left-0 z-10">
//       {selectedElement?.type === 'text' && (
//         <>
//           <div>hellp</div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TopBar;



import { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';

const TopBar = () => {
  const { setDevice } = useContext(BuilderContext);

  return (
    <div className="w-full bg-gray-800 text-white flex justify-between items-center p-4 fixed top-0 left-0 z-10">
      <h1 className="text-xl">Website Builder</h1>
      <div className="flex space-x-4">
        <button onClick={() => setDevice('desktop')} className="bg-blue-500 p-2 rounded">
          Desktop
        </button>
        <button onClick={() => setDevice('tablet')} className="bg-blue-500 p-2 rounded">
          Tablet
        </button>
        <button onClick={() => setDevice('smartphone')} className="bg-blue-500 p-2 rounded">
          Smartphone
        </button>
      </div>
    </div>
  );
};

export default TopBar;
