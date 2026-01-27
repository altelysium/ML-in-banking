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
  <div class="map-container">
    <l-map :useGlobalLeaflet="false" v-model:zoom="zoom" :center="location">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
        name="OpenStreetMap"></l-tile-layer>
      <l-marker :lat-lng="location"> </l-marker>
    </l-map>
  </div>
</template>

<style>
.map-container {
  min-height: 400px;
  min-width: 400px;
}

@media (max-width: 890px) {
  .map-container {
    min-height: 300px;
    min-width: 300px;
  }
}

@media (max-width: 785px) {

  .transaction-block__value {
    font-size: 12px;
  }

  .transaction-block-row__key {
    width: 90px;
  }
}

@media (max-width: 4500px) {
  .map-container {
    min-height: 200px;
    min-width: 200px;
  }
}
</style>