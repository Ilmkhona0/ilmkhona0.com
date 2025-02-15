<<<<<<< HEAD
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
=======
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
>>>>>>> b3504840a1af7dd805aa9d8c1cb0e402646f4e47
