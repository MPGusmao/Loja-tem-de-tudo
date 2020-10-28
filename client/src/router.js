import Vue from 'vue';
import Router from 'vue-router';
import Produto from './components/Produto/Produto.vue'
import ProdutoForm from './components/Produto/ProdutoForm.vue'
import Venda from './components/Venda/Venda.vue'
import RelatorioForm from './components/Venda/RelatorioVendas.vue'
import RealizarVenda from './components/RealizarVenda/RealizarVenda.vue'

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
        },
        {
            path: '/venda',
            name: 'Venda',
            component: Venda
        },
        {
            path: '/analise',
            name: 'RelatorioForm',
            component: RelatorioForm
        },
        {
            path: '/realizarvenda',
            name: 'RealziarVenda',
            component: RealizarVenda
        }
    ]
});


export default router;
