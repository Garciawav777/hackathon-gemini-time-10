import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

import "./ImovelCard.css";

export default function ImovelCard(props){
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    //Formatando o preço para o formato BRL
    const valorFormatado = formatter.format(props.imovel.price);

    return (
        <Card className="imovelCard">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.imovel.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{props.imovel.address}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">{valorFormatado}
                    </Typography>

                    <div className="linhaPrincia">
                        <Typography component="span">{props.imovel.owner}
                        </Typography>
                        <Typography component="h3">{props.imovel.type}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}