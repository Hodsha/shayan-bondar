import axios from 'axios';
import { IMovie } from '../entities/IMovie';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5173';


export default function getMovie(): Promise<IMovie> {
    return new Promise<any>(async (resolve, reject) => {
       await fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => resolve(data));
    }).catch((error) => {
        console.log(error);
    })
}