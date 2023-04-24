export class ChapterModel {
  public name: string;
  public chapterUrl: string;
  public index: string;
  public id?: string;
  
  constructor(name: string, chapterUrl: string, index: string, id?:string ) {
    this.name = name;
    this.chapterUrl = chapterUrl;
    this.id = id;
    this.index = index;
  }
}
