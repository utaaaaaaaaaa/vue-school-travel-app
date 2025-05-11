import Home from '@/views/Home.vue'
import {createRouter, createWebHistory} from 'vue-router';
import sourceData from '@/data.json'

const routes = [
    {path: '/',name: 'Home', component: Home},
    {
      path: '/protected',
      name: 'protected',
      component: () => import('@/views/Protected.vue'),
      meta: {
       requiresAuth: true,
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: ()=> import('@/views/Invoices.vue'),
      meta: {
          requiresAuth: true,
      }
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import('@/views/Login.vue')
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
    history: createWebHistory(),
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