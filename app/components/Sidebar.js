// "use client";

// import React, { useContext, useState } from 'react';
// import { useDrag } from 'react-dnd';
// import { BuilderContext } from '../context/BuilderContext';
// import {
//   textElements,
//   defaultFontSize,
  
//   handleColorChange,
//   handleFontSizeChange,
//   handleFontWeightChange,
//   handleFontFamilyChange,
//   removeElement,
// } from './data/SidebarData';
// import TextSettings from './data/slidebar/TextSettings';
// import ImageSection from './data/slidebar/ImageSection';
// import VideoSection from './data/slidebar/VideoSection';
// import ElementList from './data/slidebar/ElementList';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Sidebar = () => {
//   const { elements, setElements, selectedElement, setSelectedElement, updateElement } = useContext(BuilderContext);
//   const [activeSection, setActiveSection] = useState('text');

//   const addTextElement = (type) => {
//     const newElement = {
//       type: 'text',
//       tag: type,
//       content: `This is ${type}`,
//       fontSize: defaultFontSize[type] || 14,
//       color: '#000000',
//       fontFamily: 'Arial',
//       fontWeight: 'normal',
     
//     };
//     setElements([...elements, newElement]);
//   };

//   const addImageElement = () => {
//     const newElement = {
//       type: 'image',
//       src: 'https://via.placeholder.com/150',
//       width: 150,
//       height: 150,
//     };
//     setElements([...elements, newElement]);
//   };

//   const addVideoElement = () => {
//     const newElement = {
//       type: 'video',
//       src: 'https://www.w3schools.com/html/mov_bbb.mp4',
//       width: 320,
//       height: 240,
//     };
//     setElements([...elements, newElement]);
//   };

//   const TextElement = ({ tag, icon }) => {
//     const [, drag] = useDrag(() => ({
//       type: 'text-element',
//       item: { tag },
//       end: (item, monitor) => {
//         const dropResult = monitor.getDropResult();
//         if (item && dropResult) {
//           addTextElement(item.tag);
//         }
//       },
//     }));

//     return (
//       <button
//         ref={drag}
//         onClick={() => addTextElement(tag)}
//         className="mb-2 w-full bg-blue-500 text-white p-2 flex items-center"
//       >
//         <FontAwesomeIcon icon={icon} className="mr-2" /> Add {tag}
//       </button>
//     );
//   };

//   return (
//     <div className="w-1/4 h-full bg-gray-100 p-4 overflow-auto">
//       <h2 className="mb-4 text-lg font-bold">Add Elements</h2>
//       <div className="mb-4">
//         <button
//           onClick={() => setActiveSection('text')}
//           className={`mb-2 w-full p-2 ${activeSection === 'text' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
//         >
//           Text
//         </button>
//         <button
//           onClick={() => setActiveSection('image')}
//           className={`mb-2 w-full p-2 ${activeSection === 'image' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
//         >
//           Image
//         </button>
//         <button
//           onClick={() => setActiveSection('video')}
//           className={`mb-2 w-full p-2 ${activeSection === 'video' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
//         >
//           Video
//         </button>
//       </div>

//       {activeSection === 'text' && (
//         <>
//           {textElements.map((element) => (
//             <TextElement key={element.tag} tag={element.tag} icon={element.icon} />
//           ))}
//           <TextSettings
//             selectedElement={selectedElement}
//             handleFontSizeChange={(e) => handleFontSizeChange(selectedElement, e, updateElement)}
//             handleFontWeightChange={(e) => handleFontWeightChange(selectedElement, e, updateElement)}
//             handleFontFamilyChange={(e) => handleFontFamilyChange(selectedElement, e, updateElement)}
//             handleColorChange={(color) => handleColorChange(selectedElement, color, updateElement)}
//             updateElement={updateElement}
//           />
//         </>
//       )}

//       {activeSection === 'image' && <ImageSection addImageElement={addImageElement} />}

//       {activeSection === 'video' && <VideoSection addVideoElement={addVideoElement} />}

//       <ElementList elements={elements} setElements={setElements} removeElement={removeElement} />
//     </div>
//   );
// };

// export default Sidebar;



// "use client";

// import React, { useContext, useState } from 'react';
// import { useDrag } from 'react-dnd';
// import { BuilderContext } from '../context/BuilderContext';
// import {
//   textElements,
//   defaultFontSize,
//   handleColorChange,
//   handleFontSizeChange,
//   handleFontWeightChange,
//   handleFontFamilyChange,
//   removeElement,
// } from './data/SidebarData';
// import TextSettings from './data/slidebar/TextSettings';
// import ImageSection from './data/slidebar/ImageSection';
// import VideoSection from './data/slidebar/VideoSection';
// import ElementList from './data/slidebar/ElementList';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Sidebar = () => {
//   const { elements = [], setElements, selectedElement, setSelectedElement, updateElement } = useContext(BuilderContext);
//   const [activeSection, setActiveSection] = useState('text');

//   const addTextElement = (type) => {
//     const newElement = {
//       type: 'text',
//       tag: type,
//       content: `This is ${type}`,
//       fontSize: defaultFontSize[type] || 14,
//       color: '#000000',
//       fontFamily: 'Arial',
//       fontWeight: 'normal',
//     };
//     setElements([...elements, newElement]);
//   };

