<template>
    <el-container class="app-header-box">
        <el-main class="app-header-main ui-flex">
            <el-aside class="app-header-logo-box"
                      width="100px">
                <img src="../assets/img/default.png"
                     alt="">
            </el-aside>
            <div class="">
                ssss
            </div>
        </el-main>
    </el-container>
</template>
<script type="text/javascript">

export default {
    name: 'app-header',
    data() {
        return {
            mini: false,
            isFullScreen: false
        }
    },
    methods: {

    }
}
</script>
<style type="text/css">
.app-header-box {
    height: 100%;
    background: #16aad8;
}

.app-header-box .app-header-main {
    padding: 0;
    width: 1200px;
    height: 100%;
    overflow: visible;
    margin: 0 auto;
    justify-content: flex-start;
    align-items: flex-start;
}
.app-header-logo-box {
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 100%;
}
.app-header-logo-box img {
    width: 100%;
    height: 100%;
}
</style>