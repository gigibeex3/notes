import React, { useState } from "react";

const Header = ({ handleToggleDarkMode }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleToggle = () => {
		setIsDarkMode((prevMode) => !prevMode);
		handleToggleDarkMode((prevMode) => !prevMode);
	};

	return (
		<div className="flex items-center justify-between pt-10 pb-5">
			<h1 className={`text-5xl notes-header ${isDarkMode ? "text-white" : "text-black"}`}>
				Notes
			</h1>
			<div className="toggle-switch">
				<input
					className="toggle-input"
					id="toggle"
					type="checkbox"
					onClick={handleToggle}
				/>
				<label className="toggle-label" htmlFor="toggle" />
			</div>
		</div>
	);
};

export default Header;
