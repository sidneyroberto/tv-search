import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators"
import axios from 'axios'
import { Series } from "@/models/Series"

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

@Module({ name: "SeriesStore" })
export class SeriesStore extends VuexModule {
    private _series: Series[] = []
    private _chosenSeries!: Series

    get seriesFound() {
        return this._series
    }

    get chosenSeries() {
        return this._chosenSeries
    }

    @Action
    updateChosenSeries(series: Series) {
        this.context.commit('_updateChosenSeries', series)
    }

    @Action
    async searchSeries(filter: string) {
        const response = await http.get('/', { params: { q: filter } })
        const data = response.data
        if (data) {
            const series = data.map((result: any) => new Series(result['show']))
            this.context.commit('_updateSeries', series)
        } else {
            this.context.commit('_updateSeries', [])
        }
    }

    @Mutation
    _updateChosenSeries(series: Series) {
        this._chosenSeries = series
    }

    @Mutation
    _updateSeries(series: Series[]) {
        this._series = series
    }
}