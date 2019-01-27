import React, { Component } from 'react';
import axios from '../../axios';

import './NavigationPanel.css';

import Movie from '../../components/Movie/Movie';
import SearchField from 'C:/Users/Админ/test-app-react/tv-app/node_modules/react-search-field';


class NavigationPanel extends Component {
    state = {
        valueFieldSearch: null,
        resultSearch: []
    }


    SearchMovieHandler = (searchText) => {
        axios.get('/search/shows?q=' + searchText)
        .then( response => {
          
            const resultSearchMovies = response.data.map(resultSearch => {
                return {
                    ...resultSearch.show
                }
            });
            this.setState({resultSearch: resultSearchMovies});
        } )
        .catch(error => {
            {console.log(error)}
        });
    }

    render () {
        let resultSearchElement = null;

        resultSearchElement = this.state.resultSearch.map(resultSearch => {
            console.log(resultSearch)
            return <Movie 
                key={resultSearch.id}   
                name={resultSearch.name} 
                summary={resultSearch.summary}
                image={resultSearch.image} />;
        });
    
        
 
        
        return (
            <div>
                <div className="NavigationPanel">
                <nav className="navbar navbar-dark bg-inverse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">
                                Главная
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                Расписание
                            </a>
                        </li>
                    </ul>  
                </nav>
            
                <SearchField 
                        placeholder="Search..."
                        onSearchClick={(searchText) => this.SearchMovieHandler(searchText)}
                        onEnter={(searchText) => this.SearchMovieHandler(searchText)}
                        searchText={this.state.valueFieldSearch}
                        classNames="test-class"
                    />
                </div>
            
                <section className="MoviePosts">
                    {resultSearchElement}
                </section>
                
            </div>
        );
    }
}

export default NavigationPanel;