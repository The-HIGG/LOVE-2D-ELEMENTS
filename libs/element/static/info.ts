import {ElementBase} from "../base"

export class ElementInfo {

	static init():void {
		ElementInfo.debugFont.setFilter("nearest", "nearest");
	}

	static elements: ElementBase[] = [];

	static update(delta: number): void {
    	ElementInfo.elements = ElementInfo.elements.filter(item => item != undefined);
		for(let element of ElementInfo.elements) {
      		if(element.independentUpdate) element.update(delta);
    	}
  	}

  	static draw(): void {
		for(let element of ElementInfo.elements) {
			if(element.independentDraw) element.draw();
		}
  	}

	static debugDisplay = {
		visible: true,
		alpha: 1,
		x: 10,
		y: 0
	}

	static debugFont = love.graphics.newImageFont("res/fonts/pixelfont.png", " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?:-'/()", 1);
	
	static debugInfo:DebugInfo[] = [];

	private static debugString(data:DebugInfo, index:number = 0): string {
		let str:string = "";
		
		if(data.info[index] != undefined)
			str += data.info[index];

		if(data.values[index] != undefined)
			str += tostring(data.values[index]());

		return str;
	}

	private static info:Array<DebugInfo> = [
		{
			color: [1,1,1],
			info: [
				`FPS: `,
				`Avg dt: `,
			],
			values: [
				() => {return love.timer.getFPS();},
				() => {return `${(love.timer.getAverageDelta() * 1000).toFixed(1)}ms`}
			]
		},
		{
			color: [0.7, 0.78, 1],
			info: [
				`Renderer: `,
				`GPU driver: `
			],
			values: [
				() => {return love.graphics.getRendererInfo()[RenderInfo.NAME];},
				() => {return love.graphics.getRendererInfo()[RenderInfo.DEVICE] || "N/A";},
			]
		},
		{
			color: [0.7, 1, 0.78],
			info: [
				`` // L method but I'm too lazy to fix
			],
			values: [() => {const stats = love.graphics.getStats(); return `Draw calls: ${stats.drawcalls}  Canvas switches: ${stats.canvasswitches}`}]
		},
		{
			color: [1, 0.75, 0.78],
			info: [
				`Elements: `
			],
			values: [() => {return ElementInfo.elements.length}]
		}
	]

	static drawDebugInfo(): void {
		if(!ElementInfo.debugDisplay.visible)
			return;

		love.graphics.setFont(ElementInfo.debugFont);

		let curInfo:Array<DebugInfo> = [];

		for(let infos of [ElementInfo.info, ElementInfo.debugInfo]) {
			for(let data of infos)
				curInfo.push(data);
		}

		for(let element of ElementInfo.elements) {
			if(element.showInfo && element.debugInfo != undefined)
				curInfo.push(element.debugInfo);
		}

		let height:number = 50;
		let width:number = 0;
		for(let data of curInfo) {
			if(data.info != undefined) {
				height += 20 * data.info.length;
				for(let str of data.info) {
					if(width < ElementInfo.debugFont.getWidth(ElementInfo.debugString(data, data.info.indexOf(str))))
						width = ElementInfo.debugFont.getWidth(ElementInfo.debugString(data, data.info.indexOf(str)));
				}
			}
		}

		width *= 2;
		
		love.graphics.setColor(0, 0, 0, ElementInfo.debugDisplay.alpha * .5)
		love.graphics.rectangle("fill", ElementInfo.debugDisplay.x -10, ElementInfo.debugDisplay.y, width + 25, ElementInfo.debugDisplay.y + height)

		let y:number = 10;
		for(let data of curInfo) {
			if(data.color != undefined)
				love.graphics.setColor(data.color[0], data.color[1], data.color[2], data.color[3] != undefined ? data.color[3] * ElementInfo.debugDisplay.alpha : ElementInfo.debugDisplay.alpha)
			else
				love.graphics.setColor(1, 1, 1, ElementInfo.debugDisplay.alpha)

			for(let str of data.info) {
				love.graphics.print(ElementInfo.debugString(data, data.info.indexOf(str)), ElementInfo.debugDisplay.x, ElementInfo.debugDisplay.y + y, 0, 2, 2);
				y += 20;
			}
			y += 10;
		}
	}
}

export interface DebugInfo {
	color: number[];
	info: string[];
	values: any[];
}

export enum RenderInfo {
	NAME,     // 0
	VERSION,   // 1
	VENDER,   // 2
	DEVICE,  // 3
}