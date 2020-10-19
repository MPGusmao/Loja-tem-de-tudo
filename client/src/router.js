import Vue from 'vue';
import Router from 'vue-router';
import Produto from './components/Produto/Produto.vue'
import ProdutoForm from './components/Produto/ProdutoForm.vue'

Vue.use(Router);

const router = new Router({
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'Produto',
            component: Produto
        },
        {
            path: '/produtoform',
            name: 'ProdutoForm',
            component: ProdutoForm
        }

    ]
});


export default router;
