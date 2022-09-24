import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import { getRestaurantes } from "../../services/restaurantes.service";

import ImovelCard from "../../components/ImovelCard"
import "./RestaurantesSinglePage.css"

function ImovelSinglePage(){

    //Recuperando o ID, para fazer a busca
    const { id } = useParams();

    const [imovel, setImovel] = useState(null);

    //Esse useEffect carrega com valor nullo, quando o ID for definido, ele executa esse método que seta o valor do imóvel
    useEffect(() => {
        getRestaurantes(id).then((data) => {
            setImovel(data);
        })
    }, [id]);

    if(!imovel){
        return <div>Carregando... </div>;
    }else{
        return (
            <div className="imovel">
                <ImovelCard imovel={imovel} />
                <div className="link">
                    <Link to='/imoveis'>Voltar</Link>
                </div>
            </div>
        );
    }
}

export default ImovelSinglePage;