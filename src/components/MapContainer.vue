<script>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    coordinates: Array,
  },
  data() {
    return {
      zoom: 10,
    };
  },
  computed: {
    location() {
      return this.coordinates;
    }
  }
};
</script>

<template>
  <div style="height:100%; width:100%">
    <l-map :useGlobalLeaflet="false" v-model:zoom="zoom" :center="location">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
        name="OpenStreetMap"></l-tile-layer>
      <l-marker :lat-lng="location"> </l-marker>
    </l-map>
  </div>
</template>

<style></style>