"use client";

import React, { useContext, useState } from 'react';
import { BuilderContext } from '../context/BuilderContext';
import { useDrop } from 'react-dnd';

import { Rnd } from 'react-rnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deviceSizes, defaultFontSize, deviceIcons, generateHTMLCSSJS } from './previewData/previewData';

const BackgroundColorControl = ({ backgroundColor, setBackgroundColor }) => (
  <input
    type="color"
    value={backgroundColor}
    onChange={(e) => setBackgroundColor(e.target.value)}
    className="absolute top-4 left-4 z-10"
  />
);

const Preview = () => {
  const {
    sections,
    setSections,
    selectedSectionId,
    setSelectedSectionId,
    selectedElement,
    setSelectedElement,
    device,
    setDevice
  } = useContext(BuilderContext);

  const { addElement } = useContext(BuilderContext);

  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const [{ isOver }, drop] = useDrop({
    accept: 'text-element',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      addTextElement(item.tag, offset);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addTextElement = (type, offset) => {
    const newElement = {
      type: 'text',
      tag: type,
      content: `This is ${type}`,
      fontSize: defaultFontSize[type] || 14,
      color: '#000000',
      fontFamily: 'Arial',
      position: offset ? { x: offset.x, y: offset.y } : { x: 0, y: 0 },
    };

    setSections((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[selectedSectionId - 1].elements.push(newElement);
      return updatedSections;
    });
  };

  const handleContentChange = (sectionIndex, elementIndex, newContent) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].elements[elementIndex].content = newContent;
    setSections(updatedSections);
  };

  const handleResizeStop = (sectionIndex, elementIndex, ref) => {
    const updatedSections = [...sections];
    const newFontSize = parseFloat(ref.style.height);
    updatedSections[sectionIndex].elements[elementIndex].fontSize = newFontSize;
    setSections(updatedSections);
  };

  const handleDragStop = (sectionIndex, elementIndex, e, d) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].elements[elementIndex].position = { x: d.x, y: d.y };
    setSections(updatedSections);
  };

  const handleAddSection = () => {
    setSections((prevSections) => [
      ...prevSections,
      { id: prevSections.length + 1, elements: [], backgroundColor: '#ffffff', backgroundImage: '' },
    ]);
  };

  const handleDeleteSection = (id) => {
    setSections((prevSections) => prevSections.filter((section) => section.id !== id));
  };

  const handleSelectSection = (id) => {
    setSelectedSectionId(id);
  };

  const handleSelectElement = (element) => {
    setSelectedElement(element);
  };

  const handleSectionBackgroundColorChange = (sectionIndex, color) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].backgroundColor = color;
    setSections(updatedSections);
  };

  const handleSectionBackgroundImageChange = (sectionIndex, url) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].backgroundImage = url;
    setSections(updatedSections);
  };

  const handleRemoveElement = (sectionIndex, elementIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].elements.splice(elementIndex, 1);
    setSections(updatedSections);
  };




  const { html, css, js } = generateHTMLCSSJS(sections.flatMap(section => section.elements));
  // const { html, css, js } = generateHTMLCSSJS();

  const handleCopyCode = () => {
    const code = `HTML:\n${html}\n\nCSS:\n${css}\n\nJS:\n${js}`;
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="w-3/4 h-full bg-white p-4 mt-12 overflow-auto relative" ref={drop} style={{ backgroundColor }}>
      <BackgroundColorControl backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />

      <div className="absolute top-4 right-4 flex space-x-4 z-10">
        {deviceIcons.map(({ type, icon }) => (
          <button
            key={type}
            onClick={() => setDevice(type)}
            className={`p-2 ${device === type ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            <FontAwesomeIcon icon={icon} />
          </button>
        ))}
      </div>


      <div className="preview-container" style={{ ...deviceSizes[device], margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
       
      {sections.map((section, sectionIndex) => (
          <div
            key={section.id}
            className={`border p-4 mb-4 ${selectedSectionId === section.id ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => handleSelectSection(section.id)}
            style={{
              backgroundColor: section.backgroundColor,
              backgroundImage: section.backgroundImage ? `url(${section.backgroundImage})` : 'none',
              height: '300px', // Set a fixed height for each section
              position: 'relative',
            }}
          >
            {section.elements.map((element, elementIndex) => (
              <Rnd
                key={elementIndex}
                size={{ width: 'auto', height: element.fontSize }}
                position={{ x: element.position?.x || 0, y: element.position?.y || 0 }}
                onDragStop={(e, d) => handleDragStop(sectionIndex, elementIndex, e, d)}
                onResizeStop={(e, direction, ref, delta, position) => handleResizeStop(sectionIndex, elementIndex, ref)}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => handleSelectElement(element)}
                  contentEditable={element.type === 'text'}
                  suppressContentEditableWarning={true}
                  onBlur={(e) => handleContentChange(sectionIndex, elementIndex, e.target.textContent)}
                  style={{
                    fontSize: element.type === 'text' ? `${element.fontSize}px` : undefined,
                    color: element.type === 'text' ? element.color : undefined,
                    fontFamily: element.type === 'text' ? element.fontFamily : undefined,
                    fontWeight: element.type === 'text' ? element.fontWeight : undefined,
                    border: '1px dashed #ccc',
                    padding: '4px',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                  }}
                >
                  {element.type === 'text' && React.createElement(element.tag.toLowerCase(), {}, element.content)}
                  {element.type === 'image' && <img src={element.src} alt="Image Element" style={{ width: element.width, height: element.height }} />}
                  {element.type === 'video' && (
                    <video width={element.width} height={element.height} controls>
                      <source src={element.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  
                </div>
              </Rnd>
            ))}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleAddSection()}
                className="bg-green-500 text-white p-2"
              >
                Add Section
              </button>
              {sections.length > 1 && (
                <button
                  onClick={() => handleDeleteSection(section.id)}
                  className="bg-red-500 text-white p-2"
                >
                  Delete Section
                </button>
              )}
            </div>
            <div className="mt-4">
              <input
                type="color"
                value={section.backgroundColor}
                onChange={(e) => handleSectionBackgroundColorChange(sectionIndex, e.target.value)}
                className="mr-2"
              />
              <input
                type="text"
                placeholder="Background Image URL"
                value={section.backgroundImage}
                onChange={(e) => handleSectionBackgroundImageChange(sectionIndex, e.target.value)}
                className="p-1 border"
              />
            </div>
          </div>
        ))}
      </div>

  
    <div className="mt-4">
        <button
          onClick={() => alert(`HTML:\n${html}\n\nCSS:\n${css}\n\nJS:\n${js}`)}
          className="bg-green-500 text-white p-2"
        >
          Show HTML, CSS & JS
        </button>
      </div>

      <div className="mt-4">
        <button
          onClick={handleCopyCode}
          className="bg-green-500 text-white p-2"
        >
          Copy HTML, CSS & JS
        </button>
      </div>
    </div>
  );
};

export default Preview;
