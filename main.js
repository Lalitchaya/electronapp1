const electron = require("electron");
const {app, BrowserWindow,ipcMain} = electron;

let mainWin="";
let childWin="";
// app.on("ready", ()=>{
// 	let win = new BrowserWindow({
//         width:800,
//         height:600
//     });
// 	win.loadURL(`file://${__dirname}/index.html`);
// 	win.on('closed', function () { win = null; });
// });
app.on("ready", ()=>{
	mainWin = new BrowserWindow({ width:1200, height:600});
	mainWin.loadURL(`file://${__dirname}/index.html`);
	mainWin.on('closed', function () { win = null; });
});
exports.openWindow = (filename) =>{
	childWin = new BrowserWindow({ width:800, height:400, parent: mainWin, modal: false }); 
	childWin.loadURL(`file://${__dirname}/${filename}.html`);
}
// exports.openWindow = (filename) =>{
//     let win = new BrowserWindow({
//         width:800,
//         height:600
//     });
//     win.loadURL(`file://${__dirname}/${filename}.html`);
// }