import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://127.0.0.1:8000/',
    //baseURL: 'https://celeirobike.ddns.net/',
    //baseURL: 'https://granlogprd.ddns.net/',
    //baseURL: 'https://grupofesta.ddns.net/',
    baseURL: 'https://grupojpp.ddns.net/',
    //baseURL: 'https://jsalog.ddns.net/',
    //baseURL: 'https://macrolub.ddns.net/',
    //baseURL: 'https://officetotaleconopro.ddns.net/',
    //baseURL: 'https://ogcomercial.ddns.net/',


    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // 'Authorization': `Bearer 6|ONqlo215CHCtZbiSsyicPzhaPCow48ZcuKCVYgZp`
        // 'Authorization': `Bearer ` + localStorage.getItem("token"),
    },
})

export default api;
