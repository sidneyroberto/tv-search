export class Series {
    private _id: number
    private _name: string
    private _language: string
    private _genres: string
    private _status: string
    private _premiered: Date
    private _country: string
    private _thumbURL: string

    constructor(seriesObj: any) {
        this._id = seriesObj['id']
        this._name = seriesObj['name']
        this._language = seriesObj['language']
        this._genres =
            seriesObj['genres']
                ? seriesObj['genres'].join(', ')
                : 'No genres informed'
        this._status = seriesObj['status']
        this._premiered = new Date(seriesObj['premiered'])
        const channelObj =
            seriesObj['network']
                ? seriesObj['network']
                : seriesObj['webChannel']
        this._country =
            channelObj['country']
                ? channelObj['country']['name']
                : 'No country informed'
        this._thumbURL =
            seriesObj['image']
                ? seriesObj['image']['medium']
                : 'noimage'
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get language() {
        return this._language
    }

    get genres() {
        return this._genres
    }

    get status() {
        return this._status
    }

    get premiered() {
        return this._premiered
    }

    get country() {
        return this._country
    }

    get thumbURL() {
        return this._thumbURL
    }
}