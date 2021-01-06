import category from "@/api/category";
export default {
    name: "index",
    data() {
        return {
            tableData: [],
            // currentPage:1,
            // pageSize:5,
            // total:0,
            editDialog:false,
            formData:{},
            ids:[],
            delDialog:false,
            props: {
                label: 'categoryName',
                children: 'children'
            },
            treeData:[],
            list:[],
        }
    },
    created() {
        this.findAll();
    },
    methods:{
        async findAll(){
            let response = await category.getTreeData();
            console.log(response)
            this.tableData=response;
            this.treeData=response;

        },
        async addOrEdit(){
            if (this.formData.id){
                //修改
               await category.updateEntity(this.formData);
            }else {
                //新增
                await category.addEntity(this.formData);
            }
            await this.findAll()
        },
        // pageChange(page){
        //     this.currentPage=page;
        //      this.findAll();
        // },
        async findById(id){
            this.formData=await category.findById(id);
        },
        // selectionChangeListenter(selection){
        //     this.ids=[];
        //     selection.forEach(item=>this.ids.push(item.id));
        //     console.log(this.ids)
        // },
        async deleteByIds(){
            if (this.ids.length===0){
                this.$notify.error({
                    title: '错误',
                    message: '请选中想要删除的内容'
                });
            }else {
                //this.$refs.dataTable.clearSelection();
                await category.deleteByIds(this.ids);
                await this.findAll();
            }
        },
        handleCheckChange(data, checked) {
            let indexs=this.list.indexOf(data.id);
            if (indexs<0&& this.list.length===1 &&checked){
                this.$refs.tree.setChecked(data,false)
            }else if (this.list.length===0&&checked){
                this.list=[];
                this.list.push(data.id);
            }else if (indexs>=0&&this.list.length===1&&!checked){
                this.list=[];
            }
            this.formData.parentid=data.id;
            console.log(data);
        },

    }
}































