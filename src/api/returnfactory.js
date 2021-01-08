import axios from "../utils/baseAxios"
let returnFactory={
    /**
     * findAll
     */
    findAll(currentPage,pageSize){
       return  axios.get(`returnFactory?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    findByConditions(currentPage,pageSize,entity){
        return  axios.post(`returnFactory/searchByConditions?currentPage=${currentPage}&pageSize=${pageSize}`,entity)
    },

    /**
     * findById
     */
    findById(id){
        return axios.get(`returnFactory/${id}`);
    },
    addEntity(entity){
        return axios.post(`returnFactory`,entity);
    },
    updateEntity(entity){
        return axios.put(`returnFactory`,entity);
    },
    deleteByIds(ids){
       return  axios.delete(`returnFactory/${ids}`)
    }

}

export default returnFactory;
