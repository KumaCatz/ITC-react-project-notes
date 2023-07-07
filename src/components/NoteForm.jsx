import "../css/NoteForm.css"

const NoteForm = (props) => (
    <div>
        <form>
            <fieldset className="fieldset">
                <div className="textarea">
                    <textarea></textarea>
                </div>
                <div className="submit">
                    <input type="submit" value="Add" />
                </div>
            </fieldset>
        </form>
    </div>
)

export default NoteForm;