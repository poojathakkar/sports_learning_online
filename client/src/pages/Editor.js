import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




function Editor() {
  const styles = {
    background: "#f3f1f2"
  
};
  const [value, setValue] = useState('');

  
  return (
    <div className="app">

  
    <div className="editor" 
    style={styles} >

      <ReactQuill 
          theme="snow"
          onChange={setValue}
          value={value}
          modules={Editor.modules}
          formats={Editor.formats}
       //   bounds={'.app'}
          placeholder="Write something"
      />
      {/* <button onClick={save}>Save content</button> */}

     
    </div>
      </div>
  )
}


Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */
// Editor.propTypes = {
//   placeholder: PropTypes.string,
// }


export default Editor


