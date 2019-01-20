export class User{
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public userName: string,
        public email: string,
        public rol: string,
        public suscriptionDate: string,
        public password: string
    ){}
}