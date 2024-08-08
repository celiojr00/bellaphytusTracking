import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://127.0.0.1:8000/',
    //baseURL: 'https://bluevix01.ddns.net/',
    //baseURL: 'https://celeirobike.ddns.net/',
    //baseURL: 'https://globopharma2.ddns.net/',
    //baseURL: 'https://granlogprd.ddns.net/',
    //baseURL: 'https://grupofesta.ddns.net/',
    //baseURL: 'https://grupojpp.ddns.net/',
    //baseURL: 'https://jsalog.ddns.net/',
    //baseURL: 'https://lelloprint.ddns.net/',
    //baseURL: 'https://macrolub.ddns.net/',
    //baseURL: 'https://officetotaleconopro.ddns.net/',
    //baseURL: 'https://ogcomercial.ddns.net/',
    //baseURL: 'https://oncovit01.ddns.net/',
    //baseURL: 'https://vitascience.ddns.net/',
    //baseURL: 'https://tetrix.ddns.net/',
    baseURL: 'https://theramartbrasil.ddns.net/',
    //baseURL: 'https://qualiflex02.ddns.net/',
    //baseURL: 'https://docesfardin.ddns.net/',
    //baseURL: 'https://bellaphytus.ddns.net/',



    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // 'Authorization': `Bearer 6|ONqlo215CHCtZbiSsyicPzhaPCow48ZcuKCVYgZp`
        // 'Authorization': `Bearer ` + localStorage.getItem("token"),

        //'Authorization': `Bearer 41|wdm5mpXBOiteT7OQ7Ga5upBCGMPy3qIWwGYx0f84`  //oncovit
        //'Authorization': `Bearer 73|mZAIxTcPivg0TgWuyufRuNMlPrecRhOJhXpAU5NE`  // bluevix
        //'Authorization': `Bearer 62|8g6sZ0rUop6wsiwxWhzBaymJ4J9DkZtfDimtBykt`  // celeirobike
        //'Authorization': `Bearer 46|v75aZbw79NhvygdHLK9Qy4kpWEkbPgGnhn4F28XG`  // globopharma
        //'Authorization': `Bearer 127|SOnmdzBkgD7R9a71ixekLqCqR90YS1aGA3vMNX2F` // granlog
        //'Authorization': `Bearer 54|rjbDlp9WctCSDkAYLNNBVQ0Itf3qwUakjqidbjG4`  // grupofesta
        //'Authorization': `Bearer 128|v9JgUab08hJJ0w6p9cMYg5kLyf2qe8uiw77qUEyg` // grupojpp
        // 'Authorization': `Bearer 52|UXT7tt0WC7etnjpIDpQnLY1e4IP7xwiKZSjh2Zch` // jsalog
        //'Authorization': `Bearer 37|nIJALPhiiCorCYweIo6a5u5IydiST83sDdfYdd0r`  // lelloprint
        //'Authorization': `Bearer 75|C36jiKZRN0aJ5HGEwaHD43BYTlpKLFA9RNJokJaa`  // macrolub
        //'Authorization': `Bearer 37|2QyK4bPGZtByEOvBKMXibNsUKaKeTPQI5WlpQfLw`  // officetotal
        //'Authorization': `Bearer 7|ctmFJYjo0926YsRYw7aOGcNNiaYetGdJJBjzMr1i`   // ogcomercial
        //'Authorization': `Bearer 100|UEePRO6279oSO6S28YOMxbOLacWFUN5EebI02gPF` // vitascience
        'Authorization': `Bearer 7|NY3vHVnwj1ow5HzCHSnUyhHcp8FeCKBrIEdyJw9w`     // theramartbrasil
        //'Authorization': `Bearer 49|wfATErRpX4XkiVU6dj18KzqZAQnPjO50JjgTXnhD`    // qualiflex02
        //'Authorization': `Bearer 4|s5zs0qYW6nCkPqnTFNLfuwvPQrQjoqGOgIZK1fvs`     // docesfardin
        //'Authorization': `Bearer 8|qrxSU7Thh9Op8eWxingK7vyzjLE04kBGXerIOTGx`     // bellaphytus
        //'Authorization': `Bearer 23|8mTuUto8B6edqSAD6I6wic1flQCZXZDvL9BNcHEL`    // tetrix

    },
})

export default api;
