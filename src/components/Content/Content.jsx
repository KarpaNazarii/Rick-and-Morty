import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {CharactersContext} from "../../context/context";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import CharacterPage from "./charecters-page/charactersPage";
import Characters from "./characters/characters";

function  Content (){

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get('https://rickandmortyapi.com/api/character')
        setCharacters(data.results)
    }

    return (
        <div className="content">
            <div className="content__items">
                <CharactersContext.Provider value={characters}>
                    <Router>
                        <Switch>
                            <Route path="/:id">
                                <CharacterPage />
                            </Route>
                            <Route exact path="/">
                                <div className="posts">
                                    <Characters />
                                </div>
                            </Route>
                        </Switch>
                    </Router>
                </CharactersContext.Provider>
            </div>
        </div>
    );
}

export default Content;
