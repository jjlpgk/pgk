
var projectName = '面向图书共享';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '图书信息',
	url: './pages/tushuxinxi/list.html'
}, 
{
	name: '用户分享',
	url: './pages/yonghufenxiang/list.html'
}, 
{
	name: '电子信息资源',
	url: './pages/dianzixinxiziyuan/list.html'
}, 

{
	name: '社区交流',
	url: './pages/forum/list.html'
}, 
{
	name: '公告信息',
	url: './pages/news/list.html'
},
{
	name: '联系我们',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/nodejssh0na/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除"],"menu":"图书分类","menuJump":"列表","tableName":"tushufenlei"}],"menu":"图书分类管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"图书信息","menuJump":"列表","tableName":"tushuxinxi"}],"menu":"图书信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除"],"menu":"用户分享","menuJump":"列表","tableName":"yonghufenxiang"}],"menu":"用户分享管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除"],"menu":"电子信息资源","menuJump":"列表","tableName":"dianzixinxiziyuan"}],"menu":"电子信息资源管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"消息提醒","menuJump":"列表","tableName":"xiaoxitixing"}],"menu":"消息提醒管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"社区交流","tableName":"forum"}],"menu":"社区交流"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"联系我们","tableName":"messages"}],"menu":"联系我们"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看"],"menu":"图书信息列表","menuJump":"列表","tableName":"tushuxinxi"}],"menu":"图书信息模块"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看"],"menu":"用户分享列表","menuJump":"列表","tableName":"yonghufenxiang"}],"menu":"用户分享模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看"],"menu":"电子信息资源列表","menuJump":"列表","tableName":"dianzixinxiziyuan"}],"menu":"电子信息资源模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除","查看评论"],"menu":"图书信息","menuJump":"列表","tableName":"tushuxinxi"}],"menu":"图书信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除","查看评论"],"menu":"用户分享","menuJump":"列表","tableName":"yonghufenxiang"}],"menu":"用户分享管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除","查看评论"],"menu":"电子信息资源","menuJump":"列表","tableName":"dianzixinxiziyuan"}],"menu":"电子信息资源管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"消息提醒","menuJump":"列表","tableName":"xiaoxitixing"}],"menu":"消息提醒管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看"],"menu":"图书信息列表","menuJump":"列表","tableName":"tushuxinxi"}],"menu":"图书信息模块"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看"],"menu":"用户分享列表","menuJump":"列表","tableName":"yonghufenxiang"}],"menu":"用户分享模块"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看"],"menu":"电子信息资源列表","menuJump":"列表","tableName":"dianzixinxiziyuan"}],"menu":"电子信息资源模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
