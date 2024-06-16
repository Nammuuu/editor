import React from 'react';
import { SketchPicker } from 'react-color';

const PreviewSettings = ({
  previewSettings,
  setPreviewSettings,
  handlePreviewSettingsChange,
  handlePreviewBackgroundColorChange,
}) => (
  <div className="mt-4">
    <h3 className="text-lg font-bold">Preview Settings</h3>
    <div className="mt-2">
      <label className="block mb-1">Min Width</label>
      <input
        type="number"
        name="minWidth"
        value={previewSettings.minWidth}
        onChange={(e) => handlePreviewSettingsChange(previewSettings, setPreviewSettings, e)}
        className="w-full p-2 border"
      />
    </div>
    <div className="mt-2">
      <label className="block mb-1">Max Width</label>
      <input
        type="number"
        name="maxWidth"
        value={previewSettings.maxWidth}
        onChange={(e) => handlePreviewSettingsChange(previewSettings, setPreviewSettings, e)}
        className="w-full p-2 border"
      />
    </div>
    <div className="mt-2">
      <label className="block mb-1">Min Height</label>
      <input
        type="number"
        name="minHeight"
        value={previewSettings.minHeight}
        onChange={(e) => handlePreviewSettingsChange(previewSettings, setPreviewSettings, e)}
        className="w-full p-2 border"
      />
    </div>
    <div className="mt-2">
      <label className="block mb-1">Max Height</label>
      <input
        type="number"
        name="maxHeight"
        value={previewSettings.maxHeight}
        onChange={(e) => handlePreviewSettingsChange(previewSettings, setPreviewSettings, e)}
        className="w-full p-2 border"
      />
    </div>
    <div className="mt-2">
      <label className="block mb-1">Order</label>
      <input
        type="number"
        name="order"
        value={previewSettings.order}
        onChange={(e) => handlePreviewSettingsChange(previewSettings, setPreviewSettings, e)}
        className="w-full p-2 border"
      />
    </div>
    <div className="mt-2">
      <label className="block mb-1">Background Color</label>
      <SketchPicker
        color={previewSettings.backgroundColor}
        onChange={(color) => handlePreviewBackgroundColorChange(previewSettings, setPreviewSettings, color)}
      />
    </div>
  </div>
);

export default PreviewSettings;
