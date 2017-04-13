import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY= "AIzaSyABpYdq2h5Y5kTCNU--epxVrSR1XSQPryE";

//create a new component

const App = () => {
	return (
		<div>
        	<SearchBar/>
		</div>
	);
};
// Take this component's generated HTML and put it on the page
// (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));