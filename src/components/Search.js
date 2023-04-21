import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='flex items-center bg-white rounded-md p-1.5 mb-6'>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder=' Type to search...'
				className="border-none bg-white w-full focus:outline-none"
			/>
			<MdSearch className="text-2xl" />
		</div>
	);
};

export default Search;