<template>
  <div id="container">
    <div id="thumbArea">
      <img
        :src="series.thumbURL != 'noimage' ? series.thumbURL : imageNotFound"
        alt="Series Folder"
      />
    </div>
    <div id="detailsArea">
      <p>Name: {{ series.name }}</p>
      <p>Country: {{ series.country }}</p>
      <p>Genres: {{ series.genres }}</p>
      <p>Language: {{ series.language }}</p>
      <p>Status: {{ series.status }}</p>
      <p>Premiered on: {{ series.premiered.toLocaleDateString("pr-BR") }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import { SeriesStore } from "../store/modules/SeriesStore";
import store from "../store/index";
import noimage from "../assets/img/noimage.png";
import { Series } from "@/models/Series";

export default class SeriesDetails extends Vue {
  seriesStore = getModule(SeriesStore, store);
  imageNotFound = noimage;

  get series(): Series {
    return this.seriesStore.chosenSeries;
  }
}
</script>

<style lang="scss" scoped>
#container {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}

#thumbArea {
  width: 40%;
  text-align: center;

  img {
    width: 50%;
  }
}

#detailsArea {
  width: 60%;
  font-size: 120%;
}
</style>