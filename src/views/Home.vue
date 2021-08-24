<template>
  <div id="container">
    <div id="searchArea">
      <input
        type="text"
        placeholder="Type the name of the series"
        v-model="filtro"
        @keyup="search"
      />
    </div>
    <div id="resultsArea">
      <SeriesCard
        v-for="series in seriesFound"
        v-bind:key="series.id"
        :series="series"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import { SeriesStore } from "../store/modules/SeriesStore";
import store from "../store/index";
import { Series } from "@/models/Series";
import SeriesCard from "../components/SeriesCard.vue";

@Options({ components: { SeriesCard } })
export default class Home extends Vue {
  filtro: string = "";
  seriesStore = getModule(SeriesStore, store);

  search() {
    this.seriesStore.searchSeries(this.filtro);
  }

  get seriesFound(): Series[] {
    return this.seriesStore.seriesFound;
  }
}
</script>

<style lang="scss">
@import "../globals";

#container {
  padding: 20px;
}

#searchArea {
  margin: auto auto 50px auto;
  text-align: center;

  input {
    width: 35%;
    height: 30px;
    border-radius: 15px;
    border: 2px solid #aaa;
    padding-left: 15px;
    font-family: $font-main;

    &:focus {
      outline: none;
      border: 2px solid #ccc;
      box-shadow: 2px 2px 5px #c5eff7, -2px -2px 5px #c5eff7;
    }
  }
}

#resultsArea {
  display: flex;
  flex-wrap: wrap;
}
</style>
