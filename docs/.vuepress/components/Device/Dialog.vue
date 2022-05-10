<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="visible"
      width="30%">

      <span>这将会传递给父组件{'name':'1', 'two':'', 'three':''}</span>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      visible: false
    }
  },
  methods:{
    open(){
      this.visible = true
    },
    cancel(){
      this.visible = false
    },
    save(){
      this.$emit('dialogData',{'name':'1', 'two':'', 'three':''})
      this.visible = false
    }
  }
}
</script>

<style>
</style>