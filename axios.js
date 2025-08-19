import axios from 'axios'

const api = axios.create({
    baseURL: 'https://oncovit01.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 41|wdm5mpXBOiteT7OQ7Ga5upBCGMPy3qIWwGYx0f84'


    },
})

export default api;
