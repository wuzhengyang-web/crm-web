import axios from "../utils/baseAxios"
let category={

    getTreeData(){
        return axios.get(`category/getTreeData`)
    },
    /**
     * findAll
     */
    findAll(currentPage,pageSize){
       return  axios.get(`category?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    /**
     * findById
     */
    findById(id){
        return axios.get(`category/${id}`);
    },
    addEntity(entity){
        return axios.post(`category`,entity);
    },
    updateEntity(entity){
        return axios.put(`category`,entity);
    },
    deleteByIds(ids){
       return  axios.delete(`category/${ids}`)
    }

}

export default category;
