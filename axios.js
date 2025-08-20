import axios from 'axios'

const api = axios.create({
    baseURL: 'https://respirenim.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|DbUney4TeFoRnNr1eOnMp6GGEO63uukj6k8oOxji'


    },
})

export default api;
