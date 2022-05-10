<template>
  <div>
    <el-form ref="form" :model="form" label-width="50px" class="form">
      <el-form-item label="名称" class="form-item">
        <el-input v-model="value.name" class="input"></el-input>
        <el-button @click="onClickDevice">设备</el-button>
      </el-form-item>

      <el-form-item label="选项" class="form-item">
        <el-select v-model="value.subName" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-form-item>
    
    </el-form>
    
    <!-- 内部弹窗dialog组件 -->
    <Dialog @dialogData="onSaveDialogData" ref="dialog" />
  
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  components:{
    Dialog,
  },
  props:{
    value:{
      type:Object,
      default:()=>{},
    },
  },
  data(){
    return {
      // 固定选择框
      options:[
        {label:'张三',value:'1'},
        {label:'李四',value:'2'},
      ],
      form:{},
      visible:false,
    }
  },
  watch:{
  },
  methods:{
    onSaveDialogData(item){
      Object.assign(this.value,item)
    },
    onClickDevice(){
      this.$refs.dialog.open()
    }
  }
}
</script>

<style scoped>
.form {
  width: 800px;
}
.input {
  width: 200px;
}
.form-item {
  display: inline-block;
}
</style>