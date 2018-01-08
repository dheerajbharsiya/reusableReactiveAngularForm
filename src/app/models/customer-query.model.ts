export class CustomerQuery {
    public name;
    public street;
    public town;
    public city;
    public state;
    public country;
    public date;
    constructor(name, street, town, city, state, country, date) {
        this.name = name;
        this.street = street;
        this.town = town;
        this.city = city;
        this.state = state;
        this.country = country;
        this.date = date;
    }
}