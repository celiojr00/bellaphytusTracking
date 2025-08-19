import axios from 'axios'

const api = axios.create({
    baseURL: 'https://grupofesta.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 54|rjbDlp9WctCSDkAYLNNBVQ0Itf3qwUakjqidbjG4'


    },
})

export default api;
