import { Image } from './image-model';
export class Product {
    name: string;
    description: string;
    price: number;
    image: string;
    file: [];
    uploadedFiles: Image[];
    url: string;


    constructor(name?: string, description?: string, price?: number, image?: string, url?: string, uploadedFiles?) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.uploadedFiles = uploadedFiles ? uploadedFiles : [];
        this.url = './assets';
    }
}