//   const addImageElement = () => {
//     const newElement = {
//       type: 'image',
//       src: 'https://via.placeholder.com/150',
//       width: 150,
//       height: 150,
//     };
//     setElements([...elements, newElement]);
//   };

//   const addVideoElement = () => {
//     const newElement = {
//       type: 'video',
//       src: 'https://www.w3schools.com/html/mov_bbb.mp4',
//       width: 320,
//       height: 240,
//     };
//     setElements([...elements, newElement]);
//   };

//   const TextElement = ({ tag, icon }) => {
//     const [, drag] = useDrag(() => ({
//       type: 'text-element',
//       item: { tag },
//       end: (item, monitor) => {
//         const dropResult = monitor.getDropResult();
//         if (item && dropResult) {
//           addTextElement(item.tag);
//         }
//       },
//     }));

//     return (
//       <button
//         ref={drag}
//         onClick={() => addTextElement(tag)}
//         className="mb-2 w-full bg-blue-500 text-white p-2 flex items-center"
//       >
//         <FontAwesomeIcon icon={icon} className="mr-2" /> Add {tag}
//       </button>
//     );
//   };

//   return (
//     <div className="w-1/4 h-full bg-gray-100 p-4 overflow-auto">
//       <h2 className="mb-4 text-lg font-bold">Add Elements</h2>
//       <div className="mb-4">
//         <button
//           onClick={() => setActiveSection('text')}
//           className={`mb-2 w-full p-2 ${activeSection === 'text' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
//         >
//           Text
//         </button>
//         <button
//           onClick={() => setActiveSection('image')}
//           className={`mb-2 w-full p-2 ${activeSection === 'image' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
//         >
//           Image
//         </button>
//         <button
//           onClick={() => setActiveSection('video')}
//           className={`mb-2 w-full p-2 ${activeSection === 'video' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
//         >
//           Video
//         </button>
//       </div>

//       {activeSection === 'text' && (
//         <>
//           {textElements.map((element) => (
//             <TextElement key={element.tag} tag={element.tag} icon={element.icon} />
//           ))}
//           <TextSettings
//             selectedElement={selectedElement}
//             handleFontSizeChange={(e) => handleFontSizeChange(selectedElement, e, updateElement)}
//             handleFontWeightChange={(e) => handleFontWeightChange(selectedElement, e, updateElement)}
//             handleFontFamilyChange={(e) => handleFontFamilyChange(selectedElement, e, updateElement)}
//             handleColorChange={(color) => handleColorChange(selectedElement, color, updateElement)}
//             updateElement={updateElement}
//           />
//         </>
//       )}

//       {activeSection === 'image' && <ImageSection addImageElement={addImageElement} />}

//       {activeSection === 'video' && <VideoSection addVideoElement={addVideoElement} />}

//       <ElementList elements={elements} setElements={setElements} removeElement={removeElement} />
//     </div>
//   );
// };

// export default Sidebar;


"use client";

import React, { useContext, useState } from 'react';
import { useDrag } from 'react-dnd';
import { BuilderContext } from '../context/BuilderContext';
import {
  textElements,
  defaultFontSize,
} from './data/sidebarData';
import ImageSection from './data/slidebar/ImageSection';
import VideoSection from './data/slidebar/VideoSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const { elements, setElements, } = useContext(BuilderContext);
  const [activeSection, setActiveSection] = useState('text');

  const addElement = (type, elementData) => {
    setElements([...elements, { type, ...elementData }]);
  };

  const addTextElement = (type) => addElement('text', {
    tag: type,
    content: `This is ${type}`,
    fontSize: defaultFontSize[type] || 14,
    color: '#000000',
    fontFamily: 'Arial',
    fontWeight: 'normal',
  });

  const TextElement = ({ tag, icon }) => {
    const [, drag] = useDrag(() => ({
      type: 'text-element',
      item: { tag },
      end: (item, monitor) => monitor.getDropResult() && addTextElement(item.tag),
    }));

    return (
      <button
        ref={drag}
        onClick={() => addTextElement(tag)}
        className="mb-2 w-full bg-blue-500 text-white p-2 flex items-center"
      >
        <FontAwesomeIcon icon={icon} className="mr-2" /> Add {tag}
      </button>
    );
  };

  return (
    <div className="w-1/4 h-full bg-gray-100 p-4 overflow-auto">
      <h2 className="mb-4 text-lg font-bold">Add Elements</h2>
      <div className="mb-4">
        {['text', 'image', 'video'].map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`mb-2 w-full p-2 ${activeSection === section ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {activeSection === 'text' && (
        <>
          {textElements.map(({ tag, icon }) => (
            <TextElement key={tag} tag={tag} icon={icon} />
          ))}
          
        </>
      )}
         
      {activeSection === 'image' && <ImageSection addImageElement={() => addElement('image', { src: 'https://via.placeholder.com/150', width: 150, height: 150 })} />}
      {activeSection === 'video' && <VideoSection addVideoElement={() => addElement('video', { src: 'https://www.w3schools.com/html/mov_bbb.mp4', width: 320, height: 240 })} />}
      

      
    </div>
  );
};

export default Sidebar;

