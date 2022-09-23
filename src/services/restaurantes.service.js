import Api from "./api";

export async function getRestaurantes(id) {
  try {
    const restaurantes = await Api.get(`/restaurantes/${id}.json`);
    return restaurantes.data;
  } catch (err) {
    throw err;
  }
};
