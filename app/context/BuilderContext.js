
// "use client";

// import { createContext, useState } from 'react';

// export const BuilderContext = createContext();

// export const BuilderProvider = ({ children }) => {
//   const [elements, setElements] = useState([]);
//   const [selectedElement, setSelectedElement] = useState(null);
//   const [device, setDevice] = useState('desktop');
//   const [sections, setSections] = useState([{ id: 1, elements: [] }]);
//   const [selectedSectionId, setSelectedSectionId] = useState(1); // Added selectedSectionId

//   const updateElement = (updatedElement) => {
//     setElements(elements.map(el => el === selectedElement ? updatedElement : el));
//     setSelectedElement(updatedElement);
//   };

//   const addElement = (type, elementData) => {
//     const newElement = { type, ...elementData };
//     setElements([...elements, newElement]);
//   };

//   return (
//     <BuilderContext.Provider value={{
//       sections,
//       setSections,
//       elements,
//       setElements,
//       selectedElement,
//       setSelectedElement,
//       updateElement,
//       device,
//       setDevice,
//       addElement,
//       selectedSectionId, // Provided selectedSectionId
//       setSelectedSectionId // Provided setSelectedSectionId
//     }}>
//       {children}
//     </BuilderContext.Provider>
//   );
// };


// "use client";

// import { createContext, useState } from 'react';

// export const BuilderContext = createContext();

// export const BuilderProvider = ({ children }) => {
//   const [elements, setElements] = useState([]);
//   const [sections, setSections] = useState([{ id: 1, elements: [], backgroundColor: '#ffffff' }]);
//   const [selectedElement, setSelectedElement] = useState(null);
//   const [selectedSectionId, setSelectedSectionId] = useState(1);
//   const [device, setDevice] = useState('desktop');
  

//   const updateElement = (updatedElement) => {
//     setSections((prevSections) =>
//       prevSections.map((section) =>
//         section.id === selectedSectionId
//           ? {
//               ...section,
//               elements: section.elements.map((el) =>
//                 el === selectedElement ? updatedElement : el
//               ),
//             }
//           : section
//       )
//     );
//     setSelectedElement(updatedElement);
//   };

//   const addElement = (type, elementData) => {
//     const newElement = { type, ...elementData };
//     setSections((prevSections) =>
//       prevSections.map((section) =>
//         section.id === selectedSectionId
//           ? { ...section, elements: [...section.elements, newElement] }
//           : section
//       )
//     );
//   };

//   const addSection = () => {
//     const newSection = {
//       id: sections.length + 1,
//       elements: [],
//       backgroundColor: '#ffffff',
//     };
//     setSections([...sections, newSection]);
//   };

//   const duplicateSection = (sectionId) => {
//     const sectionToDuplicate = sections.find((section) => section.id === sectionId);
//     const duplicatedSection = { ...sectionToDuplicate, id: sections.length + 1 };
//     setSections([...sections, duplicatedSection]);
//   };

//   const deleteSection = (sectionId) => {
//     setSections(sections.filter((section) => section.id !== sectionId));
//   };

//   return (
//     <BuilderContext.Provider
//       value={{
//         elements,
//      setElements,
//         sections,
//         setSections,
//         selectedElement,
//         setSelectedElement,
//         updateElement,
//         addElement,
//         device,
//         setDevice,
//         addSection,
//         duplicateSection,
//         deleteSection,
//         selectedSectionId,
//         setSelectedSectionId,
//       }}
//     >
//       {children}
//     </BuilderContext.Provider>
//   );
// };


"use client";

import { createContext, useState } from 'react';

export const BuilderContext = createContext();

export const BuilderProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [sections, setSections] = useState([{ id: 1, elements: [], backgroundColor: '#ffffff' }]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedSectionId, setSelectedSectionId] = useState(1);
  const [device, setDevice] = useState('desktop');

  const updateElement = (updatedElement) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === selectedSectionId
          ? {
              ...section,
              elements: section.elements.map((el) =>
                el === selectedElement ? updatedElement : el
              ),
            }
          : section
      )
    );
    setSelectedElement(updatedElement);
  };

  const addElement = (type, elementData) => {
    const newElement = { type, sectionId: selectedSectionId, ...elementData };
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === selectedSectionId
          ? { ...section, elements: [...section.elements, newElement] }
          : section
      )
    );
  };

  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      elements: [],
      backgroundColor: '#ffffff',
    };
    setSections([...sections, newSection]);
  };

  const duplicateSection = (sectionId) => {
    const sectionToDuplicate = sections.find((section) => section.id === sectionId);
    const duplicatedSection = { ...sectionToDuplicate, id: sections.length + 1 };
    setSections([...sections, duplicatedSection]);
  };

  const deleteSection = (sectionId) => {
    setSections(sections.filter((section) => section.id !== sectionId));
  };

  const removeElement = (sectionId, elementIndex) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, elements: section.elements.filter((_, index) => index !== elementIndex) }
          : section
      )
    );
  };

  return (
    <BuilderContext.Provider
      value={{
        elements,
       setElements,
        sections,
        setSections,
        selectedElement,
        setSelectedElement,
        updateElement,
        addElement,
        device,
        setDevice,
        addSection,
        duplicateSection,
        deleteSection,
        selectedSectionId,
        setSelectedSectionId,
        removeElement,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

