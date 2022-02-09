<template>
    <section class="app-main">
        <transition >
            <router-view :key="key"/>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'blank',
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style scoped>
    .app-main {
        /*50 = navbar  */
        /*min-height: calc(100vh - 100px);*/
        height: calc(100vh - 130px);
        width: 100%;
        position: relative;
        overflow: auto;
        background-color: #F6F8FA;
    }

    .fixed-header + .app-main {
        padding-top: 50px;
    }
</style>

<style lang="scss">
    // fix css style bug in open el-dialog

</style>
