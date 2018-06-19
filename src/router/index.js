import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'

import main from '@/components/page/main';
import page1 from '@/components/page/page1';
import page2 from '@/components/page/page2';


import main2 from '@/components/page/main2';
import main21 from '@/components/page/main21';
import main22 from '@/components/page/main22';
import main23 from '@/components/page/main23';

import vuexMain from '@/components/vuexPage/vuexMain';
import vuexCount from '@/components/vuexPage/count';


// ----------------------------------------------example

import exPos from '@/components/page/example/exPage/exPos';
import exMain from '@/components/page/example/exMain';


Vue.use(Router);


function beforeEnterFn(to, from, next) {
    console.log('我进入了params模板');
    console.log(to);
    console.log(from);
    next();
}





export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            beforeEnter: beforeEnterFn
        },
        {
            path: '/main',
            name: 'main页面',
            component: main,
            beforeEnter: beforeEnterFn,
            children: [
                { path: '/page1/:newsId(\\d+)/:newsTitle', component: page1, name: 'main的第一个子页面', beforeEnter: beforeEnterFn },
                { path: '/page2', component: page2, name: 'page2', beforeEnter: beforeEnterFn },
            ]
        },
        {
            path: '/main2',
            // name: 'main2',
            component: main2,
            beforeEnter: beforeEnterFn,
            children: [{
                path: '/main21',
                components: {
                    default: main21,
                    route2: main22,
                    route3: main23,
                },
                name: 'main21'
            }, ]
        },
        {
            path: '/vuexMain',
            name: 'vuexMain',
            component: vuexMain,
            beforeEnter: beforeEnterFn
        },
        {
            path: '/vuexCount',
            name: 'vuexCount',
            component: vuexCount,
            beforeEnter: beforeEnterFn
        },
        {
            path: '/exMain',
            name: 'exMain',
            component: exMain,
            beforeEnter: beforeEnterFn,
            children: [
                { path: '/exMain/exPos', component: exPos, name: 'exPos', beforeEnter: beforeEnterFn },
                // {path:'/page1/:newsId(\\d+)/:newsTitle',component:page1,name:'main的第一个子页面', beforeEnter:beforeEnterFn},
                // {path:'/page2',component:page2,name:'page2', beforeEnter:beforeEnterFn},
            ]
        },

        {
            path: '/*',
            redirect: '/'
        },
    ]
})