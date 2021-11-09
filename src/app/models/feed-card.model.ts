export interface IFeedCard {
    title? : string,
    description? : string,
    source? : string
}

export class FeedCard {
    public title : string;
    public description : string;
    public source: string;
    constructor(feedCard : FeedCard){
        this.title = feedCard.title;
        this.description = feedCard.description;
        this.source = feedCard.source;
    }
}