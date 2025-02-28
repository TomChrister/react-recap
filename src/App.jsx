import { useNotes } from '../stores/store.js';

function App() {
    const {notes, addNote, removeNote, removeAllNotes, reset, addRandomNumber} = useNotes();

    return (
        <>
            <h1 className='text-3xl pb-2'>Homepage</h1>
            <form action='' onSubmit={(e) => {
                e.preventDefault();
                addNote(e.target.note.value);
            }}>
                <input className='border rounded-sm mr-2' type='text' id='note' name='note'/>
                <button className='bg-blue-500 text-white p-1 rounded-md cursor-pointer' type='submit'>
                    Add note
                </button>
            </form>
            {notes.map((note) => (
                <div key={note} className='flex py-1 gap-2'>
                    <p>{note}</p>
                    <button
                        className='bg-red-500 text-white p-1 rounded-sm cursor-pointer'
                        onClick={() => removeNote(note)}>
                        Delete
                    </button>
                </div>
            ))}
            <button
                className='bg-red-500 text-white p-1 rounded-sm cursor-pointer mr-2'
                onClick={() => removeAllNotes(notes)}>
                Delete all my notes
            </button>
            <button
                className='bg-green-500 text-white p-1 rounded-sm cursor-pointer mr-2'
                onClick={() => reset(notes)}>
                Reset notes
            </button>
            <button
                className='bg-yellow-500 text-white p-1 rounded-sm cursor-pointer'
                onClick={() => addRandomNumber(notes.length + 1)}>
                Random number
            </button>
        </>
    );
}

export default App
