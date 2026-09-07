
export class ElementPoint {
    x: number;
    y: number;

    constructor(x:number = 0, y:number = 0) {
        this.x = x;
        this.y = y;
    }

    set(x:number = 0, y:number = 0):void {
        this.x = x;
        this.y = y;
    }
}