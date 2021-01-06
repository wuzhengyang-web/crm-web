<template>
  <div class="entity-box">
    <!--   操作的部分-->
    <div class="execute-box">
      <!--      size 表示大小 size  尺寸  string  medium  small  mini
              type   表示按钮的颜色 primary / success / warning / danger / info / text
              plain : 是否镂空
              round : button是否圆角显示

      -->

      <el-button-group>
        <el-button size="mini" type="danger" @click="editDialog=true;formData={}">新建</el-button>
        <el-button size="mini" type="danger" @click="delDialog=true">删除</el-button>
      </el-button-group>
    </div>
    <div class="search-box">

    </div>

    <div class="table-box">
      <el-table
          ref="dataTable"
          :data="tableData"
          row-key="id"
          stripe
          border
          tooltip-effect="light"
          style="width: 100%"
          :tree-props="{children: 'children'}">

        <el-table-column prop="id" label="id" align="center"/>

        <el-table-column prop="categoryName" label="分类名称" align="center"/>

        <el-table-column prop="categoryDesc" label="分类描述" align="center"/>

        <el-table-column prop="parentid" label="父级Id" align="center"/>


        <!--        <el-table-column prop="supplierAddress" label="地址" align="center" show-overflow-tooltip />-->

        <el-table-column align="center" label="操作">
          <!--          想要取值 必须要把按钮加在 template标签中-->
          <template v-slot="obj">
            <el-button size="mini" type="primary" @click="editDialog=true;findById(obj.row.id)">编辑</el-button>
            <el-button size="mini" type="danger"
                       @click="delDialog=true;$refs.dataTable.clearSelection();ids=[];ids.push(obj.row.id)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-box">
      <!--      page-size 表示每一页大小 默认是10
        current-page 表示当前页 默认是1 current-page是几 第几页亮
      -->
   <!--   <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          @current-change="pageChange"
          :total="total">
      </el-pagination>-->
    </div>
    <!--    新建或者编辑弹出框-->
    <el-dialog
        title="实体操作"
        :visible.sync="editDialog"
        width="60%"
    >

      <el-form ref="form" label-width="100px" size="small">

        <el-form-item label="分类名称">
          <el-input v-model="formData.categoryName " placeholder="分类名称"></el-input>
        </el-form-item>

        <el-form-item label="分类描述">
          <el-input v-model="formData.categoryDesc "></el-input>
        </el-form-item>

        <el-form-item label="选择父级">
          <el-tree
              :data="treeData"
              :props="props"
              node-key="id"
              show-checkbox
              ref="tree"
              check-strictly=true
              @check-change="handleCheckChange">
          </el-tree>
        </el-form-item>



      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="editDialog = false" size="mini">取 消</el-button>
    <el-button type="success" size="mini" @click="editDialog = false;addOrEdit()">确 定</el-button>
  </span>
    </el-dialog>
    <!--    删除弹框-->
    <el-dialog
        title="温馨提示"
        :visible.sync="delDialog"
        width="30%"
    >
      <span>确定删除？ {{ ids }}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="delDialog = false;ids=[]" size="mini">取 消</el-button>
    <el-button type="success" size="mini" @click="delDialog = false;deleteByIds()">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script src="./index.js">

</script>

<style scoped lang="less">
@import "./index";
</style>
