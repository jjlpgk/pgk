const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejssh0na/",
            name: "nodejssh0na",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejssh0na/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "面向图书共享"
        } 
    }
}
export default base
