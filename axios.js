import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://127.0.0.1:8000/',
    // baseURL: 'https://bluevix01.ddns.net/',
    // baseURL: 'https://celeirobike.ddns.net/',
    // baseURL: 'https://compose.ddns.net/',
    // baseURL: 'https://globopharma2.ddns.net/',
    // baseURL: 'https://granlogprd.ddns.net/',
    // baseURL: 'https://grupofesta.ddns.net/',
    // baseURL: 'https://grupojpp.ddns.net/',
    // baseURL: 'https://jsalog.ddns.net/',
    //  baseURL: 'https://jsalog01.econocargo.net/',
    // baseURL: 'https://lelloprint.ddns.net/',
    // baseURL: 'https://macrolub.ddns.net/',
    // baseURL: 'https://officetotaleconopro.ddns.net/',
    // baseURL: 'https://ogcomercial.ddns.net/',
    // baseURL: 'https://oncovit01.ddns.net/',
    // baseURL: 'https://vitascience.ddns.net/',
    // baseURL: 'https://tetrix.ddns.net/',
    // baseURL: 'https://theramartbrasil.ddns.net/',
    // baseURL: 'https://qualiflex02.ddns.net/',
    // baseURL: 'https://docesfardin.ddns.net/',
    // baseURL: 'https://bellaphytus.ddns.net/',
    // baseURL: 'https://orvelautomotor.ddns.net/',
    // baseURL: 'https://konicaeconopro.ddns.net/',
    // baseURL: 'https://creativecopias.econocargo.net/',
    // baseURL: 'https://menfirst.econocargo.net/',
    // baseURL: 'https://bapautomotiva.econocargo.net/',
    // baseURL: 'https://fisioquantic.econocargo.net/',
    // baseURL: 'https://belfar.ddns.net/',
    // baseURL: 'https://arellimpecom.ddns.net/',
    // baseURL: 'https://asclepharma.econocargo.net/',
    // baseURL: 'https://cgwbrasil.econocargo.net/',
    // baseURL: 'https://kamell.econocargo.net/',
    baseURL: 'https://goldendistri.econocargo.net/',
    // baseURL: 'https://atacadosaopaulo.ddns.net/',
    // baseURL: 'https://majmobilidade.econocargo.net/',
    // baseURL: 'https://ducoprint.econocargo.net/',
    // baseURL: 'https://minatel.econocargo.net/',
    // baseURL: 'https://airfresh.econocargo.net/',
    // baseURL: 'https://respirenim.econocargo.net/',
    // baseURL: 'https://maifredo.econocargo.net/',
    // baseURL: 'https://artmento.econocargo.net/',
    // baseURL: 'https://mgerais.econocargo.net/',
    // baseURL: 'https://brgfoods.econocargo.net/',
    // baseURL: 'https://saopet.econocargo.net/',
    // baseURL: 'https://cachear.econocargo.net/',
    // baseURL: 'https://donadeola.econocargo.net/',
    // baseURL: 'https://roveredesign.econocargo.net/',
    // baseURL: 'https://3mko.econocargo.net/',
    // baseURL: 'https://floranativabr.econocargo.net',
    // baseURL: 'https://arezes.econocargo.net',
    // baseURL: 'https://grupofioforte.econocargo.net',
    // baseURL: 'https://jcdistribuidora.econocargo.net',
    // baseURL: 'https://lotus.econocargo.net',
    // baseURL: 'https://bascel.econocargo.net/',
    // baseURL: 'https://lynv.econocargo.net/',



    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // 'Authorization': `Bearer 6|ONqlo215CHCtZbiSsyicPzhaPCow48ZcuKCVYgZp`
        // 'Authorization': `Bearer ` + localStorage.getItem("token"),

        // 'Authorization': `Bearer 41|wdm5mpXBOiteT7OQ7Ga5upBCGMPy3qIWwGYx0f84` // oncovit
        // 'Authorization': `Bearer 12|bTDvmgdkMxSwSXI1qAVhCXGIeNA46wDYwik2JpZc` // compose
        // 'Authorization': `Bearer 73|mZAIxTcPivg0TgWuyufRuNMlPrecRhOJhXpAU5NE` // bluevix
        // 'Authorization': `Bearer 62|8g6sZ0rUop6wsiwxWhzBaymJ4J9DkZtfDimtBykt` // celeirobike
        // 'Authorization': `Bearer 46|v75aZbw79NhvygdHLK9Qy4kpWEkbPgGnhn4F28XG` // globopharma
        // 'Authorization': `Bearer 127|SOnmdzBkgD7R9a71ixekLqCqR90YS1aGA3vMNX2F`// granlog
        // 'Authorization': `Bearer 54|rjbDlp9WctCSDkAYLNNBVQ0Itf3qwUakjqidbjG4` // grupofesta
        // 'Authorization': `Bearer 128|v9JgUab08hJJ0w6p9cMYg5kLyf2qe8uiw77qUEyg`// grupojpp
        // 'Authorization': `Bearer 52|UXT7tt0WC7etnjpIDpQnLY1e4IP7xwiKZSjh2Zch` // jsalog
        // 'Authorization': `Bearer 3|ljvwaDfOJKyduyUDORwcbhdrPrjh6GIDva7nYqhg` // jsalog01
        // 'Authorization': `Bearer 37|nIJALPhiiCorCYweIo6a5u5IydiST83sDdfYdd0r` // lelloprint
        // 'Authorization': `Bearer 75|C36jiKZRN0aJ5HGEwaHD43BYTlpKLFA9RNJokJaa` // macrolub
        // 'Authorization': `Bearer 37|2QyK4bPGZtByEOvBKMXibNsUKaKeTPQI5WlpQfLw` // officetotal
        // 'Authorization': `Bearer 7|ctmFJYjo0926YsRYw7aOGcNNiaYetGdJJBjzMr1i`  // ogcomercial
        // 'Authorization': `Bearer 100|UEePRO6279oSO6S28YOMxbOLacWFUN5EebI02gPF`// vitascience
        // 'Authorization': `Bearer 23|8mTuUto8B6edqSAD6I6wic1flQCZXZDvL9BNcHEL` // tetrix
        // 'Authorization': `Bearer 7|NY3vHVnwj1ow5HzCHSnUyhHcp8FeCKBrIEdyJw9w`  // theramartbrasil
        // 'Authorization': `Bearer 49|wfATErRpX4XkiVU6dj18KzqZAQnPjO50JjgTXnhD` // qualiflex02
        // 'Authorization': `Bearer 4|s5zs0qYW6nCkPqnTFNLfuwvPQrQjoqGOgIZK1fvs`  // docesfardin
        // 'Authorization': `Bearer 8|qrxSU7Thh9Op8eWxingK7vyzjLE04kBGXerIOTGx`  // bellaphytus
        // 'Authorization': `Bearer 13|wXdVWyPUMA6cjlOXfJVZrzg3vKLLvwtL6VBOOWsg` // orvelautomotor
        // 'Authorization': `Bearer 13|FyTEUEQeWITce7HwTx1QKEh6YxK9Hy6ulgRxffDN` // konica
        // 'Authorization': `Bearer 5|F8rw4gt8wVvvcUgO76cRToNfd23kypk96lwcg10G`  // creative
        // 'Authorization': `Bearer 7|KTsMv4KlgCWG1vm2F7mNsrVLUbR535BMC80CaLi5`  // menfirst
        // 'Authorization': `Bearer 26|tDeBKJgqBUzBTNOnLpaYeQK2mCg7vpljDlwnMbLg` // barros pneus (bapautomotiva)
        // 'Authorization': `Bearer 12|EbrbbHrTaL6khtvObXBtD3zRDkVyUJKsFT7k5iDZ` // fisioquantic
        // 'Authorization': `Bearer 39|Utiey9x9qiPPlVDA3HLZza63lsnh6ZEWP0El8ZUm` // belfar
        // 'Authorization': `Bearer 3|qAXrboOs14eUeL6B8WaAAdXvW6nMNGpwj6fXYlY4`  // arell
        // 'Authorization': `Bearer 3|Qxjjb010WSqNiPCGknNsHHptJBAHCSi9tKeCHE9M`  // asclepharma
        // 'Authorization': `Bearer 4|uVuSmWpID1jdKbgBAfDtB6V57OIFbIQkAHMsfrWE`  // cgwbrasil
        // 'Authorization': `Bearer 8|qGHGM6jtsRtj8KFH0AeaxB4sOMiXTcwrjsyx8riG`  // kamell
        'Authorization': `Bearer 3|lJ34h7mODJvz9WqHi1z7COonChQ7o7uuRLigoeBd`  // golden
        // 'Authorization': `Bearer 23|ID00DByqzZOBVVe112ZXr2nJvNewyroYCs3YTJvF` // atacadosaopaulo
        // 'Authorization': `Bearer 10|5HZeg0luZDDsbbDjJVGGzDqq1xBP20Bi6sRGrad5` // maj
        // 'Authorization': `Bearer 4|dmfpe7NfGZPg3nne2kfe8tYPFUl26c3cK63hY2X9`  // ducoprint
        // 'Authorization': `Bearer 5|34ZQBnI31A8oj1asLwtcAem42G7xZYNUD03dkx2U`  // minatel
        // 'Authorization': `Bearer 11|WL6tUsnjBFToB7g0fJDHhSeDESRRlLkFYzAx9kRb` // airfresh
        // 'Authorization': `Bearer 3|DbUney4TeFoRnNr1eOnMp6GGEO63uukj6k8oOxji`  // nim
        // 'Authorization': `Bearer 3|fotdjjb6bdoivmDDVrnEAjOjirqdD6jXyz0oYp8H`  // maifredo
        // 'Authorization': `Bearer 4|pJhMNruWBjcCLvtq81aQBphwUJCUtHzoaO3Of1fr`  // artmento
        // 'Authorization': `Bearer 3|UNe0mN9gyrhzd94FW5IKroK6VNJ9NqI7LYeGUdvN`  // mgerais
        // 'Authorization': `Bearer 7|iRklwdcS46hhOcd5nYDEKpneN8GCGI6mMh0wSz2P`  // brgfoods
        // 'Authorization': `Bearer 5|mC25ZBCtU26vSInKU4HOMKO5CZdQkdzYw6l244Kd`  // saopet
        // 'Authorization': `Bearer 12|c7fOOIGE0VrIeJWFISMotT4LOvPEZt3EQCzCq3Ru` // cachear
        // 'Authorization': `Bearer 5|0758Bapqayu7WbpUmTgYv9qaFWPRODqePSyauRaQ`  // donadeola
        // 'Authorization': `Bearer 10|sh7LT2uE7WWKSGOFzaJCm4KTEXXKCtMdf3dCziK7` // rovere
        // 'Authorization': `Bearer 28|eoB5kLDheF91QiO12LnyWq3go2Yy4WBIDdbXoVHK` // 3mkocosmeticos
        // 'Authorization': `Bearer 5|4eRuH36y9rsb88YoT6LbZKBEvu6L6ThqtRhTUlhs`  // floranativabr
        // 'Authorization': `Bearer 8|ym38cTbQ0DVL8qZ1rBAV5vpf0BU7Z4lRwfEQ5z0N`  // arezes
        // 'Authorization': `Bearer 3|ta51MtFPeASn3tepihH4d84WBh5eNtkp849YApry`  // grupofioforte
        // 'Authorization': `Bearer 4|6DkvQBhCDmHykF4PiYXknOMDriPbuskXdwD1Lnbr`  // jcdistribuidora
        // 'Authorization': `Bearer 4|79ZcTww9eHMdVN5euv4DuOXxpGXVSgJipxPQPox9` // lotuscomercial
        // 'Authorization': `Bearer 3|sP5w1VXmsmfV7uwYP5gu3UC0HItQMTFd6b4gO0aA` // bascel
        // 'Authorization': `Bearer 4|YfPhBf4HSo6VmHHGYTfbCG05Z0Ts0iozZBZ5CLNJ` // lynv

    },
})

export default api;
