import brand from "@/api/brand";
export default {
    name: "index",
    data() {
        return {
            tableData: [],
            currentPage:1,
            pageSize:5,
            total:0,
            editDialog:false,
            formData:{},
            ids:[],
            delDialog:false,
        }
    },
    created() {
        this.findAll();
    },
    methods:{
        async findAll(){
            let response = await brand.findAll(this.currentPage,this.pageSize);
            this.tableData=response.list;
            this.total=response.total;
        },
        async addOrEdit(){
            if (this.formData.id){
                //修改
               await brand.updateEntity(this.formData);
            }else {
                //新增
                await brand.addEntity(this.formData);
            }
            await this.findAll()
        },
        pageChange(page){
            this.currentPage=page;
             this.findAll();
        },
        async findById(id){
            this.formData=await brand.findById(id);
        },
        selectionChangeListenter(selection){
            this.ids=[];
            selection.forEach(item=>this.ids.push(item.id));
            console.log(this.ids)
        },
        async deleteByIds(){
            if (this.ids.length===0){
                this.$notify.error({
                    title: '错误',
                    message: '请选中想要删除的内容'
                });
            }else {
                //this.$refs.dataTable.clearSelection();
                await brand.deleteByIds(this.ids);
                await this.findAll();
            }
        }

    }
}
