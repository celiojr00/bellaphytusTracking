import axios from 'axios'

const api = axios.create({
    baseURL: 'https://titaniumbr.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|Y6VbkUrj9OVCizwUIDk1ic4gbw3FFrd3vhsvuhBf'


    },
})

export default api;
