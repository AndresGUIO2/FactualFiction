export class BookModel{
    public id?: string;
    public name: string;
    public author: string;
    public description: string;
    public imagePath: string;
    public genre: string;

    constructor(name:string, author:string ,description:string, imagePath:string, genre:string, id?:string){
        this.id=id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.genre = genre;
        this.author = author;
    }
}