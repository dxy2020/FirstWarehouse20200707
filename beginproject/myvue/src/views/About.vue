<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getClassInfo">获取学生信息</button>
  </div>
</template>

<script>
import {getClassInfomation} from '@/api/class'
export default {
  methods: {
    getClassInfo () {
      getClassInfomation({ userName: 21 }).then(res => {
        console.log('res: ', res.data)
      })
    },
  }
}
</script> -->