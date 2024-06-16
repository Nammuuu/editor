
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
