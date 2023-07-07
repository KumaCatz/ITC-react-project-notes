import React, { useState } from 'react';

function GenerateNote() {
    const[textInput, setTextInput] = useState('');

    function handleInputChange(event) {
        setTextInput(event.target.value)
    }

    return (
        <div>
            <input
                type="text"
                value={ textInput }
                onChange={ handleInputChange }
            />
            <p>Input Value: {textInput}</p>
        </div>
    )
}

const NoteView = (props) => {

    // function that pops out a note fancy



    return (
        <div>
            {/* {props.map( note => <div>{ note }</div>))} */}
        </div>
    )
}

export default GenerateNote;

// import React, { useState } from 'react';

// function TextAreaInput() {
//   const [textareaInput, setTextareaInput] = useState('');

//   function handleTextareaChange(event) {
//     setTextareaInput(event.target.value);
//   }

//   return (
//     <div>
//       <textarea
//         value={textareaInput}
//         onChange={handleTextareaChange}
//       />
//       <p>Textarea Value: {textareaInput}</p>
//     </div>
//   );
// }

// export default TextAreaInput;
