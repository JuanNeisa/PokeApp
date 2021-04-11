export interface Pokemon {
    id:      number;
    name:    string;
    weight:  number;
    sprites: Sprites;
    types:   TypeElement[];
}

export interface Sprites {
    front_default: string;
}

export interface TypeElement {
    type: TypeType;
}

export interface TypeType {
    name: string;
}
