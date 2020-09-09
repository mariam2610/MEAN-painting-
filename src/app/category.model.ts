export class Category
{
    public _id?:string;
    public category_name:string;

    constructor(category_name:string)
    {
        this.category_name=category_name;
    }
}