<template>
    <div>
        <input type="text" v-model="calc.input1" id="inp1">
        <input type="text" v-model="calc.input2" id="inp2">
        <button @click="add">Add</button>
        <label >Results : {{sum}}</label>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                calc:{},
                sum:0
            }
        },
        methods:{
            add:function () {
                this.sum=0;
                try {
                    let results=parseInt(this.calc.input1)+parseInt(this.calc.input2);
                    this.sum=results;
                }
                catch(e){

                }
            },
            mult:function () {
                this.calc.mult=this.calc.input1*this.calc.input2;
               // return this.calc.mult;
            }
        }
    }
</script>