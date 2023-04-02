//import axios from 'axios';
//import * as _  from 'lodash';

// axios.get('https://random-data-api.com/api/users/random_user?size=30')
// .then(res=>{
//  let uniqueGender=res.data.forEach((element:any) => {
//     console.log(element);
//  });
// });
interface User {
    name: string
    age: string
}

function getUsers(): Promise<User[]> {
    // For now, consider the data is stored on a static `users.json` file
    return fetch('/users.json')
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                    // The response has an `any` type, so we need to cast
                    // it to the `User` type, and return it from the promise
                    return res as User[]
            })
}

var res=getUsers();
console.log(res);