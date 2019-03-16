<template>
    <el-container class="app-container">
        <el-container style="overflow-x: auto">
            <el-header class="app-header">
                <app-header></app-header>
            </el-header>
            
            <el-main class="app-body">
                <el-container>
                    <el-main class="app-page-body">
                        <router-view></router-view>
                    </el-main>
                    <el-footer class="app-footer">
                        <app-footer></app-footer>
                    </el-footer>
                </el-container>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
export default {
    name: 'app-view',
    components: {
        AppFooter,
        AppHeader,
    },
}
</script>

<style scoped>
.app-container {
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
}
.app-container .app-header {
    padding: 0;
    background: #fff;
    overflow: visible;
}

.app-container .app-body {
    background: #ecf0f5;
    padding: 0;
}
.app-container .app-footer {
    background: #fff;
    border-top: solid 1px rgba(48, 54, 62, 0.14);
}
.app-container .app-page-body {
    overflow: visible;
    padding: 0px;
}
.app-header-logo-box {
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.app-header-logo-box .header-logo {
    height: 42px;
    margin-top: -17px;
    margin-right: 5px;
    vertical-align: middle;
}
.app-header-logo-box .header-logo-text {
    color: #293436;
    font-size: 20px;
    font-weight: bold;
    opacity: 1;
}

/*mini-side*/
.app-container.mini-side .app-side {
    overflow: visible;
}
.app-container.mini-side .app-side .el-menu--collapse {
    width: 60px;
}
.app-container.mini-side .header-logo {
    margin-left: -10px;
}
.app-container.mini-side .header-logo-text {
    opacity: 0;
}
/*hide-side*/
.app-container.hide-side .app-side {
    display: none;
}
</style>