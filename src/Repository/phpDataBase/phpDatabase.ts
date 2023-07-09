import axios from "axios"
import { IMovie } from "../../entities/IMovie";
import { Constants } from "../../constants/Constants";

export default function getMovies(): Promise<IMovie> {
    return new Promise<IMovie>((resolve, reject) => {
        axios.get(Constants.localDatabase).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
}