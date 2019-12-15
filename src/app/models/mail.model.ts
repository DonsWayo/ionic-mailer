/* export class Mail {
    constructor(
    public smpt: "",
    public host: "",
    public auth: { user: "", pass: ""},
    public tls: true,
    public requireTLS: true,
    public port: 465,
    public secure: true,
    public to: "",
    public subject: "",
    public text: "",
    ){}
} */

export interface Mail {
     smtp: string
     user: string, 
     pass: string,
     tls: boolean,
     requireTLS: boolean,
     port: number,
     secure: boolean,
     to: string,
     subject: string,
     text: string
}