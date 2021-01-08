<template>
  <div class="entity-box">
<!--   操作的部分-->
    <div class="execute-box">
<!--      size 表示大小 size  尺寸  string  medium  small  mini
        type   表示按钮的颜色 primary / success / warning / danger / info / text
        plain : 是否镂空
        round : button是否圆角显示

-->
      <el-form :inline="true">
        <el-form-item label="返厂出库单号">
          <el-input v-model="searchForm.id"></el-input>
        </el-form-item>
        <el-form-item label="返厂出库标志">
          <el-select v-model="searchForm.returnMark" placeholder="全部">
            <el-option label="全部" value="全部"></el-option>
            <el-option label="已出库" value="已出库"></el-option>
            <el-option label="未出库" value="未出库"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态">
          <el-select v-model="searchForm.approverStatus" placeholder="全部">
            <el-option label="全部" value="全部"></el-option>
            <el-option label="未审核" value="未审核"></el-option>
            <el-option label="已通过" value="已通过"></el-option>
            <el-option label="未通过" value="未通过"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="制单人">
          <el-input v-model="searchForm.creatorName"></el-input>
        </el-form-item>
      <el-button-group>
        <el-button size="mini" type="danger" @click="editDialog=true;formData={}">新增出库单</el-button>
        <el-button size="mini" type="danger" @click="delDialog=true">导出</el-button>
      </el-button-group>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="制单时间">
          <el-col :span="11">
            <el-date-picker type="date"  v-model="searchForm.addStartTime" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-date-picker type="date"  v-model="searchForm.addEndTime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="审批时间">
          <el-col :span="11">
            <el-date-picker type="date"  v-model="searchForm.approverStartTime" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-date-picker type="date"  v-model="searchForm.approverEndTime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-button size="mini" type="danger" @click="findByConditions">搜索</el-button>
        <el-button size="mini" type="danger" @click="delDialog=true">删除</el-button>
      </el-form>
    </div>
    <div class="search-box">

    </div>

    <div class="table-box" >
      <el-table
          ref="dataTable"
          :data="tableData"
          stripe
          border
          tooltip-effect="light"
          style="width: 100%"
          @selection-change="selectionChangeListenter"
      >
        <el-table-column type="selection" width="55" align="center"/>

        <el-table-column prop="id" label="id" align="center"/>

        <el-table-column prop="returnMark" label="返厂出库标志" align="center"/>

        <el-table-column prop="creatorName" label="制单人" align="center" />

        <el-table-column prop="addTime" label="制单时间" align="center"  />

        <el-table-column prop="approverName" label="审批人" align="center"  />

        <el-table-column prop="approverTime" label="审批时间" align="center"  />

        <el-table-column prop="approverStatus" label="审批状态" align="center" show-overflow-tooltip />


        <el-table-column align="center" label="操作">
<!--          想要取值 必须要把按钮加在 template标签中-->
          <template v-slot="obj">
          <el-button size="mini" type="primary" @click="editDialog=true;findById(obj.row.id)" >查看</el-button>
            <el-button size="mini" type="danger" v-if="obj.row.approverStatus!='已审核'">修改</el-button>
          <el-button size="mini" type="danger" >审核跟踪</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-box">
<!--      page-size 表示每一页大小 默认是10
  current-page 表示当前页 默认是1 current-page是几 第几页亮
-->
      <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          @current-change="pageChange"
          :total="total">
      </el-pagination>
    </div>
<!--    新建或者编辑弹出框-->
    <el-dialog
        title="实体操作"
        :visible.sync="editDialog"
        width="60%"
        >

      <el-form ref="form" label-width="100px" size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item label="运营商名称">
              <el-input v-model="formData.supplierName " placeholder="运营商名称"></el-input>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人">
              <el-input v-model="formData.supplierContact " ></el-input>
            </el-form-item>
          </el-col>
        </el-row>


        <el-form-item label="联系方式">
          <el-input v-model="formData.supplierPhone "></el-input>
        </el-form-item>

        <el-form-item label="公司邮箱">
          <el-input v-model="formData.supplierEmail " ></el-input>
        </el-form-item>

        <el-form-item label="地址">
          <el-input v-model="formData.supplierAddress " ></el-input>
        </el-form-item>

        <el-form-item label="开户行">
          <el-input v-model="formData.supplierBrank " ></el-input>
        </el-form-item>

        <el-form-item label="银行卡号">
          <el-input v-model="formData.supplierBrankCode " ></el-input>
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
    <span>确定删除？ {{ids}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="delDialog = false" size="mini">取 消</el-button>
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
