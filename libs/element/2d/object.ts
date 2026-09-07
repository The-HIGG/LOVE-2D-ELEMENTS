import {ElementBase} from "../base";

export class ElementObject2D extends ElementBase {

    x: number;
    y: number;
    rotation: number;

    setPosition:(x:number, y:number) => void;

    getWidth():number {
        return 0;
    };
    
    getHeight():number {
        return 0;
    };

    // Constructor
    constructor(x = 0, y = 0, independentUpdate: boolean = false, independentDraw: boolean = false) {
        super(independentUpdate, independentDraw);
        this.x = x;
        this.y = y;
        this.rotation = 0;

        this.setPosition = (x = 0, y = 0) => {
            this.x = x;
            this.y = y;
        }
    }
}