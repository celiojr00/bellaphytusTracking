import axios from 'axios'

const api = axios.create({
    baseURL: 'https://arellimpecom.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|qAXrboOs14eUeL6B8WaAAdXvW6nMNGpwj6fXYlY4'


    },
})

export default api;
