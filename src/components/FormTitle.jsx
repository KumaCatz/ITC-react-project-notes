import { useContext } from "react";
import { NotesContext } from "../App";

function FormTitle () {
    const {title, handleChange} = useContext(NotesContext)

    return (
        <div className="form-input form-title">
            <textarea
                type="text"
                placeholder="My title..."
                value={ title }
                name="title"
                onChange={ handleChange }
                >
            </textarea>
        </div>
    )
}

export default FormTitle;