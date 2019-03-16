<template>
    <div>
        <div class="group">
            顶顶顶顶
        </div>
    </div>
</template>
<script>
// import { NavBar, CellGroup, SwitchCell } from 'vant';
export default {
    components: {
        // [NavBar.name]: NavBar,
        // [CellGroup.name]: CellGroup,
        // [SwitchCell.name]: SwitchCell,
    },
    data() {
        return {
            debug: false
        }
    },
    watch: {
        debug(a) {
            if (a) {
                localStorage.setItem('debug', 'debug')
            } else {
                localStorage.removeItem('debug')
            }
        }
    },
    mounted() {
        let that = this;
        let debug = localStorage.getItem('debug');
        if (debug) {
            that.debug = true;
        }
    }
}
</script>

<style scoped>
.group {
    margin-top: 5px;
}
</style>
