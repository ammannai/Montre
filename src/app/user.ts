export class User {
    constructor(
        public _id : string,
        public firstName : string ,
        public lastName : string,
        public email : string ,
        public tel : string ,
        public password : string , 
        public confirmPassword : string,
    ){}
}