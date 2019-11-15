export class ArticleModel {

    date: Date;
    titre: string;
    contenu: string;
    image: string;

    constructor(date: Date, titre: string, contenu: string, image: string) {
        this.date = new Date;
        this.titre = titre;
        this.contenu = contenu;
        this.image = image;
    }
}