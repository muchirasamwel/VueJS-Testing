<template>
    <div>
        <label >First Name</label><br>
        <input type="text" id="fname" v-model="name.fname"><br>
        <label >Second Name</label><br>
        <input type="text" id="sname" v-model="name.sname"><br>
        <label >Third Name</label><br>
        <input type="text" id="tname" v-model="name.tname"><br>
        <button id="combinename" @click="combineName">Compute names</button>
        <label id="combinedname">{{combined}}</label><br>
        <button id="countnames" @click="countName">Count Name</button><label id="namelen">{{nameLen}}</label>
    </div>
</template>
<style>
    #combinedname,#namelen{
        font-weight: bold;
        color: blue;
    }
</style>
<script>
    export default {
        data(){
            return{
                name:{},
                combined:'',
                nameLen:'0'
            }
        },
        methods:{
            combineName:function () {
                return this.combined="*"+this.name.fname+"***"+this.name.sname+"*";
            },
            countName:function () {
                this.nameLen="*"+(this.name.fname.length)+"@"+(this.name.sname)+"*";
            }
        }
    }
</script>