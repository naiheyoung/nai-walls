const { app, BrowserWindow, Menu } = require('electron');

const initWindow = () => {
	// 隐藏工具栏
	Menu.setApplicationMenu(null);
	const wall = new BrowserWindow({
		width: 1200,
		height: 600,
		// 置顶
		alwaysOnTop: true,
	});

	wall.loadURL('http://127.0.0.1:5173');
	// 开启开发者工具
	// wall.webContents.openDevTools();
};

app.whenReady().then(() => {
	initWindow();
});
