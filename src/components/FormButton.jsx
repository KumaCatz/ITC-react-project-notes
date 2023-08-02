import { useContext } from "react";
import { NotesContext } from "../App";

function FormButton() {
    const {handleClick} = useContext(NotesContext)

    return (
        <div className="submit">
            <input
                type="submit"
                value="Add"
                onClick={ handleClick }
            />
        </div>
    )
}

export default FormButton;