import Vue from 'vue';
import Router from 'vue-router';
import ProdutoForm from './Components/Produto/ProdutoForm.vue'
import Produto from './components/Produto/Produto.vue'
import VendedorForm from './components/Vendedor/VendedorForm.vue'
import Venda from './components/Venda/Venda.vue'
import RealizarVenda from './components/Venda/RealizarVenda.vue'
import RelatorioVenda from './components/Venda/RelatorioVenda.vue'
import ClienteForm from './components/Cliente/ClienteForm.vue'


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
        },
        {
            path: '/vendedorform',
            name: 'VendedorForm',
            component: VendedorForm
        },
        {
            path: '/venda',
            name: 'Venda',
            component: Venda
        },
        {
            path: '/realizarvenda',
            name: 'RealizarVenda',
            component: RealizarVenda
        },
        {
            path: '/relatoriovenda',
            name: 'RelatorioVenda',
            component: RelatorioVenda
        },
        {
            path: '/clienteform',
            name: 'ClienteForm',
            component: ClienteForm
        }
    ]
});


export default router;
