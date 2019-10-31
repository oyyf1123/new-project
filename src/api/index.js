/* 
    将接口统一管理，为了将来更好的维护和更新
*/
import ENV from './config'

const BACK_END_URL = ENV.DEV.BACK_END_URL


/* 
    后端接口文档中

        店铺添加地址   /shop
*/


const API = {
    // 猫眼正在热映列表数据
    movieHotList: `${BACK_END_URL}/ajax/movieOnInfoList`,
    //亲亲网分类列表数据
    categoryList: `${ BACK_END_URL }/index.php`,
    //亲亲网详情页数据渲染
    detailsList: `${ BACK_END_URL }/api/goods/get-similar-goods`,
    treesList: `${ BACK_END_URL }/mock/home/treesList.json`
}


export default API