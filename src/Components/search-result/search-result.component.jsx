import React from 'react';

import './search-result.styles.css';

const SearchResult = ({ results, deleteCard }) => {
    return (
        <ul>
            {results.map(item => (
                <li key={item.id}>
                    <img
                        className='avatar-pic'
                        src={item.owner.avatar_url}
                        alt='avator'
                    />

                    <div className='search-info'>
                        <p>Owner: {item.owner.login}</p>
                        <span>
                            Repository Name:{' '}
                            <a href='{item.html_url}'>{item.name}</a>
                        </span>
                        <p>Fork Count: {item.forks_count}</p>
                        <p>Watchers: {item.watchers}</p>
                        <p>Stargazers: {item.stargazers_count}</p>
                        <button
                            type='button'
                            onClick={() => deleteCard(item.id)}
                        >
                            Delete this card
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SearchResult;
