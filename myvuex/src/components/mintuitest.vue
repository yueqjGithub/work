<template>
  <div>
    <button @click = 'toast'>Toast</button>
    <p>
      <button>cloase</button>
    </p>
    <mt-loadmore>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <p class="names">
            {{item.name}}
          </p>
          <p class="orders">
            {{item.id}}
          </p>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
// eslint-disable-next-line
import {Toast, Indicator, Loadmore} from 'mint-ui'
// eslint-disable-next-line
import getUrl from './api/http'
export default {
  name: '',
  data () {
    return {
      list: [],
      isLoadSuc: false,
      page: 1,
      limit: 10,
      isLoaded: false
    }
  },
  methods: {
    toast: function () {
      let vm = this
      if (!vm.isLoaded) {
        vm.IndChange('加载中')
        getUrl.getMsg(vm.page, vm.limit).then(function (res) {
          for (let k of res.data.data) {
            vm.list.push(k)
          }
          vm.isLoadSuc = true
          vm.IndChange()
          if (res.data.length === vm.limit) {
            vm.page++
          } else if (res.data.length < vm.limit) {
            vm.isLoaded = true
          }
        }).catch(e => {
          console.log(e)
        })
      } else if (vm.isLoaded) {
        Toast('没有更多了')
      }
    },
    IndChange: function (tit) {
      let vm = this
      if (!vm.isLoadSuc) {
        Indicator.open(tit)
      } else {
        setTimeout(() => {
          Indicator.close()
        }, 1000)
        vm.isLoadSuc = false
      }
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  height: .5rem;
  line-height: .5rem;
}
  .names {
    flex:1;
  }
  .orders{
    flex: 2;
    text-align: right;
  }
</style>
