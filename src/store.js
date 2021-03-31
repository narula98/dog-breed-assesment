
import {getAllDogsList,getDogRandomImage,getDogImageUrlList} from './dogApi.service';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        breeds:[],
        dogs:[],
        imageUrls:[],
        breedName:null    
    },

    mutations:{

        updateBreeds(state,breeds){
            state.breeds = breeds
        },
        updateDogs(state,dogs){
            state.dogs.push(dogs);
        },
        updateBreedName(state,name) {
            state.breedName = name
        },
        updateImageUrls(state,url){
            state.imageUrls.push(url)
        }

    },
    actions:{

       getAllDogs({commit,state}){
        const response = getAllDogsList();
        response.then((result)=>{
            commit('updateBreeds',result.data.message);
            for (const property in state.breeds) {
                var imgUrl;
             
                const urlResponse = getDogRandomImage(property)
                
                  urlResponse.then((res) => {
                    imgUrl = res.data.message;
             
                    const dogObj = {
                      name: property,
                      img: imgUrl,
                      subBreed: state.breeds[property]+'',
                    };
             
                    commit('updateDogs',dogObj)
                  }).catch((error)=>{console.log(error)});
                }            
        }).catch((error)=>{console.log(error)})
    } ,

     getImageUrls({commit,state}){
        
        
        const response = getDogImageUrlList(state.breedName);
        response.then((result)=>{
            const urls = result.data.message;
            console.log(urls)
            for(const property in urls){
                commit('updateImageUrls',urls[property])
            }
            
  //          console.log("State array "+state.imageUrls)
        }).catch((error)=>{console.log(error)})
    }

    },

    getters:{
        getUrls(state){
            return state.imageUrls;
        },

        getSubBreedList(state){
            return function (breedName){
                return state.breeds[breedName]
            }     
        }
    }
})