import "./RestauranteCard.css";

const RestauranteCard = (props) => {
  return (
    <div className="restaurante-card">
      <section>
        <img src={props.restaurante.imagem} alt="Imagem" />
      </section>
      <section className="body">
        <h1>{props.restaurante.nome}</h1>
        <span className="distancia">{props.restaurante.distancia}km</span>
        <span className="nota">★{props.restaurante.nota}</span>
        <span>{props.restaurante.tempo_medio}-Grátis</span>
      </section>
    </div>
  );
};

export default RestauranteCard;
