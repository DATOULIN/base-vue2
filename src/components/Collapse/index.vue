<template>
    <div class="ui-collapse">
        <header @click="toggle">
            <i class="el-collapse-icon el-icon-arrow-down"></i>
            <span>title</span>
        </header>
        <div class="container" :style="{height,maxHeight}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isOpen: true,
            height: "auto",
            maxHeight: "900px"
        }
    },
    methods:{
        toggle(){
            this.isOpen = !this.isOpen
            if(!this.isOpen){
                this.height = 0
                this.maxHeight = 0
            }else{
                this.height = "100px",
                this.maxHeight = "900px"
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.ui-collapse{
    width:100%;
    background-color: #fff;
    header{
        cursor: pointer;
    }
    .container{
        height: auto;
        overflow: hidden;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1)
    }
}
</style>
