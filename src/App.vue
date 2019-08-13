<template>
  <div id="app">
        <Header/>
        <router-view></router-view>
        <TabBar/>
  </div>
</template>

<script>

import TabBar from "components/tabBar"
import Header from "components/header"
export default {
    name:"App",
    components:{
      TabBar,Header
    }
}
</script>

<style lang="scss">

</style>
