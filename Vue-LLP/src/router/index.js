/**
//  * hash路由的原理
//  * * 表面：根据hash值的改变来渲染不同的组件
//  * * 底层：根据window的hashchange事件来相应不同的组件
//  */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue'
import Xuan from '../components/Xuan.vue'
import Goods from '../components/Goods.vue'
import Cart from '../components/Cart.vue'
import NotFound from '../components/NotFound.vue'
import Login from '../components/Login.vue'
import Aianding from "../components/Aianding.vue";
import List from '../components/List.vue'
// import Discover from "../components/discover.vue";

Vue.use(VueRouter);
let router = new VueRouter({
     mode:'history',
    routes: [
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path: '/',   //重定向：当浏览器url地址为/,自动跳转到/home
            redirect: '/home'
        },
        {
            name: 'Home',
            path: '/home',
            component: Home
        },
        {
            name: 'Xuan',
            path: '/xuan',
            component: Xuan
        },
        {
            name: 'List',
            path: '/list',
            component: List,
        },
        {
            name: 'Cart',
            path: '/cart',
            component: Cart,
        },
        {
            name: 'Goods',
            path: '/goods/:id',
            component: Goods,
            //props为true: 等效于<Goods v-bind="{$route.params}"/>
            // props:true,

            //props为Object: 等效于<Goods v-bind="Object"/>
            // props:{username:'laoxie',password:123},

            //props为Object: 等效于<Goods v-bind="Object"/>
            props: function (route) {
                return {
                    id: route.params.id,
                    keyword: route.query.keyword
                }
            }
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,

            // 单个路由独享
            beforeEnter(to, from, next) {
                let username = localStorage.getItem('username')
                if (username) {
                    next({
                        name: 'Aianding'
                    })
                } else {
                    next();
                }
            }
        },
        // {
        //     name: 'Discover',
        //     path: '/discover',
        //     component: Discover,
        // },
        //登陆后
        {
            name: 'Aianding',
            path: '/aianding',
            component: Aianding,
        },
        // 404
        {
            path: '*',
            component: NotFound
        }
    ]
});

// 全局路由守卫
// 路由拦截：
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // 需要登录的模块，判断是否已登录
        let username = localStorage.getItem('username');
        if (username) {
            next();
        } else {
            // 重定向到登录页面
            next({
                name: 'Login',
                params: { from: to.fullPath }
            })
        }
    } else {
        next();
    }
});


export default router;