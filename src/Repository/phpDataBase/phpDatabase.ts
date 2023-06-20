import axios from "axios"
import { IMovie } from "../../entities/IMovie";

export default function getMovies(): Promise<IMovie> {
    return new Promise<IMovie>(async (resolve, reject) => {
        await axios.get('http://localhost/PHPDatabases/Database.php').then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
}