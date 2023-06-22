const { app, BrowserWindow } = require('electron');

const initWindow = () => {
	const wall = new BrowserWindow({
		width: 800,
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
