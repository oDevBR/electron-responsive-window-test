const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
    .then(createWindowsInstaller)
    .catch((error) => {
        console.error(error.message || error)
        process.exit(1)
    })

function getInstallerConfig() {
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'release-builds')

    return Promise.resolve({
        appDirectory: path.join(outPath, 'App-teste-win32-ia32/'),
        authors: 'Joao Aquino',
        noMsi: true,
        outputDirectory: path.join(outPath, 'windows-installer'),
        exe: 'app-test.exe',
        setupExe: 'AppInstaller.exe',
        setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'icon.ico')
    })
}