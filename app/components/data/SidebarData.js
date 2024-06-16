// // SidebarData.js
// import { faHeading, faParagraph, faLink, faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
// import { SketchPicker } from 'react-color';

// export const textElements = [
//   { tag: 'H1', icon: faHeading },
//   { tag: 'H2', icon: faHeading },
//   { tag: 'H3', icon: faHeading },
//   { tag: 'H4', icon: faHeading },
//   { tag: 'H5', icon: faHeading },
//   { tag: 'H6', icon: faHeading },
//   { tag: 'P', icon: faParagraph },
//   { tag: 'A', icon: faLink },
// ];

// export const defaultFontSize = {
//   H1: 20,
//   H2: 17,
//   H3: 12,
//   H4: 8,
//   H5: 6,
//   H6: 5,
//   P: 14,
//   A: 14,
// };

// export const initialPreviewSettings = {
//   minWidth: 100,
//   maxWidth: 500,
//   minHeight: 100,
//   maxHeight: 500,
//   backgroundColor: '#ffffff',
//   order: 1,
// };

// export const handleColorChange = (selectedElement, color, updateElement) => {
//   if (selectedElement) {
//     updateElement({ ...selectedElement, color: color.hex });
//   }
// };

// export const handleFontSizeChange = (selectedElement, e, updateElement) => {
//   if (selectedElement) {
//     updateElement({ ...selectedElement, fontSize: parseInt(e.target.value) });
//   }
// };

// export const handleFontWeightChange = (selectedElement, e, updateElement) => {
//   if (selectedElement) {
//     updateElement({ ...selectedElement, fontWeight: e.target.value });
//   }
// };

// export const handleFontFamilyChange = (selectedElement, e, updateElement) => {
//   if (selectedElement) {
//     updateElement({ ...selectedElement, fontFamily: e.target.value });
//   }
// };

// export const handlePreviewSettingsChange = (previewSettings, setPreviewSettings, e) => {
//   const { name, value } = e.target;
//   setPreviewSettings({
//     ...previewSettings,
//     [name]: name === 'order' ? parseInt(value) : value,
//   });
// };

// export const handlePreviewBackgroundColorChange = (previewSettings, setPreviewSettings, color) => {
//   setPreviewSettings({ ...previewSettings, backgroundColor: color.hex });
// };

// export const removeElement = (elements, setElements, index) => {
//     const updatedElements = elements.filter((_, i) => i !== index);
//     setElements(updatedElements);
//   };



// // in previewsection Ftype

// export const sidebarData = [
//   { name: 'Text', icon: 'faHeading' },
//   { name: 'Image', icon: 'faImage' },
//   { name: 'Video', icon: 'faVideo' }
// ];

"use client";

import { faHeading, faParagraph, faLink } from '@fortawesome/free-solid-svg-icons';

export const textElements = [
  { tag: 'H1', icon: faHeading },
  { tag: 'H2', icon: faHeading },
  { tag: 'H3', icon: faHeading },
  { tag: 'H4', icon: faHeading },
  { tag: 'H5', icon: faHeading },
  { tag: 'H6', icon: faHeading },
  { tag: 'P', icon: faParagraph },
  { tag: 'A', icon: faLink },
];

export const defaultFontSize = {
  H1: 20,
  H2: 17,
  H3: 12,
  H4: 8,
  H5: 6,
  H6: 5,
  P: 14,
  A: 14,
};

export const handleColorChange = (selectedElement, color, updateElement) => {
  if (selectedElement) updateElement({ ...selectedElement, color: color.hex });
};

export const handleFontSizeChange = (selectedElement, e, updateElement) => {
  if (selectedElement) updateElement({ ...selectedElement, fontSize: parseInt(e.target.value) });
};

export const handleFontWeightChange = (selectedElement, e, updateElement) => {
  if (selectedElement) updateElement({ ...selectedElement, fontWeight: e.target.value });
};

export const handleFontFamilyChange = (selectedElement, e, updateElement) => {
  if (selectedElement) updateElement({ ...selectedElement, fontFamily: e.target.value });
};

export const removeElement = (elements, setElements, index) => {
  setElements(elements.filter((_, i) => i !== index));
};
