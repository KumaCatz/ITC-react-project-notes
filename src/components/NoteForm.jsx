import "./NoteForm.css"

const NoteForm = () => (
    <div>
        <form>
            <fieldset class="fieldset">
                <div class="textarea">
                    <textarea></textarea>
                </div>
                <div class="submit">
                    <input type="submit" value="Add" />
                </div>
            </fieldset>
        </form>
    </div>
)

export default NoteForm;