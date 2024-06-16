import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const VideoSection = ({ addVideoElement }) => (
  <div>
    <button
      onClick={addVideoElement}
      className="mb-2 w-full bg-blue-500 text-white p-2 flex items-center"
    >
      <FontAwesomeIcon icon={faVideo} className="mr-2" /> Add Video
    </button>
  </div>
);

export default VideoSection;
