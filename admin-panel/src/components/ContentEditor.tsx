import { Editor } from '@tinymce/tinymce-react';

const ContentEditor = () => {
  const handleEditorChange = (content) => {
    console.log('Content:', content);
  };

  return (
    <Editor
      initialValue="<p>Start editing...</p>"
      init={{ height: 500 }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default ContentEditor;
