import axios from "../utils/baseAxios"
let returndetail={
    /**
     * findAll
     */
    findAll(currentPage,pageSize){
       return  axios.get(`returnDetail?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     * findById
     */
    findById(id){
        return axios.get(`returnDetail/${id}`);
    },
    addEntity(entity){
        return axios.post(`returnDetail`,entity);
    },
    updateEntity(entity){
        return axios.put(`returnDetail`,entity);
    },
    deleteByIds(ids){
       return  axios.delete(`returnDetail/${ids}`)
    }

}

export default returndetail;
