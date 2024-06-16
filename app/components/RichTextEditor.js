
"use client"
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill theme="snow" value={value} onChange={onChange} />
  );
};

export default RichTextEditor;
