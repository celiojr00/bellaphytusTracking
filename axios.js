import axios from 'axios'

const api = axios.create({
    baseURL: 'https://macrolub.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 75|C36jiKZRN0aJ5HGEwaHD43BYTlpKLFA9RNJokJaa'


    },
})

export default api;
