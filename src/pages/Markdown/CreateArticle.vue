<template>
    <div id="main">
        <Row>
            <i-col span="4" v-show="!MarkdownFullStatus">
                <div class="LeftControlCenter">
                    <div class="GoBackHome" @click="GoBackHome">回首页</div>
                    <div class="CreateArticleType"><i class="fa fa-plus"></i>新建文集</div>
                    <ul class="ul_ArticleTypeList">
                        <li class="li_Type" v-for="Technical in TechniclaAllData" :class="CurrentSelectDevLangage==Technical.devLanguage.devLanguageID?'active':''" @click="ChangeDevLanguage(Technical.devLanguage.devLanguageID)">
                            <div class="Content">
                                <span>{{Technical.devLanguage.devLanguageName}}</span>
                                <Poptip placement="bottom-end">
                                    <i class="fa fa-cog" aria-hidden="true"></i>
                                    <ul class="Edit_list" slot="content">
                                        <li class="Edit_item"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>修改文集
                                        </li>
                                        <li class="Edit_item"><i class="fa fa-trash" aria-hidden="true"></i>删除文章</li>
                                    </ul>
                                </Poptip>
                            </div>
                            <ul class="ul_ChildTechnical animated1s bounceInLeft" v-show="CurrentSelectDevLangage==Technical.devLanguage.devLanguageID">
                                <li class="li_ChildTechnical" v-for="TechnicalItem in Technical.technicalList" :class="CurrentSelectTechnical==TechnicalItem.technicalId?'active':''" @click="ChangeTechnical(TechnicalItem.technicalId)">
                                    <span>{{TechnicalItem.technicalName}}</span>
                                    <Poptip placement="bottom-end">
                                        <i class="fa fa-cog" aria-hidden="true"></i>
                                        <ul class="Edit_list" slot="content">
                                            <li class="Edit_item"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>修改文集
                                            </li>
                                            <li class="Edit_item"><i class="fa fa-trash" aria-hidden="true"></i>删除文章</li>
                                        </ul>
                                    </Poptip>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </i-col>
            <i-col span="6" v-show="!MarkdownFullStatus">
                <div class="CreateArticle" @click="CreateNewBlogArticle">
                    <i class="fa fa-plus-circle" aria-hidden="true"></i><span>新建文章</span>
                </div>
                <ul class="ul_ArticleList" v-if="CurrentEditArticle">
                    <li class="li_ArticleItem" v-for="item in TechnicalArticleList" :class="CurrentEditArticle.articleId==item.articleId?'active':''" @click="ChangeArticleEdit(item)">
                        <i class="icon"></i>
                        <div class="Edit_Container" @click.stop="">
                        <Poptip placement="bottom-end">
                        <div class="Edit" v-show="CurrentEditArticle.articleId==item.articleId">
                            <i class="fa fa-gear"></i>
                        </div>
                        <ul class="Edit_list" slot="content">
                            <li class="Edit_item"><i class="fa fa-share" aria-hidden="true"></i>直接发布</li>
                            <li class="Edit_item" @click.stop="OpenEditModal()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>编辑标题/简介</li>
                            <li class="Edit_item"><i class="fa fa-floppy-o" aria-hidden="true"></i>添加至历史版本</li>
                            <li class="Edit_item"><i class="fa fa-folder-open" aria-hidden="true"></i>移动文章</li>
                            <li class="Edit_item"><i class="fa fa-clock-o" aria-hidden="true"></i></i>历史版本</li>
                            <li class="Edit_item"><i class="fa fa-trash" aria-hidden="true"></i>删除文章</li>
                        </ul>
                        </Poptip>
                        </div>
                        <span class="Title">{{item.articleTitle}}</span>
                        <span class="Content">{{item.articleIntroduce}}</span>
                        <div class="_29C-V" v-show="CurrentEditArticle.articleId==item.articleId">
                            <span>字数:{{item.articleMarkdownContent?item.articleMarkdownContent.length:0}}</span>
                            <span>创建时间:{{MomentToString(item.articleCreateTime)}}</span>
                            <!-- <span>更新时间:{{MomentToString(item.articleLastUpdateTime)}}</span> -->
                        </div>
                    </li>
                </ul>
            </i-col>
            <i-col :span=MarkdownFullStatus?24:14>
                <mavon-editor v-show="MavonEditorShow" v-model="value" @save="saveMavon" @subfieldToggle="subfieldToggle" @imgAdd="$imgAdd" @imgDel="$imgDel" :subfield="subfield" ref="editor"/>
                <div v-show="!MavonEditorShow" class="BlogSpan"><span>My Blog</span></div>
            </i-col>
        </Row> 

        <Modal v-model="EditTitleModal" title="标题/简介编辑" @on-ok="ok" @on-cancel="cancel" v-if="CurrentEditArticle">
            <ul class="ul_EditTitle">
                <li class="li_EditTitle">
                    <span>文章标题：</span>
                    <i-input v-model="CurrentEditModalInfo.articleTitle" placeholder="请输入..." style="width:500px"></i-input>
                </li>
                <li class="li_EditTitle">
                    <span>文章子标题：</span>
                    <i-input v-model="CurrentEditModalInfo.articleSubTitle" placeholder="请输入..." style="width:500px"></i-input>
                </li>
                <li class="li_EditTitle">
                    <span>文章简介：</span>
                    <i-input v-model="CurrentEditModalInfo.articleIntroduce" type="textarea" :rows="10" placeholder="请输入..." style="width:500px;"></i-input>
                </li>
            </ul>
        </Modal>
    </div>
