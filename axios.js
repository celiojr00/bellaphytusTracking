import axios from 'axios'

const api = axios.create({
    baseURL: 'https://majmobilidade.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 10|5HZeg0luZDDsbbDjJVGGzDqq1xBP20Bi6sRGrad5'


    },
})

export default api;
