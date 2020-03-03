export class Product {
    name: string;
    description: string;
    price: number;
    image: any[];
    url: string;


    constructor(name?: string, description?: string, price?: number, image?: string, url?: string) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = [];
        this.image.push({source: '/assets/images/image1.jpg', title: 'no lo se, tu dime', thumbnail: '/assets/images/image1.jpg'}) ;
        this.url = './assets';
    }
}
