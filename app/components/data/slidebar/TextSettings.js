import React from 'react';
import { SketchPicker } from 'react-color';

const TextSettings = ({
  selectedElement,
  handleFontSizeChange,
  handleFontWeightChange,
  handleFontFamilyChange,
  handleColorChange,
  updateElement,
}) => {
  if (!selectedElement || selectedElement.type !== 'text') {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Text Settings</h3>
      <div className="mt-2">
        <label className="block mb-1">Font Size</label>
        <input
          type="number"
          value={selectedElement.fontSize}
          onChange={handleFontSizeChange}
          className="w-full p-2 border"
        />
      </div>
      <div className="mt-2">
        <label className="block mb-1">Font Weight</label>
        <select
          value={selectedElement.fontWeight}
          onChange={handleFontWeightChange}
          className="w-full p-2 border"
        >
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="bolder">Bolder</option>
          <option value="lighter">Lighter</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>
      </div>
      <div className="mt-2">
        <label className="block mb-1">Font Family</label>
        <input
          type="text"
          value={selectedElement.fontFamily}
          onChange={handleFontFamilyChange}
          className="w-full p-2 border"
        />
      </div>
      <div className="mt-2">
        <label className="block mb-1">Color</label>
        <SketchPicker color={selectedElement.color} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default TextSettings;
