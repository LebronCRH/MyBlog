import request from '@/config/request' //引入axios的封装方法
import {baseUrl} from '@/config/env'

export const MarkdownUploadImages = (params) => {
 return request('post', baseUrl+'/api/BlogArticle/MarkdownUploadImages', params) //获取信息
}
export const AddBlogArticle=(params)=>{
    return request('post', baseUrl+'/api/BlogArticle/AddBlogArticle', params) //获取信息
}
///获取所有的技术类型
export const GetTechniclaAllData=(params)=>{
    return request('get', baseUrl+'/api/Technical/GetTechniclaAllData', params) //获取信息
}
///获取技术类型获取该文集的所有博客文章数据
export const GetBlogArticleByTechnical=(params)=>{
    return request('get', baseUrl+'/api/BlogArticle/GetBlogArticleByTechnical', params) //获取信息
}
///新建博客文章
export const CreateNewBlogArticle=(params)=>{
    return request('get', baseUrl+'/api/BlogArticle/CreateNewBlogArticle', params) //获取信息
}
///更新博客文章
export const UpdateBlogArticle=(params)=>{
    return request('post', baseUrl+'/api/BlogArticle/UpdateBlogArticle', params) //获取信息
}