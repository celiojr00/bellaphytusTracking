import axios from 'axios'

const api = axios.create({
    baseURL: 'https://globopharma2.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 46|v75aZbw79NhvygdHLK9Qy4kpWEkbPgGnhn4F28XG'


    },
})

export default api;
