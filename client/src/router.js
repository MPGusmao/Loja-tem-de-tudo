import Vue from 'vue';
import Router from 'vue-router';
import ProdutoForm from './components/Produto/ProdutoForm.vue'
import Produto from './components/Produto/Produto.vue'
import ClienteForm from './components/Cliente/ClienteForm.vue'
import Cliente from './components/Cliente/Cliente.vue'
import VendaForm from "./components/Venda/VendaForm.vue"
import Venda from './components/Venda/Venda.vue'
import Vendedor from './components/Vendedor/Vendedor.vue'
import VendedorForm from './components/Vendedor/VendedorForm.vue'


Vue.use(Router);

const router = new Router({
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/produtoform',
            component: ProdutoForm,
            name: 'ProdutoForm'
        },
        {
            path: '/produto',
            component: Produto,
            name: 'Produto'
        },
        {
            path: '/clienteform',
            component: ClienteForm,
            name: 'ClienteForm'
        },
        {
            path: '/cliente',
            component: Cliente,
            name: 'Cliente'
        },
        {
            path: '/vendaform',
            component: VendaForm,
            name: 'VendaForm'
        },
        {
            path: '/venda',
            component: Venda,
            name: 'Venda'
        },
        {
            path: '/vendedor',
            component: Vendedor,
            name: 'Vendedor'
        },
        {
            path: '/vendedorform',
            component: VendedorForm,
            name: 'VendedorForm'
        }
    ]
});


export default router;
