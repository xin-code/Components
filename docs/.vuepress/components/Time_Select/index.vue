<template>
  <div>
    <div>1.一周内时间可以自由选择</div>

    <!--时间选择器组件 -->
    <div>

      <table border="1px">
        <!-- 顶部提示项 -->
        <tr>
          <th rowspan="2">星期/时间</th>
          <th colspan="12">0:00-12:00</th>
          <th colspan="12">12:00-23:00</th>
        </tr>

        <tr>
          <!-- 具体时间 -->
          <td v-for="hour in hours">{{hour}}</td>
        </tr>

        <!-- 主体部分 -->
        <tr v-for="(week,weekIndex) in weeks">
          <td class="week">{{week}}</td>

          <!-- 单元格 -->
          <td v-for="(hour,hourIndex) in hours" @click="onClickHour(weekIndex,hourIndex)"></td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      weeks:['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
      hours:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
    }
  },
  methods:{
    onClickHour(week, hour){
      console.log(week, hour);
    }
  }

}
</script>

<style>
table {
  width: 123%;
  margin-left: -100px;
}
</style>