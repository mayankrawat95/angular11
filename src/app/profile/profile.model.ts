export class Profile {
    public name : string;
    public DOB : string;
    public Email : string;
    public Gender: string;

    constructor(name: string, date : string, Email : string, Gender: string){
        this.name = name;
        this.DOB = date;
        this.Email= Email;
        this.Gender = Gender;
    }
}