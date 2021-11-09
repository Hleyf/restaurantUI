export interface IContentSection {
    imgPath? : string,
    title? : string,
    extra: string,
    path: string
}

export class ContentSection implements IContentSection { 
    public imgPath : string;
    public title : string;
    public extra : string;
    public path : string;

    constructor(contentSection: { imgPath: string; title: string; extra: string; path: string; }){
        this.imgPath = contentSection.imgPath;
        this.title = contentSection.title;
        this.extra = contentSection.extra;
        this.path = contentSection.path;
    }
}