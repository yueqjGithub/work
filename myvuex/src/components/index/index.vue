<template>
  <div>
    <p>
      {{msg}}{{count}}
    </p>
    <p>
      {{licence}}
    </p>
    <p>
      {{arrList[0].student}}
    </p>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: '',
  data () {
    return {
      msg: 'i am index'
    }
  },
  computed: mapState({
    count: function () {
      return this.$store.state.count
    },
    licence: function () {
      return this.$store.state.licence
    },
    arrList: function () {
      return this.$store.getters.arrList
    }
  }),
  methods: {
    increment: function () {
      this.$store.dispatch('increment')
      this.$router.push({path: '/games'})
    }
  }
//  mounted: function () {
//    console.log(this.$store.getters.getNum)
//  }
}
</script>

<style scoped>

</style>
