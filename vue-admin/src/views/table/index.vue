<template>
  <div class="app-container">
    <h4>不分页</h4>
    <el-table
      v-loading="listLoading"
      :data="noPageList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- ---------------------------------------- -->
    <h4>分页</h4>
    <el-table
      v-loading="listLoading"
      :data="pageList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 10, 20, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getListNoPage, getListPage } from "@/api/table";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      noPageList: null,
      pageList: null,
      listLoading: true,
      currentPage: 1, //初始页
      pagesize: 3, // 每页的数据
      total: 1
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getListNoPage().then(response => {
        this.noPageList = response.data.items;
      });
      getListPage().then(response => {
        this.pageList = response.data.items.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
        this.total = response.data.items.length;
      });
      this.listLoading = false;
    },
    // pageSize 改变时会触发
    handleSizeChange: function(size) {
      this.pagesize = size;
      this.getData(this.currentPage, this.pagesize);
    },
    //current-change
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      this.getData(this.currentPage, this.pagesize);
    },
    getData: function(currentPage, pageSize) {
      this.listLoading = true;
      this.pageList = null;
      getListPage().then(response => {
        this.pageList = response.data.items.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
        this.total = response.data.items.length;
      });
      this.listLoading = false;
    }
  }
};
</script>
