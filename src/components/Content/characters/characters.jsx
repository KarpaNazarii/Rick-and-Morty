import React, {useState, useContext, useEffect} from "react";
import {CharactersContext} from "../../../context/context";
import {Link} from "react-router-dom";
import SearchImg from "../../../img/seach.png";
import Intro from "../../Intro/Intro";

function Characters() {
    const [value, setValue] = useState('');
    const items = useContext(CharactersContext);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    // Load the saved input value and filtered characters from local storage
    useEffect(() => {
        const savedValue = localStorage.getItem('searchValue');
        const savedCharacters = JSON.parse(localStorage.getItem('filteredCharacters'));
        if (savedValue) {
            setValue(savedValue);
        }
        if (savedCharacters) {
            setFilteredCharacters(savedCharacters);
        }
    }, []);

    // Save the input value and filtered characters to local storage when they change
    useEffect(() => {
        localStorage.setItem('searchValue', value);
        localStorage.setItem('filteredCharacters', JSON.stringify(filteredCharacters));
    }, [value, filteredCharacters]);

    // Update the filtered characters when the input value changes
    useEffect(() => {
        const newFilteredCharacters = items
            .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));
        setFilteredCharacters(newFilteredCharacters);
    }, [value, items]);

    return (
        <div className="list">
            {/*Intro*/}
            <Intro/>
            {/*Intro*/}

            {/*Input*/}
            <div className="list-input">
                <button className="list-input__btn">
                    <img className='list-input__image' src={SearchImg} alt="Search"/>
                </button>
                <input className="list-input__txt" placeholder="Filter by name..."
                       onChange={(event) => setValue(event.target.value)} type="text" value={value}/>
            </div>
            {/*Input*/}

            {/*Items*/}
            <div className="list-items">
                {filteredCharacters.map(item => (
                    <div className="list-item" key={item.id}>
                        <Link to={":" + item.id}>
                            <img className="list-item__img" src={item.image} alt={item.name}/>
                            <p className="list-item__name">{item.name}</p>
                            <p className="list-item__species">{item.species}</p>
                        </Link>
                    </div>
                ))}
            </div>
            {/*Items*/}
        </div>
    );
}

export default Characters;
