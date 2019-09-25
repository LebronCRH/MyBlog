/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'history';
let imgBaseUrl = 'http://120.78.183.108:6786/Images/ServiceShop/';
let imgUserBaseUrl='http://www.joingp.com:8084';
let imgPCBaseUrl='http://www.joingp.com:8085';
let imgPCUrl='http://www.joingp.com:8080';
let socketBaseUrl='http://www.joingp.com:3000/';
let H5LuoKiPetUrl="http://www.joingp.com:8083/";
let TestimgPCBaseUrl='http://192.168.0.166:8085';

if (process.env.NODE_ENV == 'development') {
	baseUrl='https://localhost:44391';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl='http://www.joingp.com:8084'; 
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
	imgUserBaseUrl,
	socketBaseUrl,
	imgPCBaseUrl,
	imgPCUrl,
	H5LuoKiPetUrl,
	TestimgPCBaseUrl,
}