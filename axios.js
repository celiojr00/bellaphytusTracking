import axios from 'axios'

const api = axios.create({
    baseURL: 'https://saopet.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 5|mC25ZBCtU26vSInKU4HOMKO5CZdQkdzYw6l244Kd'


    },
})

export default api;
