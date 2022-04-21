import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import discussyonghufenxiang from '@/views/modules/discussyonghufenxiang/list'
    import discussdianzixinxiziyuan from '@/views/modules/discussdianzixinxiziyuan/list'
    import storeup from '@/views/modules/storeup/list'
    import discusstushuxinxi from '@/views/modules/discusstushuxinxi/list'
    import xiaoxitixing from '@/views/modules/xiaoxitixing/list'
    import forum from '@/views/modules/forum/list'
    import tushufenlei from '@/views/modules/tushufenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dianzixinxiziyuan from '@/views/modules/dianzixinxiziyuan/list'
    import messages from '@/views/modules/messages/list'
    import config from '@/views/modules/config/list'
    import yonghufenxiang from '@/views/modules/yonghufenxiang/list'
    import tushuxinxi from '@/views/modules/tushuxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/discussyonghufenxiang',
        name: '用户分享评论',
        component: discussyonghufenxiang
      }
      ,{
	path: '/discussdianzixinxiziyuan',
        name: '电子信息资源评论',
        component: discussdianzixinxiziyuan
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/discusstushuxinxi',
        name: '图书信息评论',
        component: discusstushuxinxi
      }
      ,{
	path: '/xiaoxitixing',
        name: '消息提醒',
        component: xiaoxitixing
      }
      ,{
	path: '/forum',
        name: '社区交流',
        component: forum
      }
      ,{
	path: '/tushufenlei',
        name: '图书分类',
        component: tushufenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/dianzixinxiziyuan',
        name: '电子信息资源',
        component: dianzixinxiziyuan
      }
      ,{
	path: '/messages',
        name: '联系我们',
        component: messages
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yonghufenxiang',
        name: '用户分享',
        component: yonghufenxiang
      }
      ,{
	path: '/tushuxinxi',
        name: '图书信息',
        component: tushuxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
