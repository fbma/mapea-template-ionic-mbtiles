import config from './app-config'
import './global.css'
import 'regenerator-runtime/runtime'
import ViewAbout from './routes/about'
import ViewMap from './routes/map'

console.info(`${config.name}@${config.version}`)

//attachs cordova deviceready event to access device functions
document.addEventListener('deviceready', onDeviceReady, false)
function onDeviceReady() {
  config.isApp = true
  M.proxy(false)
  //here can use device functions
}

//registers custom elements (routes & components)
window.customElements.define('view-about', ViewAbout)
window.customElements.define('view-map', ViewMap)
