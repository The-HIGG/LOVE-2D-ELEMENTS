import {ElementInfo} from "./static/info";
import {DebugInfo} from "./static/info";

export class ElementBase {
	//Properties
	independentUpdate: boolean;
	public update(delta:number):void {};

	independentDraw: boolean;
	public draw():void {};

	public destroy():void {
		delete ElementInfo.elements[ElementInfo.elements.indexOf(this)];
	}

	showInfo:boolean
	debugInfo:(undefined | DebugInfo);
  
	// Constructor
	constructor(independentUpdate: boolean = false, independentDraw: boolean = false) {
		this.independentUpdate = independentUpdate;
		this.independentDraw = independentDraw;

		this.showInfo = false;
		this.debugInfo = undefined;

		ElementInfo.elements.push(this);
	}
}