import React from 'react';
import { Navbar, Searchbar, FilterableGames } from '../components';
import { Footer } from '../containers';

import './search.css';
const Search = () => (
    <div className="search">
        <Navbar />
        <Searchbar />
        <FilterableGames />
        <Footer />
    </div>


);

export default Search;