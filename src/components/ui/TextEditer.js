import React, { useState } from "react";
import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false })
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextEditer({className ,placeholder }) {
  const [editorState, setEditorState] = useState("");
  const onEditorStateChange = (e) => {
    setEditorState(e);
  };
  return (
    <div>
        <div className={`bg-primary-light dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-lg ${className}`}>
      <Editor
        editorState={editorState}
        className="bg-[#fafbfb]"
        placeholder={placeholder}
        toolbarClassName="toolbarClassName !border-0 !rounded-lg !bg-primary-light dark:!bg-blacklight !mb-0"
        wrapperClassName="wrapperClassName "
        editorClassName="editorarea border-t border-black/10 dark:border-white/10 min-h-[130px] bg-white dark:bg-blacklight px-2 rounded-b-lg"      
        onEditorStateChange={(e) => onEditorStateChange(e)}
        toolbar={{
          options: [
            "blockType",
            "inline",
            "fontFamily",
            "textAlign",
            "link",
            "image",
            "embedded",
            "list",
          ],
          inline: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ["bold", "italic", "underline"],
          },
          blockType: {
            inDropdown: true,
            className: "",
            options: [
              "paragraph",
              "paragraph",
              "paragraph",
              "H1",
              "H2",
              "H3",
              "H4",
              "H5",
              "H6",
              "Blockquote",
              "Code",
            ],
            component: undefined,
            dropdownClassName: undefined,
          },
          textAlign: {
            inDropdown: true,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          link: {
            options: ["link"],
          },
        }}
      />
      </div>
    </div>
  );
}

export default TextEditer;
