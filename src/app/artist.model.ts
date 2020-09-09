export class Artist
{
    public _id?: string;
    public artist_name: string;
    public artist_email: string;
    public artist_contact: string;

    constructor(artist_name: string, artist_email: string, artist_contact: string) {
        this.artist_name = artist_name;
        this.artist_email=artist_email;
        this.artist_contact=artist_contact;

    }
}