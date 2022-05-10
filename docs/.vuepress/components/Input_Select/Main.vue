<template>
  <div>
    form{{form}}
    <template v-for="(item,index) in form.target">
      <div :key="index">
        <Combine  :value="form.target[index]" />
        <el-button v-if="index!==0" @click="onClickDelete(index)" icon="el-icon-delete" class="delete">删除</el-button>
        <el-button v-if="index===form.target.length-1" @click="onClickAdd" icon="el-icon-plus">新增</el-button>
      </div>
    </template>
  </div>
</template>

<script>
import Combine from './Combine.vue'
export default {
  name: 'App',
  components: {
    Combine,
  },
  data(){
    return{
      form:{
        target:[
          {
          "name": "",
          "subName": ""
          }
        ]
      }
    }
  },
  methods: {
    onClickAdd(){
      this.form.target.push({
          "name": "",
          "subName": ""
      })
    },
    onClickDelete(index){
      console.log('点击删除了第'+index+'个')
      this.form.target.splice(index,1)
    }
  }
}
</script>

<style>
.delete {
  margin-bottom: 10px;
}
</style>
