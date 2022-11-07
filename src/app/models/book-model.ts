export class BookModel{
    private name: string;
    public author: string;
    private description: string;
    private imagePath: string;
    public genre: string;
    

    constructor(name:string, author:string ,description:string, imagePath:string, genre:string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.genre = genre;
        this.author = author;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getImagePath(): string {
        return this.imagePath;
    }

    public setImagePath(imagePath: string): void {
        this.imagePath = imagePath;
    }
}