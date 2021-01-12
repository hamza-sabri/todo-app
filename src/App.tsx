import React from 'react';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import CardsContainer from './components/cards/cards-container';

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
