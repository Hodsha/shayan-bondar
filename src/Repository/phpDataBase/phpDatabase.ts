import axios from "axios"
import { IMovie } from "../../entities/IMovie";
import { Constants } from "../../constants/Constants";

export function getMovies(): Promise<IMovie> {
    return new Promise<IMovie>((resolve, reject) => {
        axios.get(Constants.localDatabase).then((response: any) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

export function getGames(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        axios.get("").then((response: any) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

export function getTimeline(): Promise<any>{
    return new Promise<any>((resolve, reject) => {
        axios.get("").then((response: any) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    })
}