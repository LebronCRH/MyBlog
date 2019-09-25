<template>
    <div class="container">
        <div class="waterfall_Div" style="position:relative" id="waterfall_Div">
            <div class="cation-middle" :class="FixedTop?'FixedTop':''">
                    <dl class="cation-list">
                        <dt>分类</dt>
                        <dd>
                            <a href="#" rel="" name="mode" class="all on">全部</a>
                            <a href="#" rel="服装鞋包" name="mode" class="default">服装鞋包</a>
                            <a href="#" rel="家电数码" name="mode" class="default">家电数码</a>
                            <a href="#" rel="英文外贸" name="mode" class="default">英文外贸</a>
                            <a href="#" rel="综合通用" name="mode" class="default">综合通用</a>
                            <a href="#" rel="食品保健" name="mode" class="default">食品保健</a>
                            <a href="#" rel="团购模板" name="mode" class="default">团购模板</a>
                            <a href="#" rel="美容护肤" name="mode" class="default">美容护肤</a>
                            <a href="#" rel="珠宝饰品" name="mode" class="default">珠宝饰品</a>
                            <a href="#" rel="鲜花礼品" name="mode" class="default">鲜花礼品</a>
                            <a href="#" rel="童装母婴" name="mode" class="default">童装母婴</a>
                        </dd>
                    </dl>
            </div>
            <Waterfall/>
        </div>
    </div>
</template>
<script>
import vueWaterfallEasy from 'vue-waterfall-easy';
import Waterfall from "../../components/waterfall";
export default {
    data(){
        return{
            FixedTop:false,
            imgsArr: [],
            group: 0, // 当前加载的加载图片的次数
            fetchImgsArr: []    //存放每次滚动时下一批要加载的图片的数组
        }
    },
    components:{
        Waterfall
    },
    mounted(){
        window.addEventListener('scroll', this.PageScroll);
    },
    destroyed(){
        window.removeEventListener('scroll',this.PageScroll);
    },
    methods:{
        PageScroll(){
            var ScrTop=document.documentElement.scrollTop;
            if(ScrTop>=document.getElementById('main').offsetTop-100){
                this.FixedTop=true;
            }else{
                this.FixedTop=false;
            }
        }
    },
    created () {

　　}
}
</script>
<style lang="scss" scoped>
#main{
    widows:100%;
}
.cation-middle {
    line-height: 48px;
    background: #fff;
    padding: 10px 20px 10px 30px;
    font-size: 14px;
    transition: all 0.5s;
    &.FixedTop{
        position:fixed;
        top:100px;
        width:100%;
        opacity:0.8;z-index:99;
    }
    .cation-list {
        overflow: hidden;
        display: flex;
        justify-content: center;
        &:last-of-type{
            dd {border-bottom: 0 none;}
        }
        a{
            &:hover{color: #fc8080;}
        }
        dt {
            float: left;
            width: 64px;
            font-weight: 700;
            line-height: 48px;
            position: relative;
            color: #333;
            &:after {
                content: "";
                position: absolute;
                right: 12px;
                top: 22px;
                border: 1px solid #333;
                border-width: 0 1px 1px 0;
                width: 4px;
                height: 4px;
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
        }
        dd {
            border-bottom: 1px dotted #e0e0e0;
            margin-left: 0px;
            overflow: hidden;
            a {
                color: #8d8d91;
                font-size: 14px;
                line-height: 14px;
                height: 14px;
                float: left;
                border-right: 1px solid #e0e0e0;
                padding: 0 18px;
                margin: 17px 0;
               &.on{color: #fc8080;}
               &:last-child{border-right: 0 none;}
            }
        }
    }
}
.waterfall_Div{
    position: relative;
}
#waterfall_Container{
  position: absolute;    /*必须*/
  top:60px;              /*top必须，大小可控制*/
  bottom:0;              /*bottom必须，一直延申到当前块底部*/
  width:100%;
  margin-top: 20px;
}
</style>


