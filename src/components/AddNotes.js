import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 500;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note-new border-none rounded-lg p-4 min-h-170 flex flex-col justify-between whitespace-pre-wrap'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
				className="border-0 resize-none bg-transparent focus:outline-none"
			></textarea>
			<div className='flex align-middle justify-between'>
				<small className="flex items-center">
					{characterLimit - noteText.length} Characters Remaining
				</small>
				<button className='bg-white border-none rounded-2xl px-4 py-2 hover:bg-pink-200' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;