<template>
  <div class="">
    <div class="container">
        
          <div class="card error-page alert-danger">
            <div class="card-header ">{{errorName}}</div>
            <div class="card-body">
              <h3 class="card-title">OOPS</h3>
              <p class="card-text">{{errorMessage|capitalize}}</p>
            </div>
          </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    errorName:{
        default:'Error 404'
    },
    errorMessage:{
        default:'Page Not found'
  }}
};
</script>

<style scoped>

.error-page{
    margin-top: 20px;
}

</style>