import axios from "../utils/baseAxios"
let returngoods={
    /**
     * findAll
     */
    findAll(currentPage,pageSize){
       return  axios.get(`returnGoods?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     * findById
     */
    findById(id){
        return axios.get(`returnGoods/${id}`);
    },
    addEntity(entity){
        return axios.post(`returnGoods`,entity);
    },
    updateEntity(entity){
        return axios.put(`returnGoods`,entity);
    },
    deleteByIds(ids){
       return  axios.delete(`returnGoods/${ids}`)
    }

}

export default returngoods;
