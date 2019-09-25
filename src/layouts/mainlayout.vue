<template>
    <div ref="MainLayout" class="MainLayout">
        <div>
        <div class="Yarn_Background">
         <swiper :options="swiperOption">
             <swiper-slide>
                 <div class="BgImgItem" style="background-image: url( /static/images/bg1.jpg);"></div>
             </swiper-slide>
             <swiper-slide>
                 <div class="BgImgItem" style="background-image: url( /static/images/bg2.jpg);"></div>
             </swiper-slide>
             <swiper-slide>
                 <div class="BgImgItem" style="background-image: url( /static/images/bg3.jpg);"></div>
             </swiper-slide>
             <swiper-slide>
                 <div class="BgImgItem" style="background-image: url( /static/images/bg4.jpg);"></div>
             </swiper-slide>
             <swiper-slide>
                 <div class="BgImgItem" style="background-image: url( /static/images/bg5.jpg);"></div>
             </swiper-slide>
         </swiper>
        </div>
        <div class="js-search search-form search-form--modal" v-show="serachShow" role="search" @click.self="TaggleSearchShow()">
			<div class="search-form__inner">
				<div>
					<div id="search-container" class="ajax_search animated fadeInDown">
							<div class="filter_container"><input type="text" value="" autocomplete="off" placeholder="Type then select or enter" name="s" id="search-input" />
								<ul id="search_filtered" class="search_filtered"></ul>
							</div>
					</div>
				</div>
			</div>
		</div>
        <div class="TopMenu" v-bind:style="{background:TopMenuBack}">
            <div class="navi open aos-init aos-animate" data-aos="fade-down" :class="Menushow?'close':''">
                <div class="bt-nav" @click="TaggleMenu()">
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                </div>
                <div class="navbar animated fadeInRight">
                    <div class="inner">
                        <nav id="site-navigation" class="main-navigation">
                            <div id="main-menu" class="main-menu-container">
                                <div class="menu-menu-container">
                                    <ul id="primary-menu" class="menu">
                                        <li id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-17">
                                            <router-link :to="{ path: '/'}">首页</router-link>
                                        </li>
                                        <li id="menu-item-173" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-173">
                                            <router-link :to="{ path: '/blogIndex'}">博客主页</router-link>
                                        </li>
                                        <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78">
                                            <a href="link.html">我的项目</a>
                                        </li>
                                        <li id="menu-item-252" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-252">
                                            <router-link :to="{ path: '/markdown'}">写博客</router-link>
                                        </li>
                                        <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78">
                                            <a href="link.html">开发插件</a>
                                        </li>
                                        <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78">
                                            <a href="link.html">关于我的</a>
                                        </li>
                                        <li id="menu-item-57" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                                            <a href="gustbook.html">留言</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="hebin" data-aos="fade-down" @click="TaggleSearchShow()">
                <i class=" js-toggle-search iconfont">&#xe60e;</i>
            </div>
        </div>
        <header id="masthead" class="overlay animated from-bottom" itemprop="brand" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
			<div class="site-branding text-center">
					<div class="MyImg">
						<img class="custom-logo avatar" src="static/images/my.jpg" />
					</div>
				<h3 class="blog-description"><p>Welcome to my blog</p></h3>
			</div>
			<!-- .site-branding -->
			<div class="decor-part">
				<div id="particles-js"></div>
			</div>
			<div class="animation-header">
				<div class="decor-wrapper">
					<svg id="header-decor" class="decor bottom" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
						<path class="large left" d="M0 0 L50 50 L0 100" fill="rgba(255,255,255, .1)"></path>
						<path class="large right" d="M100 0 L50 50 L100 100" fill="rgba(255,255,255, .1)"></path>
						<path class="medium left" d="M0 100 L50 50 L0 33.3" fill="rgba(255,255,255, .3)"></path>
						<path class="medium right" d="M100 100 L50 50 L100 33.3" fill="rgba(255,255,255, .3)"></path>
						<path class="small left" d="M0 100 L50 50 L0 66.6" fill="rgba(255,255,255, .5)"></path>
						<path class="small right" d="M100 100 L50 50 L100 66.6" fill="rgba(255,255,255, .5)"></path>
						<path d="M0 99.9 L50 49.9 L100 99.9 L0 99.9" fill="rgba(255,255,255, .9)"></path>
						<!-- <path d="M48 52 L50 49 L52 52 L48 52" fill="rgba(255,255,255, .7)"></path> -->
					</svg>
				</div>
			</div>
		</header>
        <div id="main" class="content">
            <router-view></router-view>
        </div>
        <footer id="footer" v-show="FooterShow" class="overlay animated from-top">
			<div class="decor-wrapper">
				<svg id="footer-decor" class="decor top" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
					<!-- <path class="large left" d="M0 0 L50 50 L0 100" fill="rgba(255,255,255, .1)"></path>
					<path class="large right" d="M100 0 L50 50 L100 100" fill="rgba(255,255,255, .1)"></path>
					<path class="medium left" d="M0 0 L50 50 L0 66.6" fill="rgba(255,255,255, .3)"></path>
					<path class="medium right" d="M100 0 L50 50 L100 66.6" fill="rgba(255,255,255, .3)"></path>
					<path class="small left" d="M0 0 L50 50 L0 33.3" fill="rgba(255,255,255, .5)"></path>
					<path class="small right" d="M100 0 L50 50 L100 33.3" fill="rgba(255,255,255, .5)"></path> -->
					<path d="M0 0 L50 50 L100 0 L0 0" fill="rgba(255,255,255, 1)"></path>
					<path d="M48 48 L50 51 L52 48 L48 48" fill="rgba(255,255,255, 1)"></path>
				</svg>
			</div>
			<div class="socialize" data-aos="zoom-in">
				<li>
					<a title="weibo" class="socialicon" href=""><i class="iconfont" aria-hidden="true">&#xe601;</i></a>
				</li>
				<li class="wechat">
					<a class="socialicon"><i class="iconfont">&#xe609;</i></a>
				</li>
				<li>
					<a title="QQ" class="socialicon" href="" target="_blank"><i class="iconfont" aria-hidden="true">&#xe616;</i></a>
				</li>
			</div>
			<div class="cr">
				Copyright&copy;2019. Design by chenrh.Blog
			</div>
		</footer>
        </div>
    </div>
