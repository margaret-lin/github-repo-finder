import React, { useState } from 'react';
import axios from 'axios';

import SearchResult from '../search-result/search-result.component';

import './search-repositories.styles.css';

const SearchRepositories = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // make api request to get repos data
    const findRepositories = query => {
        (async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const repos = await axios.get(
                    `https://api.github.com/search/repositories?q=${query}`
                );

                setData(repos.data.items);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
            }
        })();
    };

    // delete the repo card
    const deleteCard = id => {
        let newCards = data.filter(i => i.id !== id);
        setData([...newCards]);
    };

    return (
        <div className='search-repository'>
            <p>Search for repositories:</p>
            <input
                type='text'
                placeholder='keywords'
                onChange={e => setInput(e.target.value)}
            />
            <button
                type='button'
                className='search-button'
                onClick={() => findRepositories(input)}
            >
                Go
            </button>

            {isError && <div>Something went wrong ...</div>}

            <div className='search-result'>
                {isLoading ? (
                    <div className='lds-dual-ring'></div>
                ) : (
                    <SearchResult results={data} deleteCard={deleteCard} />
                )}
            </div>
        </div>
    );
};

export default SearchRepositories;
