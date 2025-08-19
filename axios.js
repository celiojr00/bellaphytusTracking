import axios from 'axios'

const api = axios.create({
    baseURL: 'https://compose.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 12|bTDvmgdkMxSwSXI1qAVhCXGIeNA46wDYwik2JpZc'


    },
})

export default api;
