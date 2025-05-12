import Home from '@/views/Home.vue'
import {createRouter, createWebHistory} from 'vue-router';
import sourceData from '@/data.json'

const routes = [
    {path: '/',name: 'Home', component: Home, alias: '/home'},
    // {path: '/home', redirect: '/'},
    {
      path: '/protected',
      name: 'protected',
      components: {
          default: () => import('@/views/Protected.vue'),
          LeftSidebar: ()=> import('@/components/LeftSidebar.vue')
      },
      meta: {
       requiresAuth: true,
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
        components: {
            default: () => import('@/views/Invoices.vue'),
            LeftSidebar: ()=> import('@/components/LeftSidebar.vue')
        },
      meta: {
          requiresAuth: true,
      }
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import('@/views/Login.vue')
    },
    {
      path: '/example/:id(\\d+)*',
      component: () => import('@/views/Login.vue')
    },
    {path: '/destination/:id/:slug',
        name: 'destination.show',
        component: ()=>import('@/views/DestinationShow.vue'),
        props: route => ({id: route.params.id,slug: route.params.slug}),
        children: [
            {   path: ':experienceSlug',
                name: 'experience.show',
                component: ()=>import('@/views/ExperienceShow.vue'),
                props: true,
            },
        ],
        beforeEnter(to, from) {
            const exits = sourceData.destinations.find(
                item => item.id === parseInt(to.params.id)
            )
            if(!exits) {
                return {
                    name: 'NotFound',
                    params: {pathMatch: to.path.split('/').slice(1)},
                    query: to.query,
                    hash: to.hash,
                }
            }
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: ()=>import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(
        '/vue-school-travel-app/' // 使用Vite配置的基础路径
    ),
    routes,
    linkActiveClass: 'vue-school-active-link',
    scrollBehavior (to,from,savedPosition) {
        return savedPosition || new Promise(resolve=>{
            setTimeout(() => resolve({top:0}),300)
        });
    }
})
router.beforeEach((to, from) => {
    if(to.meta.requiresAuth && !window.user){
        return {name: 'login', query: {redirect: to.fullPath}}
    }
})
export default router