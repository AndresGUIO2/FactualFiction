export class ChapterModel {
  public name: string;
  public chapterUrl: string;
  public id?: string;
  
  constructor(name: string, chapterUrl: string, id?:string ) {
    this.name = name;
    this.chapterUrl = chapterUrl;
    this.id = id;
  }
}
