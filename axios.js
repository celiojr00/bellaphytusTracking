import axios from 'axios'

const api = axios.create({
    baseURL: 'https://minatel.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 5|34ZQBnI31A8oj1asLwtcAem42G7xZYNUD03dkx2U'


    },
})

export default api;
