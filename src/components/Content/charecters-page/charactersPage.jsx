import {useContext} from "react";
import {CharactersContext} from "../../../context/context";
import {Link, useParams} from "react-router-dom"
import ArrowBack from "../../../img/arrow_back.png"


function CharacterPage() {
    const {id} = useParams()
    const item = useContext(CharactersContext).find(e => ":" + e.id === id)

    let type = "";

    if (item?.type == "") {
        type = "Unknown";
    } else {
        type = item.type
    }

    return (
        <div className="character-page">
            <div className="character-page__back-btn">
                <Link to="/">
                    <p className="character-page__back-btn-content">
                        <img src={ArrowBack} alt="Back Arrow"/>
                        <span>go back</span>
                    </p>
                </Link>
            </div>
            <div className="character-page__info">
                <img className="character-page__info-img" alt="Avatar" src={item.image}/>
                <p className="character-page__info-title">{item.name}</p>
                <div className="character-page__description">
                    <p className="character-page__description-title">Informations</p>
                    <div className="type-box">
                        <p className="description-title">Gender:</p>
                        <p className="description-item">{item?.gender}</p>
                        <hr/>
                    </div>
                    <div className="type-box">
                        <p className="description-title">Status:</p>
                        <p className="description-item">{item?.status}</p>
                        <hr/>
                    </div>
                    <div className="type-box">
                        <p className="description-title">Specie:</p>
                        <p className="description-item">{item?.species}</p>
                        <hr/>
                    </div>
                    <div className="type-box">
                        <p className="description-title">Origin:</p>
                        <p className="description-item">{item?.origin.name}</p>
                        <hr/>
                    </div>
                    <div className="type-box">
                        <p className="description-title">Type:</p>
                        <p className="description-item">{type}</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterPage;