import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/pt-br/production/pt-br/page-data/champions/'
})


export default api