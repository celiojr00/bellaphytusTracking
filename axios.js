import axios from 'axios'

const api = axios.create({
    baseURL: 'https://artmento.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': '4|pJhMNruWBjcCLvtq81aQBphwUJCUtHzoaO3Of1fr'


    },
})

export default api;
