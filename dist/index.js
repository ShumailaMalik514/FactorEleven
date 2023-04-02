"use strict";
function getUsers() {
    return fetch('/users.json')
        .then(res => res.json())
        .then(res => {
        return res;
    });
}
var res = getUsers();
console.log(res);
//# sourceMappingURL=index.js.map