<template>
    <div v-if="getSubBreeds">               
         <div class="container">
                <div class="card subBreed">
                    <h3 class="card-header"> Sub Breeds for {{breedName|capitalize}}</h3>
                    <ul class="list-group list-group-flush" v-for="(subBreed,index) in getSubBreeds" :key="index">
                        <li class="list-group-item">{{subBreed|capitalize}}</li>
                    </ul>   
                </div>
        </div>
    </div>
</template>

<script>
export default {

    created(){
        this.$store.dispatch('getAllDogs')
       },

    updated(){
        console.log(typeof(this.getSubBreeds))
        if(typeof(this.getSubBreeds)==='undefined'){
                this.$router.push({
                    name:'error',
                    params:{
                        errorName:'Error 404',
                        errorMessage:` Breeds name ${this.breedName} not found`
                    }
                })
        }
       this.checkIfListEmpty();    
       
    },
    
    errorCaptured(err,vm,info){
        console.log("Error captured working"+ err + " "+ vm+ " "+ info)
        this.$router.push({
                    name:'error',
                    params:{
                        errorName:'Error 404',
                        errorMessage:`Breed Name ${this.breedName} does not exist`
                    }
                })
    }
    ,
    name:'SearchBreed',
    props: ['breedName'],
    computed: {

        getSubBreeds(){
            return this.$store.getters.getSubBreedList(this.breedName)
        }
    },
    methods: {
        checkIfListEmpty(){
            if(this.getSubBreeds.length == 0){
                this.$router.push({
                    name:'error',
                    params:{
                        errorName:'Error 404',
                        errorMessage:`Sub Breeds for ${this.breedName} not found`
                    }
                })
            }
        }
    },
}
</script>

<style scoped>

.subBreed{
    margin-top: 25px;
}

</style>