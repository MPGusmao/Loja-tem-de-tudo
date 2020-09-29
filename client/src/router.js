import Vue from 'vue';
import Router from 'vue-router';
import ProdutoForm from './Components/Produto/ProdutoForm.vue'
import Produto from './components/Produto/Produto.vue'


Vue.use(Router);

const router = new Router({
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/produto',
            name: 'ProdutoForm',
            component: ProdutoForm
        },
        {
            path: '/',
            name: 'Produto',
            component: Produto
        }
    ]
});


export default router;
