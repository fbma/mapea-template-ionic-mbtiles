import html from './map.html'
const ZOOM_PROV = 6

export default class ViewMap extends HTMLElement {
  constructor() {
    super()
    this.sizeObserver = new ResizeObserver(() => {
      if (this.olMap) {
        this.olMap.updateSize()
      }
    })
  }
  connectedCallback() {
    this.innerHTML = html

     console.log('Cargando el mbtile...');
    fetch('../lib/cabrera.mbtiles').then((response) => {
      const mbtile = new M.layer.MBTiles({
        name: 'mbtiles',
        legend: 'MBtiles',
        source: response,
        transparent: false,
      });

      let mMap = M.map({
        container: 'map',
        projection: 'EPSG:3857*m',
        controls: ['panzoom','mouse'],
        layers: [mbtile]
      })
    
    this.olMap = mMap.getMapImpl()
    this.sizeObserver.observe(this)

    }).catch((e) => {
      throw e;
    });
  }
}
