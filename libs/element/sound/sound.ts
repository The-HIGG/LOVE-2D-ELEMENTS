import { Source } from 'love.audio';
import {ElementBase} from "../base";

export class ElementSound extends ElementBase {

    loop:boolean;
    sound:Source;

    // Constructor
    constructor(sound:Source = love.audio.newSource("res/audio/debug/error.ogg", "static")) {
        super(true, false);
        this.loop = false;
        this.sound = sound;
        this.debugInfo = {
            color: [0.9, 1, 1],
            info: [`Sound -`, `Time: `, `Samples: `, `Volume: `, `Pitch: `],
            values: [
                () => {return ''},
                () => { return ((this.sound != undefined && this.sound.isPlaying()) ? this.sound.tell("seconds") : 0) + ' / ' + math.floor((this.sound != undefined && this.sound.isPlaying()) ? this.sound.getDuration() : 0); },
                () => { return (this.sound != undefined && this.sound.isPlaying()) ? this.sound.tell("samples") : 0; },
                () => { return (this.sound != undefined && this.sound.isPlaying()) ? this.sound.getVolume() : 0; },
                () => { return (this.sound != undefined && this.sound.isPlaying()) ? this.sound.getPitch() : 0; },
            ]
        }
        return this;
    }

    override update(delta:number):void {
        super.update(delta);
        if (this.loop && !this.sound.isPlaying())
		    this.sound.play()
    }
}