<template>
    <div class="movie">
        aaa
        <router-link to="/movie/now">正在热播</router-link>
        <router-link to="/movie/coming">即将上映</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Movie",
    data(){
        return{}
    },
    methods:{},
    created(){}

}
</script>

<style scoped>
.movie{
    margin-top: .5rem
}
</style>