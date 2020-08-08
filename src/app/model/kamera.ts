export class Kamera {

    id:string;
    emer:string;
    model:string;
    rezolucion:string;
    ip:string;
    constructor(id:string,
        emer:string,
        model:string,
        rezolucion:string,
        ip:string,){
            this.id=id;
            this.emer=emer;
            this.model=model;
            this.rezolucion=rezolucion;
            this.ip=ip;
        }
}