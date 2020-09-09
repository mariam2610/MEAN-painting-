export class Userlogin {
    public user_email: string;
    public user_fname: string;
    public user_lname: string;
    public user_addr: string;


    public _id: string;


    constructor(user_email: string, p_id: string, user_fname: string, user_lname: string, user_addr: string) {

        this.user_email = user_email;
        this.user_fname = user_fname;
        this.user_lname = user_lname;
        this.user_addr = user_addr;
        this._id = p_id;

    }



    // constructor(
    //   public email: string,
    //   public _id: string,
    // public name: string 
    // ) {}

}
