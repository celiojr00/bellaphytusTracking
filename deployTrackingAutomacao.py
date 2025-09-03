import os
import subprocess

# Arquivo JS que será alterado
API_FILE = "./axios.js"

# Lista de clientes
clients = [
#     {
#         "remote": "3mkocosmeticosTracking",
#         "baseURL": "https://3mko.econocargo.net/",
#         "auth": "Bearer 28|eoB5kLDheF91QiO12LnyWq3go2Yy4WBIDdbXoVHK"
#     },
#     {
#         "remote": "airfreshTracking",
#         "baseURL": "https://airfresh.econocargo.net/",
#         "auth": "Bearer 11|WL6tUsnjBFToB7g0fJDHhSeDESRRlLkFYzAx9kRb"
#     },
#     {
#         "remote": "arellTracking",
#         "baseURL": "https://arellimpecom.ddns.net/",
#         "auth": "Bearer 3|qAXrboOs14eUeL6B8WaAAdXvW6nMNGpwj6fXYlY4"
#     },
#     {
#         "remote": "arezesTracking",
#         "baseURL": "https://arezes.econocargo.net",
#         "auth": "Bearer 8|ym38cTbQ0DVL8qZ1rBAV5vpf0BU7Z4lRwfEQ5z0N"
#     },
#     {
#         "remote": "artmentoTracking",
#         "baseURL": "https://artmento.econocargo.net/",
#         "auth": "Bearer 4|pJhMNruWBjcCLvtq81aQBphwUJCUtHzoaO3Of1fr"
#     },
#     {
#         "remote": "asclepharmaTracking",
#         "baseURL": "https://asclepharma.econocargo.net/",
#         "auth": "Bearer 3|Qxjjb010WSqNiPCGknNsHHptJBAHCSi9tKeCHE9M"
#     },
    {
        "remote": "atacadosaopauloTracking",
        "baseURL": "https://atacadosaopaulo.ddns.net/",
        "auth": "Bearer 23|ID00DByqzZOBVVe112ZXr2nJvNewyroYCs3YTJvF"
    },
#     {
#         "remote": "bapautomotivaTracking",
#         "baseURL": "https://bapautomotiva.econocargo.net/",
#         "auth": "Bearer 26|tDeBKJgqBUzBTNOnLpaYeQK2mCg7vpljDlwnMbLg"
#     },
#     {
#         "remote": "bascelTracking",
#         "baseURL": "https://bascel.econocargo.net/",
#         "auth": "Bearer 3|sP5w1VXmsmfV7uwYP5gu3UC0HItQMTFd6b4gO0aA"
#     },
#     {
#         "remote": "belfarTracking",
#         "baseURL": "https://belfar.ddns.net/",
#         "auth": "Bearer 39|Utiey9x9qiPPlVDA3HLZza63lsnh6ZEWP0El8ZUm"
#     },
#     {
#         "remote": "bellaphytusTracking",
#         "baseURL": "https://bellaphytus.ddns.net/",
#         "auth": "Bearer 8|qrxSU7Thh9Op8eWxingK7vyzjLE04kBGXerIOTGx"
#     },
#     {
#         "remote": "bluevixTracking",
#         "baseURL": "https://bluevix01.ddns.net/",
#         "auth": "Bearer 73|mZAIxTcPivg0TgWuyufRuNMlPrecRhOJhXpAU5NE"
#     },
#     {
#         "remote": "brgfoodsTracking",
#         "baseURL": "https://brgfoods.econocargo.net/",
#         "auth": "Bearer 7|iRklwdcS46hhOcd5nYDEKpneN8GCGI6mMh0wSz2P"
#     },
#     {
#         "remote": "cachearTracking",
#         "baseURL": "https://cachear.econocargo.net/",
#         "auth": "Bearer 12|c7fOOIGE0VrIeJWFISMotT4LOvPEZt3EQCzCq3Ru"
#     },
#     {
#         "remote": "celeirobikeTracking",
#         "baseURL": "https://celeirobike.ddns.net/",
#         "auth": "Bearer 62|8g6sZ0rUop6wsiwxWhzBaymJ4J9DkZtfDimtBykt"
#     },
#     {
#         "remote": "cgwbrasilTracking",
#         "baseURL": "https://cgwbrasil.econocargo.net/",
#         "auth": "Bearer 4|uVuSmWpID1jdKbgBAfDtB6V57OIFbIQkAHMsfrWE"
#     },
#     {
#         "remote": "compose-silkTracking",
#         "baseURL": "https://compose.ddns.net/",
#         "auth": "Bearer 12|bTDvmgdkMxSwSXI1qAVhCXGIeNA46wDYwik2JpZc"
#     },
#     {
#         "remote": "creativecopiasTracking",
#         "baseURL": "https://creativecopias.econocargo.net/",
#         "auth": "Bearer 5|F8rw4gt8wVvvcUgO76cRToNfd23kypk96lwcg10G"
#     },
#     {
#         "remote": "docesfardinTracking",
#         "baseURL": "https://docesfardin.ddns.net/",
#         "auth": "Bearer 4|s5zs0qYW6nCkPqnTFNLfuwvPQrQjoqGOgIZK1fvs"
#     },
#     {
#         "remote": "donadeolaTracking",
#         "baseURL": "https://donadeola.econocargo.net/",
#         "auth": "Bearer 5|0758Bapqayu7WbpUmTgYv9qaFWPRODqePSyauRaQ"
#     },
#     {
#         "remote": "ducoprintTracking",
#         "baseURL": "https://ducoprint.econocargo.net/",
#         "auth": "Bearer 4|dmfpe7NfGZPg3nne2kfe8tYPFUl26c3cK63hY2X9"
#     },
#     {
#         "remote": "fisioquanticTracking",
#         "baseURL": "https://fisioquantic.econocargo.net/",
#         "auth": "Bearer 12|EbrbbHrTaL6khtvObXBtD3zRDkVyUJKsFT7k5iDZ"
#     },
#     {
#         "remote": "floranativabrTracking",
#         "baseURL": "https://floranativabr.econocargo.net/",
#         "auth": "Bearer 5|4eRuH36y9rsb88YoT6LbZKBEvu6L6ThqtRhTUlhs"
#     },
#     {
#         "remote": "fortbrasTracking",
#         "baseURL": "https://fortbras.econocargo.net/",
#         "auth": "Bearer 3|17HCsMnuuNK0udd7pJO6OoI3i0wwr2KRgprRiCAX"
#     },
#     {
#         "remote": "globopharmaTracking",
#         "baseURL": "https://globopharma2.ddns.net/",
#         "auth": "Bearer 46|v75aZbw79NhvygdHLK9Qy4kpWEkbPgGnhn4F28XG"
#     },
#     {
#         "remote": "goldenTracking",
#         "baseURL": "https://goldendistri.econocargo.net/",
#         "auth": "Bearer 3|lJ34h7mODJvz9WqHi1z7COonChQ7o7uuRLigoeBd"
#     },
#     {
#         "remote": "granlogTracking",
#         "baseURL": "https://granlogprd.ddns.net/",
#         "auth": "Bearer 127|SOnmdzBkgD7R9a71ixekLqCqR90YS1aGA3vMNX2F"
#     },
#     {
#         "remote": "grupofestaTracking",
#         "baseURL": "https://grupofesta.ddns.net/",
#         "auth": "Bearer 54|rjbDlp9WctCSDkAYLNNBVQ0Itf3qwUakjqidbjG4"
#     },
#     {
#         "remote": "grupofioforteTracking",
#         "baseURL": "https://grupofioforte.econocargo.net/",
#         "auth": "Bearer 3|ta51MtFPeASn3tepihH4d84WBh5eNtkp849YApry"
#     },
#     {
#         "remote": "grupojppTracking",
#         "baseURL": "https://grupojpp.ddns.net/",
#         "auth": "Bearer 128|v9JgUab08hJJ0w6p9cMYg5kLyf2qe8uiw77qUEyg"
#     },
#     {
#         "remote": "jcdistribuidoraTracking",
#         "baseURL": "https://jcdistribuidora.econocargo.net/",
#         "auth": "Bearer 4|6DkvQBhCDmHykF4PiYXknOMDriPbuskXdwD1Lnbr"
#     },
#     {
#         "remote": "kamellTracking",
#         "baseURL": "https://kamell.econocargo.net/",
#         "auth": "Bearer 8|qGHGM6jtsRtj8KFH0AeaxB4sOMiXTcwrjsyx8riG"
#     },
#     {
#         "remote": "konicaTracking",
#         "baseURL": "https://konicaeconopro.ddns.net/",
#         "auth": "Bearer 13|FyTEUEQeWITce7HwTx1QKEh6YxK9Hy6ulgRxffDN"
#     },
#     {
#         "remote": "lelloprintTracking",
#         "baseURL": "https://lelloprint.ddns.net/",
#         "auth": "Bearer 37|nIJALPhiiCorCYweIo6a5u5IydiST83sDdfYdd0r"
#     },
#     {
#         "remote": "lotuscomercialTracking",
#         "baseURL": "https://lotus.econocargo.net/",
#         "auth": "Bearer 4|79ZcTww9eHMdVN5euv4DuOXxpGXVSgJipxPQPox9"
#     },
#     {
#         "remote": "lynvTracking",
#         "baseURL": "https://lynv.econocargo.net/",
#         "auth": "Bearer 4|YfPhBf4HSo6VmHHGYTfbCG05Z0Ts0iozZBZ5CLNJ"
#     },
#     {
#         "remote": "macrolubTracking",
#         "baseURL": "https://macrolub.ddns.net/",
#         "auth": "Bearer 75|C36jiKZRN0aJ5HGEwaHD43BYTlpKLFA9RNJokJaa"
#     },
#     {
#         "remote": "maifredoTracking",
#         "baseURL": "https://maifredo.econocargo.net/",
#         "auth": "Bearer 3|fotdjjb6bdoivmDDVrnEAjOjirqdD6jXyz0oYp8H"
#     },
#     {
#         "remote": "majTracking",
#         "baseURL": "https://majmobilidade.econocargo.net/",
#         "auth": "Bearer 10|5HZeg0luZDDsbbDjJVGGzDqq1xBP20Bi6sRGrad5"
#     },
#     {
#         "remote": "menfirstTracking",
#         "baseURL": "https://menfirst.econocargo.net/",
#         "auth": "Bearer 7|KTsMv4KlgCWG1vm2F7mNsrVLUbR535BMC80CaLi5"
#     },
#     {
#         "remote": "mgeraisTracking",
#         "baseURL": "https://mgerais.econocargo.net/",
#         "auth": "Bearer 3|UNe0mN9gyrhzd94FW5IKroK6VNJ9NqI7LYeGUdvN"
#     },
#     {
#         "remote": "minatelTracking",
#         "baseURL": "https://minatel.econocargo.net/",
#         "auth": "Bearer 5|34ZQBnI31A8oj1asLwtcAem42G7xZYNUD03dkx2U"
#     },
#     {
#         "remote": "nimTracking",
#         "baseURL": "https://respirenim.econocargo.net/",
#         "auth": "Bearer 3|DbUney4TeFoRnNr1eOnMp6GGEO63uukj6k8oOxji"
#     },
#     {
#         "remote": "officetotalTracking",
#         "baseURL": "https://officetotaleconopro.ddns.net/",
#         "auth": "Bearer 37|2QyK4bPGZtByEOvBKMXibNsUKaKeTPQI5WlpQfLw"
#     },
#     {
#         "remote": "ogcomercialTracking",
#         "baseURL": "https://ogcomercial.ddns.net/",
#         "auth": "Bearer 7|ctmFJYjo0926YsRYw7aOGcNNiaYetGdJJBjzMr1i"
#     },
#     {
#         "remote": "oncovitTracking",
#         "baseURL": "https://oncovit01.ddns.net/",
#         "auth": "Bearer 41|wdm5mpXBOiteT7OQ7Ga5upBCGMPy3qIWwGYx0f84"
#     },
#     {
#         "remote": "orvelautomotorTracking",
#         "baseURL": "https://orvelautomotor.ddns.net/",
#         "auth": "Bearer 13|wXdVWyPUMA6cjlOXfJVZrzg3vKLLvwtL6VBOOWsg"
#     },
#     {
#         "remote": "qualiflexTracking",
#         "baseURL": "https://qualiflex02.ddns.net/",
#         "auth": "Bearer 49|wfATErRpX4XkiVU6dj18KzqZAQnPjO50JjgTXnhD"
#     },
#     {
#         "remote": "roveredesignTracking",
#         "baseURL": "https://roveredesign.econocargo.net/",
#         "auth": "Bearer 10|sh7LT2uE7WWKSGOFzaJCm4KTEXXKCtMdf3dCziK7"
#     },
#     {
#         "remote": "saopetTracking",
#         "baseURL": "https://saopet.econocargo.net/",
#         "auth": "Bearer 5|mC25ZBCtU26vSInKU4HOMKO5CZdQkdzYw6l244Kd"
#     },
#     {
#         "remote": "tetrixTracking",
#         "baseURL": "https://tetrix.ddns.net/",
#         "auth": "Bearer 23|8mTuUto8B6edqSAD6I6wic1flQCZXZDvL9BNcHEL"
#     },
#     {
#         "remote": "theramartTracking",
#         "baseURL": "https://theramartbrasil.ddns.net/",
#         "auth": "Bearer 7|NY3vHVnwj1ow5HzCHSnUyhHcp8FeCKBrIEdyJw9w"
#     },
#     {
#         "remote": "vitascienceTracking",
#         "baseURL": "https://vitascience.ddns.net/",
#         "auth": "Bearer 100|UEePRO6279oSO6S28YOMxbOLacWFUN5EebI02gPF"
#     },
    {
        "remote": "titaniumbrTracking",
        "baseURL": "https://titaniumbr.econocargo.net/",
        "auth": "Bearer 3|Y6VbkUrj9OVCizwUIDk1ic4gbw3FFrd3vhsvuhBf"
    },

]


def update_api_file(base_url, auth_token):
    """Atualiza o arquivo api.js com o baseURL e Authorization corretos."""
    with open(API_FILE, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        if "baseURL" in line:
            new_lines.append(f"    baseURL: '{base_url}',\n")
        elif "'Authorization':" in line:
            new_lines.append(f"        'Authorization': '{auth_token}'\n")
        else:
            new_lines.append(line)

    with open(API_FILE, "w", encoding="utf-8") as f:
        f.writelines(new_lines)


def git_push(remote):
    """Faz commit e push para o remote especificado."""
    subprocess.run(["git", "add", "."])
    subprocess.run(["git", "commit", "-m", "update"])
    subprocess.run(["git", "push", remote, "main"])


if __name__ == "__main__":
    print(f"Quantidade clientes para atualizar: {len(clients)}")
    count = 0
    for client in clients:
        print(f"\nAtualizando {client['remote']} - dns: {client['baseURL']} - token: {client['auth']}")
        update_api_file(client["baseURL"], client["auth"])
        git_push(client["remote"])
        print(f"Push realizado para {client['remote']}")
        count += 1
    
    print(f'Quantidade clientes atualizados: {count}')