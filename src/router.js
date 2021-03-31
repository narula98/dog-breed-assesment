import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage'
import Search from './components/SearchPage'
import SubBreed from './components/SubBreed'
import ErrorPage from './components/ErrorPage'
Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
        path:'/',
        name:'home',
        component: HomePage
    },

    {
        path:'/search/:breedName',
        name:'search',
        component: Search,
        props: true
    },    
    {
        path:'/subBreed/:breedName',
        name:'subBreed',
        component: SubBreed,
        props: true
    },
    {
        path:'/errorPage/:errorName/:errorMessage',
        name:'error',
        component: ErrorPage,
        props: true
    },
    {
        path:'*',
        name:'error',
        component: ErrorPage,
        props: true
    },
]
}) 