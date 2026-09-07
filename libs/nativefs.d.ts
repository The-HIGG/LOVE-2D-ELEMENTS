export function newFile(name:string):any
export function newFileData(filepath:string):any
export function mount(archive:any, mountPoint:any, appendToPath?:any):any;
export function unmount(append:any):any;
export function read(containerOrName:any, nameOrSize:any, sizeOrNil:any):any
export function writeFile(mode:string, name:string, data:any, size:number):any
export function write(name:string, data:any, size:number):any
export function append(name:string, data:any, size:number):any
export function lines(name:string):any
export function load(name:string):any
export function getWorkingDirectory():any
export function setWorkingDirectory(path:string):any
export function getDriveList():any
export function createDirectory(path:string):boolean
export function remove(name:string):boolean
export function getDirectoryItems(dir:string):any
export function getDirectoryItemsInfo(path:string, filterType:any):any
export function getInfo(path:string, filterType?:any):any