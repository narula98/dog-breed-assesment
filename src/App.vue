<template>
  <div id="app">
      <nav class="navbar navbar-expand-sm navC">
        
      <router-link :to="{name:'home'}" class="navbar-brand" exact>Dog Breed</router-link>  
        <ul class="navbar-nav">
      </ul>
   </nav>
    <router-link to='' exact></router-link>
   <router-view/>
 </div>
</template>

<script>

//import HomePage from "./components/HomePage"
export default {
name: 'App',
  components: {

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
.navC{
  background-color: blueviolet; 
  font-weight: bold;
  padding: 25px !important;
  
}
.navC a{
  color: bisque;
  float: right;
}
</style>
