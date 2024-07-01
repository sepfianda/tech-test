import { User } from "./user.type";

export interface About {
    id: number;
    thumbnail: string;
    displayName: string;
    gender: string;
    birthday: string;
    horoscope: string;
    zodiac: string;
    height: string;
    weight: string;

    user: User
}

export interface IFormAbout {
    thumbnail: File[];
    displayName: string;
    gender: string;
    birthday: string;
    horoscope: string;
    zodiac: string;
    height: string;
    weight: string;
}

