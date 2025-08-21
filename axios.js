import axios from 'axios'

const api = axios.create({
    baseURL: 'https://celeirobike.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 62|8g6sZ0rUop6wsiwxWhzBaymJ4J9DkZtfDimtBykt'


    },
})

export default api;
