import React from 'react';
import NavBar from './components/bars/nav-bar';
import SideBar from './components/bars/side-bar';
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
