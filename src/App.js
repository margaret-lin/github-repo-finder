import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import SearchRepositories from './Components/search-repositories/search-repositories.component';

import './App.css';

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.github.com/graphql',
        headers: {
            Authorization: `token ${TOKEN}`
        }
    }),
    cache: new InMemoryCache()
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className='App'>
                    <header className='App-header'>
                        <h1 className='App-title'>Github Repository Finder</h1>
                    </header>
                    <SearchRepositories />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
