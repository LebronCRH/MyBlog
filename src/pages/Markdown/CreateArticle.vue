<template>
    <div id="main">
        <mavon-editor v-model="value" @save="saveMavon" ref="editor"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Menushow:false,
            serachShow:false,
            value:'',
        }
    },
    mounted(){

    },
    computed: {

    },
    methods:{
        saveMavon(value,render){
            
          console.log("this is render"+render);
          console.log("this is value"+value);
        },
    },
    watch:{
        value:function(value){
            // console.log(this.$refs.editor.d_render)
        }
    }
}
</script>
<style lang="scss" scoped>
.v-note-wrapper{
    min-height:100vh;
}
</style>


