import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import { useParams } from "react-router-dom";
import "./style.css";
import RestauranteCard from "../../components/RestauranteCard/";
import { useNavigate } from "react-router-dom";

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState();
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRestaurantes(id).then((response) => {
      setNomeCategoria(response.categoria);
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setLoading(false);
    });
  }, []); //Array vazio para carregar somente uma vez

  //Função para clicar e redirecionar ao restaurante específico
  function irParaDetalhe(id){
    console.log('clicou, id: ' + id)
    //navigate(`/restaurantesEspecificos/${id}`)
  }

  return (
    <Container className="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {nomeCategoria}
      </Typography>
      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Baratinho <span>(</span>$ <span>$ $ $ $)</span>
        </Typography>
      </div>

      {restaurantesBaratinho?.map((restaurante) => (
        <RestauranteCard key={restaurante.id} restaurante={restaurante} onClick={() => irParaDetalhe(restaurante.id)}/>
      ))}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No preço <span>(</span>$ $ $ <span>$ $ )</span>
        </Typography>
      </div>
      {restaurantesNoPreco?.map((restaurante) => (
        <RestauranteCard key={restaurante.id} restaurante={restaurante} onClick={() => irParaDetalhe(restaurante.id)}/>
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro, mas vale a pena <span>(</span>$ $ $ $ $ <span> )</span>
        </Typography>
      </div>
      {restaurantesCaro?.map((restaurante) => (
        <RestauranteCard key={restaurante.id} restaurante={restaurante} onClick={() => irParaDetalhe(restaurante.id)}/>
      ))}
    </Container>
  );
}

export default RestaurantesPage;
