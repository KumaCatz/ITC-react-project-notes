import FormTitle from './FormTitle';
import FormContent from './FormContent';
import FormButton from './FormButton';

import "../css/NoteForm.css";

function NoteForm() {

    return (
        <div>
            <h1>Notepad</h1>
            <form>
                <div className="container">
                    <FormTitle />
                    <FormContent />
                    <FormButton />
                </div>
            </form>
        </div>
    )
}

export default NoteForm;