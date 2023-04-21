import { HiTrash } from 'react-icons/hi2';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note border-none rounded-lg p-4 h-200 flex flex-col justify-between whitespace-pre-wrap'>
			<span>{text}</span>
			<div className='flex items-center justify-between mt-2'>
				<small className="text-gray-500">{date}</small>
				<HiTrash
					onClick={() => handleDeleteNote(id)}
					className='hover:text-red-600 cursor-pointer'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;