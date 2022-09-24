import Api from "./api";

export async function getRestaurantes(id) {
  try {
    const restaurantes = await Api.get(`/restaurantes/${id}.json`);
    return restaurantes.data;
  } catch (err) {
    throw err;
  }
}

export async function getAllRestaurantes() {
  try {
    const restaurantes = await Api.get(`/restaurantes/.json`).then((response) => {
      return response.data;
    });
    return restaurantes;
  } catch (err) {
    throw err;
  }
}
