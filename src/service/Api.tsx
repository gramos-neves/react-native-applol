import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/10.22.1/data/pt_BR/'
})


export default api