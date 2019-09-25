<template>
    <div style="display:flex;justify-content: center;">
        <div style="width:50%">
            <vue-data-loading
                    :loading="loading"
                    :completed="NoMoreData"
                    :offset="-200"
                    :listens="['infinite-scroll']"
                    :init-scroll="false"
                    @infinite-scroll="infiniteScroll">
                <div class="container">
                    <article itemscope="itemscope">
                        <div class="posts-list js-posts">
                            <div class="post post-layout-list" data-aos="fade-up" v-for="item in datalist">
                                <div class="status_list_item icon_kyubo" v-if="item.type==1">
                                    <div class="status_user" :style="{'background-image': 'url('+item.image+')'}">
                                        <div class="status_section">
                                            <a href="detail.html" class="status_btn">{{item.title}}</a>
                                            <p class="section_p">{{item.info}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="postnormal review" v-if="item.type==2">
                                        <div class="post-container review-item">
                                            <div class="row review-item-wrapper">
                                                <div class="col-sm-3">
                                                    <a rel="nofollow" href="detail.html">
                                                        <div class="review-item-img" :style="{'background-image': 'url('+item.image+')'}"></div>
                                                    </a>
                                                </div>
                                                <div class="col-sm-9 flex-xs-middle">
                                                    <div class="review-item-title">
                                                        <a href="detail.html" rel="bookmark">{{item.title}}</a>
                                                    </div>
                                                    <div class="review-item-creator"><b>发布日期：</b>{{item.date}}</div>
                                                    <span class="review-item-info"><b>总浏览量：</b>{{item.view}} reads</span>
                                                </div>
                                            </div>
                                            <div class="review-bg-wrapper">
                                                <div class="bg-blur" style="background-image: url(/static/images/diego-ph-249471-2-800x1000.jpg);"></div>
                                            </div>
                                        </div>
                                        <div class="post-container">
                                            <div class="entry-content">{{item.info}}</div>
                                            <div class="post-footer">
                                                <a class="gaz-btn primary" href="">READ MORE</a>
                                                <span class="total-comments-on-post pull-right"><a href="">31 Comments</a></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div slot="infinite-scroll-loading" style="top:0px">
                    <loading></loading>
                </div>
                <div slot="completed">——到底啦,我是有底线的人——</div>
            </vue-data-loading>
        </div>
        <div style="width:25%">
            <div class="RightCard" :style="RightCardFixedHasFooter" :class="RightCardFixed?'fixedBottom':''" id="RightCard">
                <div class="MyCard">
                    <div class="bg"></div>
                    <div class="MyInfo">
                        <img src="/static/images/my.jpg" alt="">
                        <p data-aos="fade-right"><span class="title">Name:</span><span class="value">陈仁辉</span></p>
                        <p data-aos="fade-left"><span class="title">Age:</span><span class="value">男</span></p>
                        <p data-aos="fade-right"><span class="title">Sex:</span><span class="value">Boy</span></p>
                        <p data-aos="fade-left"><span class="title">Adress:</span><span class="value">杭州市</span></p>
                        <p data-aos="fade-right"><span class="title">Job:</span><span class="value">.NET/Web开发</span></p>
                    </div>
                </div>

                <ul class="list-1">
                    <li><span></span><a href="#"><div class="fa fa-chevron-right"></div>前端博客文章</a></li>
                    <li><span></span><a href="#"><div class="fa fa-chevron-right"></div>后台博客文章</a></li>
                    <li><span></span><a href="#"><div class="fa fa-chevron-right"></div>ASP.NET博客文章 </a></li>
                    <li><span></span><a href="#"><div class="fa fa-chevron-right"></div>.NET Core博客文章</a></li>
                    <li><span></span><a href="#"><div class="fa fa-chevron-right"></div>Vue相关博客文章</a></li>
                    <li><span></span><a href="#"><div class="fa fa-chevron-right"></div>Angular相关博客文章</a></li>
                    <li><span></span><a href="#"><div class="fa fa-chevron-right"></div>React相关博客文章</a></li>
                    <li><span></span><a href="#"><div class="fa fa-chevron-right"></div>Css3样式相关博客文章</a></li>
                </ul>
                <div class="blog-slider">
                    <!-- <div class="blog-slider__wrp swiper-wrapper"> -->
                    <swiper :options="swiperOption" class="blog-slider__wrp swiper-wrapper" ref="mySwiper">
                        <swiper-slide class="blog-slider__item swiper-slide">
                            <!-- <div class="blog-slider__item swiper-slide"> -->
                                <div class="blog-slider__img">
                                    <img src="/static/images/1.png" alt="秋叶和果实秋天背景矢量素材">
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">2018-08-31</span>
                                    <div class="blog-slider__title">秋叶和果实秋天背景矢量素材</div>
                                    <div class="blog-slider__text">这是一款秋叶和果实秋天背景矢量素材，格式为 EPS，含 JPG 预览图。</div>
                                    <a href="" class="blog-slider__button">详情</a>
                                </div>
                            <!-- </div> -->
                        </swiper-slide>
                        <swiper-slide class="blog-slider__item swiper-slide">
                            <!-- <div class="blog-slider__item swiper-slide"> -->
                                <div class="blog-slider__img">
                                    <img src="/static/images/2.png" alt="现代舒适客厅矢量素材">
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">2018-09-04</span>
                                    <div class="blog-slider__title">现代舒适客厅矢量素材</div>
                                    <div class="blog-slider__text">这是一款现代风格的舒适客厅矢量素材，包含了窗户、柜子、盆栽、沙发、茶几、地毯、落地灯、挂画等元素。素材提供了 EPS 和 AI 两种格式，含 JPG 预览图。</div>
                                    <a href="" class="blog-slider__button">详情</a>
                                </div>
                            <!-- </div> -->
                        </swiper-slide>
                        <swiper-slide class="blog-slider__item swiper-slide">
                            <!-- <div class="blog-slider__item swiper-slide"> -->
                                <div class="blog-slider__img">
                                    <img src="/static/images/1.png" alt="秋叶和果实秋天背景矢量素材">
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">2018-08-31</span>
                                    <div class="blog-slider__title">秋叶和果实秋天背景矢量素材</div>
                                    <div class="blog-slider__text">这是一款秋叶和果实秋天背景矢量素材，格式为 EPS，含 JPG 预览图。</div>
                                    <a href="" class="blog-slider__button">详情</a>
                                </div>
                            <!-- </div> -->
                        </swiper-slide>
                        <swiper-slide class="blog-slider__item swiper-slide">
                            <!-- <div class="blog-slider__item swiper-slide"> -->
                                <div class="blog-slider__img">
                                    <img src="/static/images/2.png" alt="现代舒适客厅矢量素材">
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">2018-09-04</span>
                                    <div class="blog-slider__title">现代舒适客厅矢量素材</div>
                                    <div class="blog-slider__text">这是一款现代风格的舒适客厅矢量素材，包含了窗户、柜子、盆栽、沙发、茶几、地毯、落地灯、挂画等元素。素材提供了 EPS 和 AI 两种格式，含 JPG 预览图。</div>
                                    <a href="" class="blog-slider__button">详情</a>
                                </div>
                            <!-- </div> -->
                        </swiper-slide>
                        <div class="blog-slider__pagination"  slot="pagination"></div>
                    </swiper>
                    <!-- </div> -->
                </div>

                
            </div>
        </div>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';
import loading from '@/components/loading.vue';
import VueDataLoading from 'vue-data-loading';
import {mapState, mapMutations} from 'vuex'
export default {
    data(){
        return{
            Menushow:false,
            serachShow:false,
            swiperOption: {
                effect: 'cube',
                loop: true,
                mousewheel: {
                    invert: false,
                },
                autoplay: {
                    delay: 4000,//1秒切换一次
                },
                pagination: {
                    el: '.blog-slider__pagination',
                    clickable: true,
                }
            },
            test:'/static/images/b0ce3f3cde0c084b6d42321b2dcbc407.jpeg',
            datalist:[
                {
                    title:'交代是不可能交代的',
                    date:'2017-10-02',
                    view:1600,
                    image:'/static/images/b0ce3f3cde0c084b6d42321b2dcbc407.jpeg',
                    info:'相隔上一次的更新我掰手指数一数，下意识的双腿一软，给各位小哥哥小姐姐们跪下了。自从有了对象后，周末几乎落下了主题的进度（邪魅的笑）。一边开发新的主题，一边收集您们给我反馈回来的"臭虫"，还有新的主题后台看见了一些大神在...',
                    type:1,
                },
                {
                    title:'我才不会写年终总结之瞎说篇',
                    date:'2017-10-02',
                    view:1600,
                    image:'/static/images/diego-ph-249471-2-800x1000.jpg',
                    info:'确实讨厌去写所谓的年终总结，在公司已经被动的想领导上交一个总结，自己就懒得去总结，不然，我觉得脑子里应该会编写出八九不离十的内容，所以正经八儿的事情略了，瞎说一下。 年初的人事调动是个人最不能接受的事情，但不接受也得接受，老板一句“这是命令...',
                    type:2,
                },
                {
                    title:'状态',
                    date:'2017-10-02',
                    view:1600,
                    image:'/static/images/b0ce3f3cde0c084b6d42321b2dcbc407.jpeg',
                    info:'因为我这后半年飘忽不定的更新节奏，感觉真的对不住用户。最近才松下来能处理反馈的bug，顺便加快新主题 Dcras 的制作，农历年后或许能上线，准确时间，不敢说-- 为了感谢大家对 Yarn 的支持，Dcras 会以 获兑现码半价的承诺 给 Yarn ...',
                    type:1,
                },
                {
                    title:'给大家介绍一下',
                    date:'2017-10-02',
                    view:1600,
                    image:'/static/images/47fb3c_9afed6c259f94589881bd55376206366mv2_d_3840_5784_s_4_2-800x450.jpg',
                    info:'现在的明星的影响力足以影响国内娱乐圈的"半壁江山"，发条微博，新浪都恐慌好几天，来来来，蹭个热点给大家介绍一下我的女朋友。',
                    type:2,
                }
            ],
            newdata:[
                {
                    title:'交代是不可能交代的',
                    date:'2017-10-02',
                    view:1600,
                    image:'/static/images/b0ce3f3cde0c084b6d42321b2dcbc407.jpeg',
                    info:'相隔上一次的更新我掰手指数一数，下意识的双腿一软，给各位小哥哥小姐姐们跪下了。自从有了对象后，周末几乎落下了主题的进度（邪魅的笑）。一边开发新的主题，一边收集您们给我反馈回来的"臭虫"，还有新的主题后台看见了一些大神在...',
                    type:1,
                },
                {
                    title:'我才不会写年终总结之瞎说篇',
                    date:'2017-10-02',
                    view:1600,
                    image:'/static/images/diego-ph-249471-2-800x1000.jpg',
                    info:'确实讨厌去写所谓的年终总结，在公司已经被动的想领导上交一个总结，自己就懒得去总结，不然，我觉得脑子里应该会编写出八九不离十的内容，所以正经八儿的事情略了，瞎说一下。 年初的人事调动是个人最不能接受的事情，但不接受也得接受，老板一句“这是命令...',
                    type:2,
                },
                {
                    title:'状态',
                    date:'2017-10-02',
                    view:1600,
                    image:'/static/images/b0ce3f3cde0c084b6d42321b2dcbc407.jpeg',
                    info:'因为我这后半年飘忽不定的更新节奏，感觉真的对不住用户。最近才松下来能处理反馈的bug，顺便加快新主题 Dcras 的制作，农历年后或许能上线，准确时间，不敢说-- 为了感谢大家对 Yarn 的支持，Dcras 会以 获兑现码半价的承诺 给 Yarn ...',
                    type:1,
                },
                {
                    title:'给大家介绍一下',
                    date:'2017-10-02',
                    view:1600,
                    image:'/static/images/47fb3c_9afed6c259f94589881bd55376206366mv2_d_3840_5784_s_4_2-800x450.jpg',
                    info:'现在的明星的影响力足以影响国内娱乐圈的"半壁江山"，发条微博，新浪都恐慌好几天，来来来，蹭个热点给大家介绍一下我的女朋友。',
                    type:2,
                }
            ],
            TestDom:'footer',
            LoadMoreStatus:false,
            showloading:false,
            NoMoreData:false,
            loading:false,
            RightCardFixed:false,
            RightCardFixedHasFooter:{
                bottom:'0px'
            },
        }
    },
    components:{
        loading,VueDataLoading
    },
    mounted(){
        console.log(this.swiper);
        window.addEventListener('scroll', this.PageScroll);
    },
     
    destroyed(){
        window.removeEventListener('scroll',this.PageScroll);
    },
    computed: {  
        ...mapState([
                  'FooterShow'
              ]),
        swiper() {  
        return this.$refs.mySwiper.swiper;  
        },
    }, 
    methods:{
        ...mapMutations([
                  'TAGGLE_FOOTERSHOW'
              ]),
        load: debounce(function () {
            if(!this.LoadMoreStatus){
                this.LoadMoreStatus=!this.LoadMoreStatus;
                this.showloading=!this.showloading;
                setTimeout(()=>{
                    let newarr=this.datalist;
                    this.datalist=this.datalist.concat(newarr);
                    this.LoadMoreStatus=!this.LoadMoreStatus;
                    this.showloading=!this.showloading;
                    console.log("请求一次");
                },1000);
            }
        }, 300),
        infiniteScroll() {
            this.loading=!this.loading;
            //到底触发的事件
            setTimeout(()=>{
                console.log("加载数据");
                this.datalist=this.datalist.concat(this.newdata);
                this.loading=!this.loading;
                if(this.datalist.length>=12){
                    this.NoMoreData=true;
                    this.TAGGLE_FOOTERSHOW(true);
                }
            },5000);
        },
        PageScroll(){
            var ScrTop=document.documentElement.scrollTop;
            if(ScrTop+window.innerHeight>=document.getElementById('RightCard').offsetHeight+500){
                this.RightCardFixed=true;
                if(ScrTop+window.innerHeight>=document.getElementById('footer').offsetTop&&this.NoMoreData)
                {
                    let bottom=ScrTop+window.innerHeight-document.getElementById('footer').offsetTop;
                    this.RightCardFixedHasFooter={bottom:bottom+'px'};
                }else{
                    this.RightCardFixedHasFooter={bottom:'0px'};
                }
            }else{
                this.RightCardFixed=false;
                this.RightCardFixedHasFooter={bottom:'0px'};
            }
        }
    },
}
</script>
<style lang="scss" scoped>
/deep/ .vue-data-loading{
    .loading-footer{
        .footer-text {
            top: 0px;
        }
    }
}
.content{
    // background: #fff;
    position: relative;
    z-index: 2;
    .container {
        position: relative;
        // background: #fff;
        padding: 60px 0 120px;
        .posts-list {
            margin: 0;
            padding: 0;
            a{
                color: inherit;
            }
            .post {
                position: relative;
                max-width: 80%;
                margin: 0 auto 120px;
                transition:all 0.5s;
                border-radius:6px;
                -moz-box-shadow:0px 5px 10px #ddd; -webkit-box-shadow:0px 5px 10px #ddd; box-shadow:0px 5px 10px #ddd;
                &:hover{
                    transform: scale(1.1);
                    -moz-box-shadow:0px 5px 20px #6E6E6E; -webkit-box-shadow:0px 5px 20px #6E6E6E; box-shadow:0px 5px 20px #6E6E6E;
                }
                &:last-child{
                    margin: 0 auto 30px;
                }
            }
            .status_list_item {
                position: relative;
                width: 100%;
                border-radius: 6px;
                box-shadow: 0 1px 3px rgba(249, 249, 249, 0.08), 0 0 0 1px rgba(26, 53, 71, .04), 0 1px 1px rgba(26, 53, 71, .06);
                .status_user {
                    background-size: contain;
                    background-color: #fff;
                    background-repeat: no-repeat;
                    background-position: right center;
                    border-radius: 6px;
                    padding: 25px 20% 25px 2%;
                    &::after{
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        z-index: 0;
                        top: 0;
                        left: 0;
                        background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #fff 20%);
                        background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #fff 20%);
                    }
                    .status_section {
                        position: relative;
                        z-index: 1;
                        .status_btn {
                            width: auto;
                            font-size: 20px;
                            font-weight: 700;
                            display: block;
                            position: relative;color:inherit;
                            text-decoration:none;
                            transition: all 0.5s;
                            &:hover{color: bisque}
                        }
                        .section_p {
                            line-height: 1.75;
                            margin: 20px auto;margin-bottom: 0
                        }
                    }
                }
            }
            .postnormal{
                &.review
                {
                    border-radius: 0 0 6px 6px;
                    box-shadow: 0 1px 3px rgba(249, 249, 249, 0.08), 0 0 0 1px rgba(26, 53, 71, .04), 0 1px 1px rgba(26, 53, 71, .06);
                    .post-container {
                        margin-top: 0;
                        z-index: 2;
                    }
                    .review-item {
                        position: relative;
                        overflow: visible;
                        margin-top: 1.5em;
                        border-radius: 6px 6px 0 0;
                        min-height: 200px;
                    }
                    .post-container {
                        background: white;
                        padding: 1.3rem 1.3rem 2rem;
                        border-radius: 6px;
                        box-sizing: border-box;
                        .review-item-wrapper{
                            position: relative;
                            z-index: 1;
                            color: white;
                        }
                        .row {
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                            margin-right: -15px;
                            margin-left: -15px;padding:10px 0px;
                            .review-item-img {
                                position: absolute;
                                width: 130px;
                                height: 190px;
                                top: -50px;
                                left: 25px;
                                border-radius: 4px;
                                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                                background-size: cover;
                                background-position: top center;
                            }
                            .review-item-title {
                                font-size: 20px;
                                font-weight: 700;
                                text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
                                transition: all 0.5s;
                                &:hover{color: bisque}
                            }
                            .review-item-creator {
                                font-size: 1em;
                                font-weight: normal;
                                padding: 0.5em 0;
                            }
                            .review-item-info {
                                display: block;
                                font-size: 1em;
                                opacity: .8;
                            }
                        }
                        .review-bg-wrapper {
                            overflow: hidden;
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 0;
                            bottom: 0;
                            border-radius: 6px 6px 0 0;
                            z-index: 0;
                            .bg-blur {
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100%;
                                z-index: 0;
                                background-size: cover;
                                border-radius: 6px;
                                -webkit-filter: blur(5px);
                                filter: blur(5px);
                                -webkit-transform: scale(1.2);
                                transform: scale(1.2);
                                -o-object-fit: cover;
                                object-fit: cover;
                                pointer-events: none;
                                &::after{
                                    content: "";
                                    position: absolute;
                                    width: 100%;
                                    height: 100%;
                                    z-index: 1;
                                    top: 0;
                                    left: 0;
                                    background: -webkit-linear-gradient(top, rgba(105, 105, 105, 0.1) 0%, #fff 85%);
                                    background: linear-gradient(to bottom, rgba(105, 105, 105, 0.1) 0%, #fff 85%);
                                }
                            }
                        }
                        .entry-content {
                            font-size: 16px;
                            color: rgba(0, 0, 0, .6);
                            line-height: 1.75;
                            -webkit-hyphens: auto;
                            -moz-hyphens: auto;
                            -ms-hyphens: auto;
                            hyphens: auto;
                            padding-bottom: 1.3rem;
                            .post-footer{
                                .gaz-btn.primary {
                                    background: #bebbaa;
                                }
                                .total-comments-on-post {
                                    padding: 10px 0;float:right;
                                }
                            }
                        }
                        .post-footer{
                            display:flex;justify-content:space-between;
                            .gaz-btn.primary {
                                background: #bebbaa;
                                font-size: .8em;
                                font-weight: 700;
                                padding: 12px 25px;
                                text-transform: uppercase;
                                color: white!important;
                                border-radius: 30px;
                                border: none;
                                -webkit-transition: all .2s;
                                transition: all .2s;
                                display: inline-block;
                            }
                            .total-comments-on-post {
                                padding: 10px 0;color: #bebbaa;
                            }
                        }
                    }
                }
            }
        }
    }
}
.RightCard{
    width:80%;padding: 60px 0 20px;
    &.fixedBottom{
        position: fixed;
        width:20%;
        bottom:0px;
    }
    .MyCard{
        width: 100%;
        height: 400px;
        position: relative;
        .bg{
            width: 100%;height: 100%;
            background:url(../../../static/images/my.jpg);
            background-size:100% 100%;
            background-repeat: no-repeat;
            filter: blur(5px);
        }
        .MyInfo{
            position:absolute;padding: 50px 5px 5px;
            left:0px;bottom: 0px;height: 250px;background:rgba(0,0,0,0.5);width: 100%;
            img{
                width: 80px;height: 80px;;border-radius: 40px;position: absolute;top:-40px;left:50%;margin-left: -40px;
            }
            p{
                font-size: 25px;text-align:center;font-family:'宋体';
                .title{
                    color: bisque;text-shadow:5px 4px 15px bisque;
                }
                .value{
                    color: #fff;text-shadow:5px 4px 15px #fff;
                }
            }
        }
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
.blog-slider {
  width: 100%;
  position: relative;
  margin-top: 100px;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
//   height: 600px;
  transition: all .3s;
  .blog-slider__item {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        padding-top: 230px;
        padding-bottom: 20px;
        cursor: pointer;
        .blog-slider__img {
            width: 300px;
            flex-shrink: 0;
            height: 300px;
            background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
            box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
            border-radius: 20px;
            position: absolute;
            left: 50%;top: -100px;
            margin-left: -150px;
            overflow: hidden;
            transition: all 1s;
            &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
                border-radius: 20px;
                opacity: 0.8;
            }
            img{
                width: 100%;height:100%;;
            }
        }
        &:hover{
            .blog-slider__img{
                width: 100%;height: 100%;
                left: 0px;top: 0px;
                margin-left: 0px;
            }
            .blog-slider__content
            {
                .blog-slider__code{color: rgb(151, 24, 236)}
                .blog-slider__title{color: #fff}
                .blog-slider__text{color: rgb(235, 231, 231)}
            }
        }
        .blog-slider__content {
            padding-right: 25px;z-index: 99;
            .blog-slider__code {
                color: #7b7992;
                margin-bottom: 15px;
                display: block;
                font-weight: 500;
            }
            .blog-slider__title {
                font-size: 24px;
                font-weight: 700;
                color: #0d0925;
                margin-bottom: 20px;
            }
            .blog-slider__text {
                color: #4e4a67;
                margin-bottom: 30px;
                line-height: 1.5em;
            }
            .blog-slider__button {
                display: inline-flex;
                background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
                padding: 15px 35px;
                border-radius: 50px;
                color: #fff;
                box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
                text-decoration: none;
                font-weight: 500;
                justify-content: center;
                text-align: center;
                letter-spacing: 1px;
            }
        }
    }
}
.blog-slider__content > * {
  opacity: 0;
  transform: translateY(25px);
  transition: all .4s;
}
.blog-slider__item.swiper-slide-active .blog-slider__img img {
  opacity: 1;
  transition-delay: .3s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > * {
  opacity: 1;
  transform: none;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(1) {
  transition-delay: 0.3s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(2) {
  transition-delay: 0.4s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(3) {
  transition-delay: 0.5s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(4) {
  transition-delay: 0.6s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(5) {
  transition-delay: 0.7s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(6) {
  transition-delay: 0.8s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(7) {
  transition-delay: 0.9s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(8) {
  transition-delay: 1s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(9) {
  transition-delay: 1.1s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(10) {
  transition-delay: 1.2s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(11) {
  transition-delay: 1.3s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(12) {
  transition-delay: 1.4s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(13) {
  transition-delay: 1.5s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(14) {
  transition-delay: 1.6s;
}
.blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(15) {
  transition-delay: 1.7s;
}
.blog-slider__pagination {
  position: absolute;
  z-index: 21;
  text-align: center;
  left: auto !important;
  /deep/ &.swiper-pagination-bullets
  {
      .swiper-pagination-bullet {
        width: 11px;
        height: 11px;
        border-radius: 10px;
        background: #062744;
        opacity: 0.2;
        transition: all .3s;
        margin: 0 4px;
   }
   .swiper-pagination-bullet-active {
        opacity: 1;
        background: #fd3838;
        width: 30px;
        box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
    }
  }
}
.blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 8px 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.list-1 {
  padding-top: 4px;margin-top:20px;
  li {
        position: relative;
        letter-spacing: -2px;
        font-size: 20px;
        line-height: 20px;
        &:nth-child(even) {
          background-image: linear-gradient(147deg, #39e7fe 0%, #acd4f8 74%);
        }
        a {
            display: block;
            position: relative;
            padding: 13px 30px 18px 60px;
            color: #323045;
            &:hover{
                color: #e8e6b9;
                .fa{
                    left: 90%;
                }
            }
            .fa {
                font-size: 20px;
                position: absolute;
                left: 20px;
                top: 17px;
                right: auto;
                -webkit-transition: 0.5s ease;
                transition: 0.5s ease;
            }
        }
        span {
            position: absolute;
            background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
            top: 0;
            bottom: 0;
            left: 0;
            width: 0;
            -webkit-transition: width 0.5s ease;
            transition: width 0.5s ease;
        }
        &:hover{
            span {
            width: 100%;
            }
        }
    }
}
</style>