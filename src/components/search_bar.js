import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props){
      super(props);

      this.state = { term: ''};
    }

    render(){
    	//every time you call setState function, then it will re-render the dom
    	return (
    	<div className="search-bar">
    		<input id="term"
    			value= {this.state.term}
    			onChange={ event=>this.onInputChanged(event.target.value) }
    		/>
    	</div>
    	);
    }

    onInputChanged(term){
		this.setState( {term});		
		this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
