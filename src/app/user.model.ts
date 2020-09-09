export class User {
    public _id: string
    public user_fname: string;
    public user_lname: string;
    public user_email: string;
    public user_addr: string;
    public user_pswd: string;
    public user_contact: number;



    constructor(user_fname: string, user_lname: string, user_email: string, user_addr: string, user_pswd: string, user_contact: number) {
        this.user_fname = user_fname;
        this.user_lname = user_lname;
        this.user_email = user_email;
        this.user_addr = user_addr;
        this.user_pswd = user_pswd;
        this.user_contact = user_contact;
    }
}