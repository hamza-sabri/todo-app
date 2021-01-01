import React from 'react';
import NavBar from './components/nav-bar.js';
import SideBar from './components/side-bar.js';
import CardsContainer from './components/cards-container.js';

function App() {
	return (
		<div className="main-container">
			<NavBar />
			<SideBar />
			<CardsContainer />
		</div>
	);
}

export default App;
