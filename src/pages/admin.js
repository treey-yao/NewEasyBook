/**
 * admin
 * */
export default [{
    path: '/admin/index',
    name: 'index',
    meta: {
        title: '首页',
        notLogin: false,
    },
    component: () => import('@/views/admin/index.vue')
},
]
