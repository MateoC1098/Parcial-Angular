export class Plantas {
    id: number;
    name: string;
    description: string;
    image: string;
    type: string;
    climate: string;

    constructor(
        id: number,
        name: string,
        description: string,
        image: string,
        type: string,
        climate: string
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.type = type;
        this.climate = climate;

    }

}
