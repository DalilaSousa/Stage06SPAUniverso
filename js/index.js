import { Router } from './router.js'

const router = new Router()
router.add('/', "index.html")
router.add("/universo", "universo.html")
router.add("/exploracao", "exploracao.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

document.getElementById('btnQueroSaberMais').addEventListener('click', function() {
    // Navegar para a página "universo.html"
    window.location.href = '/universo.html';
});