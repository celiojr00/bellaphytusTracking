import axios from 'axios'

const api = axios.create({
    baseURL: 'https://qualiflex02.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 49|wfATErRpX4XkiVU6dj18KzqZAQnPjO50JjgTXnhD'


    },
})

export default api;
