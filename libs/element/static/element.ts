import {ElementObject2D} from "../2d/object";

export class Element {
    public static mouseOverlaps(obj:ElementObject2D):boolean {
        if (obj == null || obj.x == null || obj.y == null || obj.getWidth == null || obj.getHeight == null)
            return false;
        let mouseX:number = love.mouse.getX();
        let mouseY:number = love.mouse.getY();
        return (mouseX > obj.x && mouseX < obj.x + obj.getWidth() && mouseY > obj.y && mouseY < obj.y + obj.getHeight());
    }
}