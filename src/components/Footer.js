import React from "react";
import logo from "../logo.svg";

export const Footer = () => {
	return (
		<footer className="text-center py-3 bg-dark text-white">
			<img
				src={logo}
				alt="Logo"
				width="100"
				height="75"
				className="d-inline-block align-top mb-3"
			/>
			<p>&copy; {new Date().getFullYear()} Athena King | All Rights Reserved</p>
			<div>
				<a
					href="https://www.linkedin.com/in/athena-king-929a291a5"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
						alt="LinkedIn"
						width="24"
						height="24"
						className="mx-2"
					/>
				</a>
				<a
					href="https://github.com/Azrael-Savage"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
						alt="GitHub"
						width="24"
						height="24"
						className="mx-2"
					/>
				</a>
				<a
					href="https://discord.gg/N8Z8NfTd"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Discord"
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
						alt="Discord"
						width="24"
						height="24"
						className="mx-2"
					/>
				</a>
			</div>
		</footer>
	);
};
