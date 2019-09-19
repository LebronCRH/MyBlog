<template>
<Row :gutter="16" type="flex" justify="center">
    <Col span="12">
        <div id="main" v-html="htmlContext">
        </div>
    </Col>
    <Col span="3">

    </Col>
</Row>
</template>

<script>
import {html} from '@/utils/index'
export default {
    data(){
        return{
            Menushow:false,
            serachShow:false,
            htmlContext:html
        }
    },
    mounted(){

    },
    computed: {

    },
    methods:{

    },
}
</script>
<style lang="scss" scoped>
.v-note-wrapper{
    min-height:100vh;
}
</style>