</template>

<script>
import {MarkdownUploadImages,AddBlogArticle,GetTechniclaAllData,GetBlogArticleByTechnical,CreateNewBlogArticle,UpdateBlogArticle} from '@/server/api'
import moment from 'moment'
import debounce from 'lodash/debounce';
import { async } from 'q';
export default {
    data(){
        return{
            Menushow:false,
            serachShow:false,
            subfield:false,
            value:'',
            MarkdownFullStatus:false,
            CurrentEditArticle:null,//当前选中的编辑文章
            img_file: {},
            TechniclaAllData:[],//所有的文章技术集
            CurrentSelectDevLangage:0,//当前页面选择的技术大类
            CurrentSelectTechnical:0,//当前页面选择的技术
            TechnicalArticleList:[],
            EditTitleModal:false,
            MavonEditorShow:true,
            FillteChangeArticleDelImageFileStatus:true,//用来判断当前删除文章中的图片是真删除(点击编辑器内的删除图片文件),还是假删除(切换文章编辑是变换编辑器内的图片文件),true为真删除,false为假删除
            CurrentEditModalInfo:{
                articleTitle:'',
                articleSubTitle:'',
                articleIntroduce:''
            }
        }
    },
    mounted(){
        this.GetTechniclaAllData();
        // this.CurrentEditArticle=this.TechnicalArticleList[0];
        console.log(moment(new Date()));
    },
    computed: {

    },
    methods:{
        async saveMavon(value,render){
            await this.uploadimg();//先等待将当前编辑器中的图片上传后再进行保存博客文章信息
            // console.log(this.$refs.editor.value);
            this.CurrentEditArticle.articleMarkdownContent=this.$refs.editor.value;
            this.CurrentEditArticle.articleHtmlContent=this.$refs.editor.d_render;
            UpdateBlogArticle(this.CurrentEditArticle).then(res=>{
                if(res.data.success){
                    this.$Message.info('保存成功');
                }else{
                    this.$Message.info('保存失败');
                }
            }).catch(err=>{
                this.$Message.info('保存异常');
            })
        },
        //想要编辑的时候就立刻保存的方法使用防抖函数在停止输入的多少秒钟执行保存
        // change:debounce((value,render)=>{
        //     console.log("1234567");
        // },2000),
        GetTechniclaAllData(){
            GetTechniclaAllData().then(res=>{
                if(res.data.success)
                {
                    console.log(res.data);
                    this.TechniclaAllData=res.data.data;
                    console.log(this.TechniclaAllData);
                    //初始化高亮选中的技术大类和文集
                    this.CurrentSelectDevLangage=this.TechniclaAllData.length>0?this.TechniclaAllData[0].devLanguage.devLanguageID:0;
                    this.CurrentSelectTechnical=this.TechniclaAllData[0]?(this.TechniclaAllData[0].technicalList[0]?this.TechniclaAllData[0].technicalList[0].technicalId:0):0;
                }else{
                    console.log("获取所有技术类型异常");
                }
            })
        },
        GetBlogArticleByTechnical(){
            GetBlogArticleByTechnical({id:this.CurrentSelectTechnical}).then(res=>{
                if(res.data.success)
                {
                    this.TechnicalArticleList=res.data.data;
                    let list=res.data.data;
                    this.CurrentEditArticle=this.TechnicalArticleList.length>0?list[0]:null;
                    //初始化选中第一篇文章，让后台按时间降序排列显示最近的文章
                    console.log(this.img_file);
                }else{
                    console.log("获取所有技术类型异常");
                }
            })
        },
        //创建新博客文章
        CreateNewBlogArticle(){
            CreateNewBlogArticle({id:1,type:this.CurrentSelectTechnical}).then(res=>{
                if(res.data.success)
                {
                    this.TechnicalArticleList.unshift(res.data.data);
                    this.CurrentEditArticle=res.data.data;
                }
            })
        },
        OpenEditModal(){
            this.EditTitleModal=true;
            this.CurrentEditModalInfo.articleTitle=this.CurrentEditArticle.articleTitle;
            this.CurrentEditModalInfo.articleSubTitle=this.CurrentEditArticle.articleSubTitle;
            this.CurrentEditModalInfo.articleIntroduce=this.CurrentEditArticle.articleIntroduce;
        },
        GoBackHome(){
            this.$router.push('/');
        },
        subfieldToggle(status,value){
            this.MarkdownFullStatus=status;
        },
        async ChangeArticleEdit(item){
            if(this.CurrentEditArticle.articleId==item.articleId)return;
            this.CurrentEditArticle.articleMarkdownContent=this.$refs.editor.value;
            console.log(this.$refs.editor.$refs.toolbar_left.img_file);
            // if(this.img_file[this.CurrentEditArticle.articleId])
            // {
            //     // console.log("假删除");
            //     this.FillteChangeArticleDelImageFileStatus=false;
            //     await Object.keys(this.img_file[this.CurrentEditArticle.articleId]).forEach(pos=>{
            //         this.$refs.editor.$refs.toolbar_left.$imgDelByFilename(this.img_file[this.CurrentEditArticle.articleId][pos].name);
            //     })
            // }
            await this.RemoveCurrentEditArticleImageFiles();
            console.log("恢复可能的真删除");
            this.CurrentEditArticle=item;
            if(this.img_file[this.CurrentEditArticle.articleId])
            {
                await Object.keys(this.img_file[this.CurrentEditArticle.articleId]).forEach(pos=>{
                    this.$refs.editor.$refs.toolbar_left.$imgAddByFilename(pos,this.img_file[this.CurrentEditArticle.articleId][pos]);
                })
            }
            this.FillteChangeArticleDelImageFileStatus=true;
        },
        //编辑文章切换时，先移除编辑器可能存留的当前文章内的图片文件（在img_file有存没有保存上传的文件，在切换回时会又存入编辑器中）
        async RemoveCurrentEditArticleImageFiles(){
            if(!this.CurrentEditArticle) return;
            if(this.img_file[this.CurrentEditArticle.articleId])
            {
                // console.log("假删除");
                this.FillteChangeArticleDelImageFileStatus=false;
                await Object.keys(this.img_file[this.CurrentEditArticle.articleId]).forEach(pos=>{
                    this.$refs.editor.$refs.toolbar_left.$imgDelByFilename(this.img_file[this.CurrentEditArticle.articleId][pos].name);
                })
            }
        },
        $imgAdd(pos, $file){
            // 缓存图片信息
            console.log("add",pos,$file);
            // this.img_file[pos] = $file;
            this.img_file[this.CurrentEditArticle.articleId]?null:(this.img_file[this.CurrentEditArticle.articleId]={});
            this.img_file[this.CurrentEditArticle.articleId][pos]=$file;
        },
        $imgDel(pos){
            console.log("delete",pos);
            if(this.FillteChangeArticleDelImageFileStatus)//判断当前是否为真删除
            {
                delete this.img_file[this.CurrentEditArticle.articleId][pos[2]];
                console.log(this.img_file);
            }
            // delete this.img_file[pos[0]];
            // console.log(this.img_file);
        },
        async uploadimg(){
            // 第一步.将图片上传到服务器.
            console.log(this.img_file);
            if(this.img_file[this.CurrentEditArticle.articleId]&&Object.keys(this.img_file[this.CurrentEditArticle.articleId]).length != 0)
            {
                var formdata = new FormData();
                formdata.append('ArticleType','ArticleType');
                for(var _img in this.img_file[this.CurrentEditArticle.articleId]){
                    formdata.append(_img, this.img_file[this.CurrentEditArticle.articleId][_img]);
                }
                await MarkdownUploadImages(formdata).then(res=>{
                    console.log(res);
                    if(res.data.success){
                        res.data.data.forEach(item=>{
                            console.log("1");
                            this.$refs.editor.$img2Url(parseInt(item.pos),item.path);
                        })
                        console.log("2");
                        console.log(this.$refs.editor.$refs.toolbar_left.img_file);
                        this.DeleteEditorImage(res.data.data);//模拟mavon-editor的内部逻辑流程
                    }
                })
            }
        },
        DeleteEditorImage(list){
            list.forEach(item=>{
                console.log(item);
                let flag=true;
                let pos=0;
                while(flag)
                {
                    console.log(this.$refs.editor.$refs.toolbar_left.img_file,pos);
                    console.log(this.$refs.editor.$refs.toolbar_left.img_file[pos]);
                    if(this.$refs.editor.$refs.toolbar_left.img_file[pos][0]==item.path){
                        this.$refs.editor.$refs.toolbar_left.img_file.splice(pos, 1);
                        this.$refs.editor.$refs.toolbar_left.num--;
                        delete this.img_file[this.CurrentEditArticle.articleId][item.pos];//删除当前文章内缓存中的图片文件
                        flag=false;
                    }
                    pos += 1;
                }
            })
        },
        ChangeDevLanguage(val){
            this.CurrentSelectDevLangage=val;
            console.log(this.CurrentSelectDevLangage);
        },
        ChangeTechnical(val){
            this.CurrentSelectTechnical=val;
        },
        ok () {
            this.$Message.info('点击了确定');
            this.CurrentEditArticle.articleTitle=this.CurrentEditModalInfo.articleTitle;
            this.CurrentEditArticle.articleSubTitle=this.CurrentEditModalInfo.articleSubTitle;
            this.CurrentEditArticle.articleIntroduce=this.CurrentEditModalInfo.articleIntroduce;
            this.CurrentEditArticle.articleMarkdownContent=this.value;
            this.CurrentEditArticle.articleHtmlContent=this.$refs.editor.d_render;
            UpdateBlogArticle(this.CurrentEditArticle).then(res=>{
                if(res.data.success){
                    this.$Message.info('修改成功');
                }else{
                    this.$Message.info('修改失败');
                }
            }).catch(err=>{
                this.$Message.info('修改异常');
            })
        },
        cancel () {
            this.$Message.info('点击了取消');
        },
        MomentToString(val)
        {
            return moment(val).format("YYYY-MM-DD HH:mm:ss");
        },
        Test(){
            // this.$refs.editor.$refs.toolbar_left.$imgDelByFilename("0pwmm4.png");
            console.log(this.$refs.editor.$refs.toolbar_left.$imgAddByFilename("0pwmm4.png",this.img_file[1]));
        }
    },
    watch:{
        value:function(value){
            // console.log(this.img_file);
            // console.log(this.$refs.editor.value);
            // console.log(this.$refs.editor.d_render)
        },
        CurrentEditArticle:function(val){
            if(val){
                this.value=val.articleMarkdownContent?val.articleMarkdownContent:'';
                this.MavonEditorShow=true;
            }else{
                this.value='';
                this.MavonEditorShow=false;
            }
        },
        CurrentSelectTechnical:async function(val){
            if(val){
                await this.RemoveCurrentEditArticleImageFiles();
                this.img_file={};
                this.GetBlogArticleByTechnical(val)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
/deep/ .v-note-wrapper{
    min-height:100vh;max-height:100vh;z-index:1000;
    .v-show-content{
        background-color: #fcfaf2;
    }
}
/deep/ .ivu-poptip-body{padding:0px;}
/deep/ .ivu-poptip-popper{z-index:900;}
.animated1s{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.BlogSpan{
    width:100%;height:100vh;background-color: #f2f2f2;display:flex;
    align-items:center;justify-content:center;
    span{
        font-size: 64px;
        color: #e6e6e6;
        text-shadow: 0 1px 0 #fff;
    }
}
.LeftControlCenter{
    width:100%;
    background-color: #404040;
    color: #f2f2f2;height:100vh;
    padding-top: 20px;
    font-size: 14px;overflow:hidden;
    .GoBackHome{
        width:90%;height:44px;border-radius:22px;border: 1px solid rgba(236,114,89,.8);font-size: 15px;
        line-height: 44px;margin:0 auto;text-align: center;color: #ec7259;cursor: pointer;transition:all 0.5s;
        &:hover{
            border: 1px solid rgba(236,114,89,1);
        }
    }
    .CreateArticleType{
        height:40px;line-height:40px;padding:0px 15px;cursor: pointer;
        margin-top:10px;
        i{font-size:13px;margin-right:5px;}
    }
    .ul_ArticleTypeList{
        list-style:none;width:100%;cursor: pointer;
        .li_Type{
            .Content{
                display:flex;justify-content:space-between;align-items:center;height:40px;line-height:40px;padding:0px 25px 0px 15px;
                border-left: 3px solid #ec7259;padding-left:12px;
                &:hover{background-color: #666;}
            }
            &.active{
                .Content{
                    background-color: #666;border-left: 3px solid #94ec59;
                }
            }
            .Edit_list{
                list-style:none;border-radius:4px;
                background:#fff;
                .Edit_item{
                    height:40px;line-height:40px;padding:0px 20px;border-bottom: 1px solid #666;color: #595959;position: relative;
                    font-size:13px;
                    i{margin-right:5px;}
                    &:hover{
                        color:#fff;background:#666;
                    }
                }
            }
            .ul_ChildTechnical{
                list-style:none;width:90%;margin-left:10%;background-color: #555;
                .li_ChildTechnical{
                    height:35px;line-height:35px;display:flex;justify-content:space-between;align-items:center;padding:0px 25px 0px 15px;
                    border-left: 3px solid #ec7259;padding-left:12px;
                    &.active{
                        border-left: 3px solid #94ec59;padding-left:12px;background-color: #333;
                    }
                }
            }
        }
    }
}
.CreateArticle{
    height:60px;line-height:60px;padding:0px 25px;border-bottom:solid 1px #ddd;font-size:15px;color: #595959;cursor: pointer;
    i{font-size:17px;margin-right:5px;}
}
.ul_ArticleList{
    list-style:none;
    .li_ArticleItem{
        position: relative;
        height: 90px;
        color: #595959;
        background-color: #fff;
        margin-bottom: 0;
        padding: 15px 10px 15px 60px;
        -webkit-box-shadow: 0 0 1px 0px #d9d9d9;
        box-shadow: 0 0 1px 0px #d9d9d9;
        border-left: 5px solid transparent;
        list-style: none;
        line-height: 60px;
        cursor: pointer;
        box-sizing: border-box;
        &.active{
            border-left-color: #ec7259;background-color: #e6e6e6;
        }
        &:hover{background-color: #e6e6e6;}
        .icon{
            position: absolute;
            top: 30px;
            left: 20px;
            width: 30px;
            height: 30px;
            background: url(../../../static/images/icon/articleicon.png);background-size: cover;
        }
        .Edit_Container{
            position: relative;float:right;
        }
        .Edit{
            font-size: 16px;float:right;
            width: 40px;
            text-align: center;
            position: relative;
            min-height: 30px;
            max-height: 50px;
        }
        .Edit_list{
            list-style:none;border-radius:4px;
            background:#fff;
            .Edit_item{
                height:40px;line-height:40px;padding:0px 20px;border-bottom: 1px solid #d9d9d9;color: #595959;
                font-size:13x;
                i{margin-right:5px;}
                &:hover{
                    color:#fff;background:#404040;
                }
            }
        }
        .Title{
            display: block;font-size: 18px;height: 30px;line-height: 30px;margin-right: 40px;overflow: hidden;-o-text-overflow: ellipsis;text-overflow: ellipsis;white-space: nowrap;
        }
        .Content{
            display: block;
            height: 30px;
            line-height: 30px;
            margin-right: 40px;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        ._29C-V {
            position: absolute;
            bottom: 2px;
            left: 5px;right:5px;
            font-size: 9px;
            line-height: 16px;
            color: #595959;
            display:flex;justify-content:space-between;
        }
    }
}
.ul_EditTitle{
    list-style:none;
    .li_EditTitle{
        display:flex;
        align-items:center;
        span{min-width:100px;text-align:right;padding:0px 5px;font-size:13px;}
        margin-bottom:10px;
    }
}
</style>


