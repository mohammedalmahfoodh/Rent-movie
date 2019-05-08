
export class Customer {
    firstName: string;
    email: string;
    phone: string;
    username: string;
    password:string;
    socialsecuritynumber:string;
    address:string;

    constructor() { }
    public get customerAddress() {
        return this.address;
    }
    public set customerAddress(_address) {
        this.address = _address;
    }

    public get customerSocialsecuritynumber() {
        return this.socialsecuritynumber;
    }
    public set customerSocialsecuritynumber(_socialsecuritynumber) {
        this.socialsecuritynumber = _socialsecuritynumber;
    }

    public get userName() {
        return this.username;
    }
    public set userName(_username) {
        this.username = _username;
    }
    public get customerPassword() {
        return this.password;
    }
    public set customerPassword(_password) {
        this.password = _password;
    }



    public get userFirstName() {
        return this.firstName;
    }
    public set userFirstName(_firstName) {
        this.username = _firstName;
    }




    public get useremail() {
        return this.email;
    }
    public set useremail(_email) {
        this.email = _email;
    }

    public get userPhone() {
        return this.phone;
    }
    public set userPhone(_phone) {
        this.phone = _phone;
    }



}