</template>

<script>
import AOS from 'aos'
import particlesJs from "particles.js";
import particlesConfig from "@/assets/json/particles.json";
import {mapState, mapMutations} from 'vuex'
export default {
    data(){
        return{
            Menushow:false,
            serachShow:false,
            intersectionOptions: {
                // root: document.querySelector("#app"), //用作视口的元素，用于检查目标的可见性。必须是目标的祖先。如果未指定，则默认为浏览器视口null
                rootMargin: "0px",
                threshold: 0.1 //范围为 0-1: 阈值为1.0意味着当100％的目标在root选项指定的元素中可见时，将调用回调
            },
            swiperOption: {
                effect: 'fade',
                loop: true,
                autoplay: {
                    delay: 4000,//1秒切换一次
                },
            },
            TopMenuBack:'rgba(0,0,0,0)',
        }
    },
    mounted(){
        particlesJS("particles-js", particlesConfig);
        window.addEventListener('scroll', this.getScroll);
        // console.log(document.getElementById('masthead').offsetHeight);
        this.HeaderH=document.getElementById('masthead').offsetHeight;
    },
    computed: {
        ...mapState([
                  'FooterShow'
              ]),
    },
    methods:{
        ...mapMutations([
                  'TAGGLE_FOOTERSHOW'
              ]),
        TaggleMenu(){
            this.Menushow=!this.Menushow;
        },
        TaggleSearchShow(){
            this.serachShow=!this.serachShow;
        },
        onWaypoint({ el, going, direction, _entry }) {
            // going: in, out
            // direction: top, right, bottom, left
            if (going === this.$waypointMap.GOING_IN) {
                $('#masthead').addClass('animation-on');
                // console.log("waypoint going in!"); //激活-出现了
            }
            if (going === this.$waypointMap.GOING_OUT) {

            }
            if (direction === this.$waypointMap.DIRECTION_TOP) {
                $('#masthead').removeClass('animation-on');
            }
            if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
                $('#masthead').addClass('animation-on');
            }
        },
        getScroll(){
            // console.log(document.documentElement.scrollTop);
            var ScrTop=document.documentElement.scrollTop;
            if(ScrTop>=this.HeaderH){
                this.TopMenuBack='rgba(0,0,0,0.8)';
            }
            else{
                var opacity=ScrTop/this.HeaderH*0.8;
                this.TopMenuBack='rgba(0,0,0,'+opacity+')';
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.Yarn_Background{
    position: fixed;
    width: 100%;
    height: 100%;
    -moz-background-size: cover;
    -o-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: top center;
    z-index: -999;
    .BgImgItem{
        width:100vw;height: 100vh;
    }
}
.search-form--modal {
    -webkit-transition: visibility 0.25s ease, opacity 0.25s ease;
    -moz-transition: visibility 0.25s ease, opacity 0.25s ease;
    -ms-transition: visibility 0.25s ease, opacity 0.25s ease;
    -o-transition: visibility 0.25s ease, opacity 0.25s ease;
    transition: visibility 0.25s ease, opacity 0.25s ease;
    overflow: hidden;
    z-index: 998;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: auto;
    background: rgba(0, 0, 0, 0.3);
    div{
        position: relative;
    }
    .search-form__inner {
        max-width: 640px;
        padding: 0 20px;
        margin: 0 auto;
        position: fixed;
        width: 100%;
        left: 0;
        right: 0;
        top: 1.5em;
        bottom: 0;
    }
    input {
        text-align: center;
        font-family: PingFang SC, "Hiragino Sans GB", "Source Han Sans CN", Roboto, "Microsoft Yahei", sans-serif;
        font-size: 24px;
        font-size: 1.5rem;
        background: rgba(255, 255, 255, 0.6);
        color: #fff;
        padding: 12px 0;
        width: 100%;
        border-radius: 50px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: none;
        outline:none;
    }
}
.TopMenu{
    width:100%;height:100px;position:fixed;z-index:9;
    .navi {
        position: absolute;
        right: 0;
        z-index: 999;
    }
    .bt-nav {
        display: block;
        position: absolute;
        z-index: 999;
        top: 2em;
        right: 3em;
        width: 36px;
        height: 36px;
        cursor: pointer;
        .line {
            position: absolute;
            top: 7px;
            left: 50%;
            width: 30px;
            margin-left: -15px;
            height: 1px;
            background: rgba(255, 255, 255, 1);
            transition: all .3s ease;
        }
    }
    .open{
        .bt-nav{
            .line1 {top: 17px;}
            .line3 {top: 27px;}
        }
        .navbar{display:none}
    }
    .close{
        .bt-nav{
            .line {top: 17px;}
            .line1{transform: rotateZ(45deg)}
            .line2 {opacity: 0;}
            .line3 {transform: rotateZ(-45deg)}
        }
        .navbar{display:block;float: right;margin-top: 40px;padding-right: 90px;}
    }

    .hebin {
        position: absolute;
        z-index: 998;
        top: 2.5em;
        left: 3em;
        cursor: pointer;
        i{
            font-size: 30px;
            line-height: 30px;
            margin-right: 20px;
            &.js-toggle-search {
                height: 35px;
                width: 35px;
                color: rgba(255, 255, 255, 1);
                float: left;
                display: inline;
                -webkit-transition: all 500ms ease-in-out;
                transition: all 500ms ease-in-out;
            }
        }
    }
}
.main-navigation {
    padding: 0;
    -webkit-transition: right .4s ease 0s;
    -moz-transition: right .4s ease 0s;
    -ms-transition: right .4s ease 0s;
    -o-transition: right .4s ease 0s;
    transition: right .4s ease 0s;
    #main-menu>div, #primary-menu {
        float: left;
    }
    ul{
        display: block;
        margin: 0;
        padding-left: 0;
        list-style: none;
        li{
            float: left;
            margin: 0;
            color: #fff;
            position: relative;
            a{
                padding: 0 10px 40px;color: inherit;font-weight: bold;display: block;text-decoration: none;
                &::before{
                    margin-right: 5px;
                    content: '[';
                    -webkit-transform: translateX(20px);
                    -moz-transform: translateX(20px);
                    transform: translateX(20px);
                    display: inline-block;
                    opacity:0;transition: transform .3s, opacity .2s;
                }
                &::after{
                    margin-left: 5px;
                    content: ']';
                    -webkit-transform: translateX(-20px);
                    -moz-transform: translateX(-20px);
                    transform: translateX(-20px);
                    display: inline-block;
                    opacity:0;transition: transform .3s, opacity .2s;
                }
                &:hover{
                    &::before{
                        opacity: 1;
                        -webkit-transform: translateX(0);
                        -moz-transform: translateX(0);
                        transform: translateX(0)
                    }
                    &::after{
                        opacity: 1;
                        -webkit-transform: translateX(0);
                        -moz-transform: translateX(0);
                        transform: translateX(0)
                    }
                }
                &:focus{
                    &::before,&::after{
                        opacity: 1;
                        -webkit-transform: translateX(0);
                        -moz-transform: translateX(0);
                        transform: translateX(0)
                    }
                }
            }
        }
    }
}
#masthead {
    position: relative;
    z-index: 2;
    display: block;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 500px;
    box-sizing: border-box;
    .site-branding{
        padding-top:150px;
        width: 100%;
        color:#fff;font-size:20px;
        .MyImg{
            width: 100%;display:flex;justify-content:center;margin-bottom:20px;
            img{
                width: 100px;height: 100px;border-radius: 50px;display: block;
            }
        }
    }
    #particles-js {
        position: absolute;
        top: -100px;
        width: 100%;
        height: 100%;
    }
    .decor-wrapper {
        width: 100%;
        height: 50%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        .decor {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            &.bottom{
                bottom:-1px;
            }
        }
    }
}
.content{
    background-color: rgba(255, 255, 255, 0.9);
    position: relative;
    z-index: 2;
}
#footer {
    padding: 120px 0 60px;
    position: relative;
    width: 100%;
    display: block;
    z-index: 2;
    color: #fff;
    transition: all 0.5s;
    .decor-wrapper {
        width: 100%;
        height: 50%;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        z-index: 2;
        .decor {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            &.top{
                top:-1px;
            }
        }
    }
    .socialize{
        margin:60px 0px;display:flex;justify-content:center;
        li{
            display: inline-block;
            .socialicon {
                width: 72px;
                height: 72px;
                text-align: center;
                margin: 0 5px;
                color: rgba(255, 255, 255, 0.5);
                display: inline-block;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                i{
                    font-size: 60px;
                }
            }
        }
        .wechat {
            position: relative;
        }
    }
    .cr {
        text-transform: none;
        text-align: center;
        position: relative;
        z-index: 2;
        a{color: #fff;}
    }
}
.col-sm-3 {
    width: 25%;
}
.col-sm-9 {
    width: 75%;
}
a{
    text-decoration:none;
}
.pull-right {
    float: right;
}
</style>



