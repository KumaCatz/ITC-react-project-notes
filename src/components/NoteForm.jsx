import "../css/NoteForm.css"

const NoteForm = (props) => {
    // const []

    return (
    <div>
        <form>
            <fieldset className="fieldset">
                <div className="textarea">
                    <textarea></textarea>
                </div>
                <div className="submit">
                    {/* <input type="submit" value="Add" id="btn" onClick= /> */}
                </div>
            </fieldset>
        </form>
    </div>
    )
}

export default NoteForm;

// import React, { useState } from 'react';

// function DynamicDiv() {
//   const [divElements, setDivElements] = useState([]);

//   function generateDiv() {
//     const newDiv = <div key={divElements.length}>New Div Element</div>;
//     setDivElements([...divElements, newDiv]);
//   }

//   return (
//     <div>
//       <button onClick={generateDiv}>Generate Div</button>
//       {divElements.map((divElement) => divElement)}
//     </div>
//   );
// }

// export default DynamicDiv;
