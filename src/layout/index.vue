<template>
    <el-container style="width: 100%; height: 100%">
        <el-header class="header" height="70px">
            <div class="header-title">管理系统</div>
        </el-header>
        <el-main style="padding: 0">
            <div :class="classObj" class="app-wrapper">
                <div
                    v-if="device === 'mobile' && sidebar.opened"
                    class="drawer-bg"
                    @click="handleClickOutside"
                />
                <sidebar class="sidebar-container" />
                <div class="main-container">
                    <div :class="{ 'fixed-header': fixedHeader }">
                        <navbar />
                    </div>
                    <app-main />
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
    name: "Layout",
    components: {
        Navbar,
        Sidebar,
        AppMain
    },
    mixins: [ResizeMixin],
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar;
        },
        device() {
            return this.$store.state.app.device;
        },
        fixedHeader() {
            return this.$store.state.settings.fixedHeader;
        },
        classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                mobile: this.device === "mobile"
            };
        },
    },
    methods: {
        handleClickOutside() {
            this.$store.dispatch("app/closeSideBar", {
                withoutAnimation: false
            });
        },
        focusIt(menuType) {
            this.$store.dispatch("menu/changeMenu", menuType).then(() => {
                this.$router.push({ name: menuType });
            });
        }
    },

};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.header {
    background-color: #027db4;
    color: #fff;
    display: flex;
    padding: 0;
    justify-content: space-between;

    .header-title {
        width: 280px;
        height: 100%;
        line-height: 70px;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
    }

}

.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}

.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
}

.hideSidebar .fixed-header {
    width: calc(100% - 54px);
}

.mobile .fixed-header {
    width: 100%;
}
</style>
