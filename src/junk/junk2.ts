import * as bcrypt from 'bcrypt';

/* let hash = bcrypt.hashSync("somePassword",10);
console.log(hash); */

if(bcrypt.compareSync('somePassword', "$2b$10$QErrmwJfLqX0GfKpbTGb1ec76fib7rwQWImDs6TGn1POoect0GU6S")) {
    console.log("confere");
} else {
    console.log("error");
}

