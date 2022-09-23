import Api from "./api";

export function getAllCategorias () {
  try {
    const categorias = Api.get(`/categorias.json`);
    return categorias;
  } catch (err) {
    throw err;
  }
};