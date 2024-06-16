import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const ImageSection = ({ addImageElement }) => (
  <div>
    <button
      onClick={addImageElement}
      className="mb-2 w-full bg-blue-500 text-white p-2 flex items-center"
    >
      <FontAwesomeIcon icon={faImage} className="mr-2" /> Add Image
    </button>
  </div>
);

export default ImageSection;
