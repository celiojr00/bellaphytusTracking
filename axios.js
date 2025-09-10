import axios from 'axios'

const api = axios.create({
    baseURL: 'https://3mko.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 28|eoB5kLDheF91QiO12LnyWq3go2Yy4WBIDdbXoVHK'


    },
})

export default api;
