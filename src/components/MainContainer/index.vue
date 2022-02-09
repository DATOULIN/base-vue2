<template>
    <div class="mainContainer">
        <div class="header" v-show="headerShow">
            <div style="display: flex;align-items: center">
                <slot name="header"></slot>
            </div>
            <div v-show="searchShow">
                <el-form inline>
                    <el-form-item label="督办内容">
                        <el-input v-model="searchForm.name" style="width: 300px;" placeholder="请输入要搜索的督办内容"
                                  clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="small" type="primary" @click="search">高级检索</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <div class="form">
            <slot name="table"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            searchShow: {
                type: Boolean,
                default: false
            },
            headerShow: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                searchForm: {
                    name: ''
                }
            }
        },
        methods: {
            search() {
                this.$emit('search', this.searchForm)
            }
        }
    };
</script>
<style lang="scss" scoped>
    .mainContainer {
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;

        .header {
            background: #fff;
            border-radius: 4px;
            padding: 10px 20px;
            border: 1px solid #ececec;
            display: flex;
            justify-content: space-between;
        }

        .form {
            background: #fff;
            border-radius: 4px;
            padding: 20px;
            margin-top: 10px;
            box-sizing: border-box;
            border: 1px solid #ececec;
        }
    }
</style>
<style>
    .mainContainer .el-form-item {
        margin-top: 9px !important;
        margin-bottom: 9px !important;
    }
</style>
