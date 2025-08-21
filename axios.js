import axios from 'axios'

const api = axios.create({
    baseURL: 'https://vitascience.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 100|UEePRO6279oSO6S28YOMxbOLacWFUN5EebI02gPF'


    },
})

export default api;
