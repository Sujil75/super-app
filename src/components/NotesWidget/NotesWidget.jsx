import { useStore } from '../../store/useStore'
import './NotesWidget.css'

function NotesWidget() {
    const getNotes = useStore(state => state.notes)
    const setNotes = useStore(state => state.setNotes)

    console.log(getNotes)

    return (
    <section className='notes-widget-section'>
        <h4>All Notes</h4>
        <textarea 
            value={getNotes} 
            onChange={e => setNotes(e.target.value)} 
        />
    </section>
    )
}

export default NotesWidget