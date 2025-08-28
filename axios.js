import axios from 'axios'

const api = axios.create({
    baseURL: 'https://kamell.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 8|qGHGM6jtsRtj8KFH0AeaxB4sOMiXTcwrjsyx8riG'


    },
})

export default api;
