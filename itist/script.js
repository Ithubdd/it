const user = {
    name: "Jacob",
    age: 34,
};
user.age = 44;
alert(user.age);
let key = prompt("что вы хотите знать о пользователе");
alert( user[key] );