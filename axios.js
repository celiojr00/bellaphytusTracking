import axios from 'axios'

const api = axios.create({
    baseURL: 'https://belfar.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 39|Utiey9x9qiPPlVDA3HLZza63lsnh6ZEWP0El8ZUm'


    },
})

export default api;
