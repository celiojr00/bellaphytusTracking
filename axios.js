import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sonhodospes.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 6|whabTAZOztx2Bx9KqfwRfL7mbswbZ7VM9liX1y2l'


    },
})

export default api;
