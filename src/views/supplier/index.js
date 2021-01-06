import supplier from "@/api/supplier";
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
            let response = await supplier.findAll(this.currentPage,this.pageSize);
            this.tableData=response.list;
            this.total=response.total;
        },
        async addOrEdit(){
            if (this.formData.id){
                //修改
               await supplier.updateEntity(this.formData);
            }else {
                //新增
                await supplier.addEntity(this.formData);
            }
            await this.findAll()
        },
        pageChange(page){
            this.currentPage=page;
             this.findAll();
        },
        async findById(id){
            this.formData=await supplier.findById(id);
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
                await supplier.deleteByIds(this.ids);
                await this.findAll();
            }
        }

    }
}
