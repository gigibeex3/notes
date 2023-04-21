import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import LocalStorage from "./components/LocalStorage";

const App = () => {
	const [notes, setNotes] = LocalStorage("react-notes-app-data", [
		{
			id: nanoid(),
			text: `One hundred little bugs in the code
  One hundred little bugs
  Fix a bug, link the fix in
  One hundred little bugs in the code.`,
			date: "04/17/2023",
		},
		{
			id: nanoid(),
			text: "; The Ultimate Hide and Seek Champion",
			date: "04/17/2023",
		},
		{
			id: nanoid(),
			text: 'And he said to me, "Things are not always #000000 and #FFFFFF"',
			date: "04/17/2023",
		},
		{
			id: nanoid(),
			text: `let succeed = false;
  while (!succeed) {
  succeed = try();
  }`,
			date: "04/17/2023",
		},
	]);

	const [searchText, setSearchText] = useState("");

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		// Update the local storage when the notes state changes
		window.localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && "bg-black"}`}>
			<div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
