import axios from 'axios';

export function getAllDogsList() {
    return axios.get("https://dog.ceo/api/breeds/list/all");
}

export function getDogRandomImage(dogname) {
    return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random`);
  }

export function getDogImageUrlList(breedName){
    return  axios.get('https://dog.ceo/api/breed/'+breedName+'/images')
}