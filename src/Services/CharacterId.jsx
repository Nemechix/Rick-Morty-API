import api from "./config";

async function getCharacterById(id) {
  const character = await api.get(`character/${id}`);
  return character;
}

export default getCharacterById;
