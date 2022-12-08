<template>
    <GoogleMap class="map" api-key="AIzaSyAU8TmfOrcYFnueIKID2uqF9JWlf0yOcrs" :center="center" :zoom="15">
      <Marker :options="{ position: center }" />
      <slot></slot>
    </GoogleMap>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { GoogleMap, Marker } from "vue3-google-map";
  
  export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
     const center = { lat: 29.981911, lng: 31.287955 };
  
      return { center };
    },

});
  </script>

  <style scoped>
  .map {
    width: 50%;
    height: 200px;
    margin: auto;
    padding: 10px;
  }
  </style>