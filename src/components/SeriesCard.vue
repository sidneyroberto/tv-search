<template>
  <div class="seriesCard">
    <router-link to="/series" @click.prevent="updateChosenSeries">
      <img
        :src="series.thumbURL != 'noimage' ? series.thumbURL : imageNotFound"
        alt="Series Folder"
      />
    </router-link>
    <router-link to="/series" @click.prevent="updateChosenSeries">
      <span class="seriesName">{{ series.name }}</span>
    </router-link>
    <span class="seriesPremiere"
      >Premiered: {{ series.premiered.toLocaleDateString("pt-BR") }}</span
    >
  </div>
</template>

<script lang="ts">
import { Series } from "@/models/Series";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import noimage from "../assets/img/noimage.png";
import { SeriesStore } from "../store/modules/SeriesStore";
import store from "../store/index";

export default class SeriesCard extends Vue {
  @Prop()
  series!: Series;

  seriesStore = getModule(SeriesStore, store);

  imageNotFound = noimage;

  updateChosenSeries() {
    this.seriesStore.updateChosenSeries(this.series);
  }
}
</script>

<style lang="scss" scoped>
.seriesCard {
  width: 20%;
  margin-bottom: 50px;
  text-align: center;

  img {
    width: 80%;
  }

  span {
    display: block;
  }

  .seriesName {
    font-size: 120%;
  }

  .seriesPremiere {
    font-size: 90%;
  }
}
</style>