<template>
  <div>
    <!--<button @click = 'toast'>Toast</button>-->
    <p>
      <button>cloase</button>
    </p>
    <mt-loadmore :top-method='topLoad' :bottom-method="bottomLoad" ref="loadmore" :bottom-all-loaded="isLoaded" :autoFill="autofill" :distanceIndex=1>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div v-if="!item.vediosrc" class="normalMsg">
            <p class="names">
              {{item.name}}
            </p>
            <p class="orders">
              {{item.id}}
            </p>
          </div>
          <div v-if="item.vediosrc" class="player">
            <p>{{item.vediosrc}}</p>
            <videoPlayer :src="item.vediosrc"></videoPlayer>
          </div>
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
import videoPlayer from './player.vue'
export default {
  name: '',
  components: {
    videoPlayer: videoPlayer
  },
  data () {
    return {
      list: [],
      isLoadSuc: false,
      page: 1,
      limit: 10,
      isLoaded: false,
      autofill: true
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    bottomLoad: function () {
      let vm = this
      if (!vm.isLoaded) {
        vm.IndChange('加载中')
        getUrl.getMsg(vm.page, vm.limit).then(function (res) {
          console.log(res)
          for (let k of res.data.data) {
            vm.list.push(k)
          }
          vm.isLoadSuc = true
          vm.IndChange('加载中')
          if (vm.list.length < res.data.len) {
            vm.page++
          } else if (vm.list.length === res.data.len) {
            vm.isLoaded = true
          }
          vm.$refs.loadmore.onBottomLoaded()
        }).catch(e => {
          console.log(e)
        })
      } else if (vm.isLoaded) {
        Toast('没有更多了')
      }
    },
    topLoad: function () {
      let vm = this
      getUrl.getMsg(1, 10).then(function (res) {
        vm.list = res.data.data
        vm.page = 2
        vm.IndChange('加载中')
        vm.isLoaded = false
        vm.$refs.loadmore.onTopLoaded()
        vm.IndChange('加载完成')
      })
    },
    IndChange: function (tit) {
      let vm = this
      if (!vm.isLoadSuc) {
        Indicator.open(tit)
        vm.isLoadSuc = true
      } else {
        setTimeout(() => {
          Indicator.close()
        }, 1000)
        vm.isLoadSuc = false
      }
    }
  },
  created: function () {
    this.bottomLoad()
  }
}
</script>

<style scoped>
li {
  min-height: .5rem;
  width:100%;
  line-height: .5rem;
}
.normalMsg{
  display: flex;
  width:100%;
}
  .names {
    flex:1;
    padding-left: .05rem;
  }
  .orders{
    flex: 2;
    text-align: right;
    padding-right: .05rem;
  }
  .player{
    width:90%;
    margin:0 auto;
  }
</style>
