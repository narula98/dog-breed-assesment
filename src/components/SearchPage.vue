<template>
    <div class="container">
        <div v-if="checkIfImageExist">
            <div class="row">
            <div class="col-md-4 images" v-for="(url,index) in pageOfItems" :key="index">
                <img :src="url" :alt="url" width="250px" height="150px"/>
            </div>
        </div>
    <div class="card text-center m-3">
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="imageUrl" @changePage="onChangePage" :pageSize="9"></jw-pagination>
        </div>
    </div>
        </div>
        <div>
            <h3 class="text-danger">{{errorMessage}}</h3>
        </div>
        
    </div>
</template>

<script>
//import axios from "axios";
import {getDogImageUrlList} from '../dogApi.service';
export default {
    created(){
 
    const response = getDogImageUrlList(this.breedName);
     response.then((result)=>{
            this.imageUrl = result.data.message;
       
        }).catch((err)=>{
            console.log(err);
            this.checkIfImageExist = false;
            this.errorMessage = err
        });
},
    name: 'SearchPage',
    props: ['breedName'],
   data(){
        return{
            imageUrl:[],
            pageOfItems: [],
            checkIfImageExist:true,
            errorMessage:''
        }
    },
    methods:{
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
    }
}
</script>

<style scoped>
.images{
    margin-top: 20px;
    padding: 20px;
}
</style>