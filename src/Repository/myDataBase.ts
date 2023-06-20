import axios from 'axios';



export function getMovie(): Promise<any>{
    return new Promise<any>((resolve, reject) => {
        axios.get("http://localhost/3000").then((response: any) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    })
}