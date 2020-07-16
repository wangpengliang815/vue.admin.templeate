<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="文本框">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="下拉选择">
        <el-select v-model="form.region" placeholder="选择你所在的城市">
          <el-option label="上海" value="shanghai" />
          <el-option label="北京" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期选择">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="选择日期"
            style="width: 100%;"
          />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            type="fixed-time"
            placeholder="选择时间"
            style="width: 100%;"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="开关">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="多选">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="唱" name="type" />
          <el-checkbox label="跳" name="type" />
          <el-checkbox label="Rap" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="单选">
        <el-radio-group v-model="form.resource">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本域">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="上传支持多选">
        <el-upload
          class="upload-demo"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过xxkb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      fileList: [
        {
          name: "test1.jpeg",
          url:
            ""
        },
        {
          name: "test2.jpeg",
          url:
            ""
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$message("测试假的!");
    },
    onCancel() {
      this.$message({
        message: "测试假的!",
        type: "warning"
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
