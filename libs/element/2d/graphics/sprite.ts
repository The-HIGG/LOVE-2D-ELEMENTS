import { Image } from "love.graphics";
import { ElementObject2D } from "../object";
import { ElementPoint } from "../../math/point";
import * as LoveImage from "love.image";

export class ElementSprite2D extends ElementObject2D {

    imageData:LoveImage.ImageData;
    image:Image;
    scale:ElementPoint;
    color:[number, number, number];
    alpha:number;

    //data: any = love.graphics.newImage("res/placeholder/undefined_image.png")
    // Constructor
    constructor(x = 0, y = 0, independentUpdate: boolean = false, independentDraw: boolean = false) {
        super(x, y, independentUpdate, independentDraw);
        
        this.image = love.graphics.newImage("res/love2d-elements-assets-/undefined_image.png");
        this.imageData = this.getImageData(this.image);
        this.scale = new ElementPoint(1,1);
        this.color = [1,1,1];
        this.alpha = 1;
        return this;
    }

    loadGraphic(data:Image):ElementSprite2D {
        this.image = data;
        this.imageData = this.getImageData(this.image)
        return this;
    }

    loadGraphicData(data:LoveImage.ImageData):ElementSprite2D {
        this.imageData = data;
        this.image = love.graphics.newImage(this.imageData);
        return this;
    }

    getImageData(image:Image):LoveImage.ImageData {
        let canvas = love.graphics.newCanvas(image.getWidth(), image.getHeight())
        love.graphics.setCanvas(canvas)
        love.graphics.setColor(1,1,1)
        love.graphics.draw(image)
        love.graphics.setCanvas()
        return canvas.newImageData()
    }

    makeGraphic(width:number, height:number):ElementSprite2D {
        this.imageData = love.image.newImageData(width, height);
        for (let y = 0; y < this.imageData.getHeight(); y++) {
            for (let x = 0; x < this.imageData.getWidth(); x++) {
                this.imageData.setPixel(x, y, 1, 1, 1, 1);
            }
        }
        this.image = love.graphics.newImage(this.imageData);
        return this;
    }

    override getWidth():number {
        if (this.image == null)
            return 0;
        return this.image.getWidth() * this.scale.x;
    }

    override getHeight():number {
         if (this.image == null)
            return 0;
        return this.image.getHeight() * this.scale.y;
    }

    override draw():void {
        super.draw();
        love.graphics.setColor(this.color[0], this.color[1], this.color[2], this.alpha);
        love.graphics.draw(this.image, this.x, this.y, this.rotation, this.scale.x, this.scale.y);
    }
}