import axios from 'axios'

const api = axios.create({
    baseURL: 'https://roveredesign.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 10|sh7LT2uE7WWKSGOFzaJCm4KTEXXKCtMdf3dCziK7'


    },
})

export default api;
