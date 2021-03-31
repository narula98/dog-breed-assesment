<template>
<div>
<div v-if="noError" class="home container">
    <div class="row ">
        <div class="col-md-5 form-div">
         <h4>Search Sub Breeds By Breed Name:</h4>
          <form class="form formC" id="searchForm" @submit.prevent="sendToSearch()">
            <div class="form-group search">
              <input class="form-control"  type="text" name="breedName" v-model="$v.breedName.$model" :class="{'is-invalid':validationStatus($v.breedName)}"  placeholder="Search By dog breed "/>
              <div v-if="!$v.breedName.model" class="invalid-feedback"> Breed Name is required </div>
              <button class="btn btn-primary">Search</button>
            </div>

          </form>
        </div>
          <div class="col-md-5 form-div offset-md-1">
         <h4>Search Images By Breed Name:</h4>
          <form class="form formC" id="searchForm" @submit.prevent="sendToSearchImages()">
            <div class="form-group search">
              <input class="form-control"  type="text" name="breedName" v-model="$v.breedName1.$model" :class="{'is-invalid':validationStatus($v.breedName)}"  placeholder="Search By dog breed "/>
              <div v-if="!$v.breedName.model" class="invalid-feedback"> Breed Name is required </div>
              <button class="btn btn-primary">Search</button>
            </div>

          </form>
        </div>
    </div>
      <div class="row">  
          <div v-for="(dog,index) in pageOfItems" :key="index" class="col-md-3 col-lg-3 col-sm-3 col-xl-3 dogList">
                <router-link :to="{name:'search',params:{breedName:dog.name}}">
                  <img :src="dog.img" :alt="dog.img" class="img-responsive dogImage" width="200px" height="200px">
                  </router-link>
                <p>{{dog.name}}</p>
          </div>
      </div>
  <div class="card text-center m-3">
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="dogs" @changePage="onChangePage" :pageSize="9"></jw-pagination>
        </div>
    </div>
  </div>

<div>
  <h3 class="text-danger">{{errorMessage}}</h3>
</div>

</div>
  
</template>

<script>

//import {getAllDogsList,getDogRandomImage} from '../dogApi.service';
import { required} from 'vuelidate/lib/validators'

export default {
created(){
this.$store.dispatch('getAllDogs')

this.breeds=this.$store.state.breeds
this.dogs = this.$store.state.dogs;

console.log("From the state in component "+this.breeds)

},


name: 'HomePage',
  props: {
    msg: String
  },

  data(){
    return {
      breeds:[{
      }],
      dogs:[],
      breedName:'',
      breedName1:'',
      pageOfItems: [],
      noError:true,
      errorMessage:''
    }
  },


  validations:{
    breedName:{required},
    breedName1:{required}
  },

  methods:{
    
     validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

    onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },

    sendToSearch(){
      

      console.log("The breed name is: "+this.breedName)

  this.$router.push({
          name:'subBreed',
          params:{
            breedName:this.breedName
          }
        });  
    },

    sendToSearchImages(){
      this.$router.push({
          name:'search',
          params:{
            breedName:this.breedName1
          }
        });
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.dogList{
  padding: 0 !important;
  margin-top: 15px;
  border: 1px solid grey;
  margin-left: 40px;
  background-color: #d3d3d361;
  text-align: center;
}

.search{
  padding: 20px;
}
.search button{
  margin: 5px;
}
.formC{
  margin-top: 25px;
}
.home h4{
  margin-top: 20px;
}
.form-div{
  box-shadow: 0 0 5px 0 grey;
  margin-top: 10px;
}

@media only screen and (max-width: 480px) {
  .dogImage {
    width: 310px;
    height: 185px;
  }  
}

@media only screen and (max-width: 768px){
  .dogImage {
    width: 170px;
    height: 185px;
  }
}

</style>
