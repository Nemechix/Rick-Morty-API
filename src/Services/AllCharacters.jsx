import api from './config'

async function getAllCharacters(){
    const characters = await api.get("/character");
    return characters
}

export default getAllCharacters