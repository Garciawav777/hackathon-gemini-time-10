import Api from "./api";

export const getAllBanners = async () => {
  try {
    const response = await Api.get(`/banners.json`);
    return response;
  } catch (err) {
    throw err;
  }
};
