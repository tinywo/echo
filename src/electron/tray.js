import path from 'path'
import {app, nativeImage, Tray, Menu} from "electron";

export function createTray(win) {
  let icon = nativeImage
    .createFromPath(path.join(__dirname, 'img/icons/menu@88.png'))
    .resize({
      height: 20,
      width: 20
    })
  const trayMenu = [
    {
      label: "设置",
      click: function (item) {
      }
    },
    {
      label: "退出",
      click: function () {
        app.quit()
      }
    }
  ]
  const appTray = new Tray(path.join('', 'tray.ico'))
  const contextMenu = Menu.buildFromTemplate(trayMenu)

  appTray.setToolTip('Echo Player')
  appTray.setContextMenu(contextMenu)
  appTray.on('click', function () {
    win.show();
  })
}
