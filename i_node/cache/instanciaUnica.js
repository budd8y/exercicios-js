// node faz cache
// mantém isto como singleton = única instaância
module.exports = {
    valor: 1,
    inc () {
        this.valor++
    }
}