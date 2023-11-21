```shell
npm i leaflet leaflet-editable leaflet-plugins leaflet.markercluster vue2-leaflet vue2-leaflet-editable vue2-leaflet-markercluster
```
```html
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
```
```js
// OpenStreetMap
tileProviders: [
  {
    name: '2GIS',
    url: 'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}',
    visible: true,
  },
  {
    name: 'OSM',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    visible: false,
  },
  {
    name: 'OSM-HOT',
    url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    visible: false,
  },
  {
    name: 'OSM-INTL',
    url: 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
    visible: false,
  },
]
```
```css
/* leaflet */
.leaflet-fake-icon-image-2x {
  background-image: url('~leaflet/dist/images/marker-icon-2x.png');
}
.leaflet-fake-icon-shadow {
  background-image: url('~leaflet/dist/images/marker-shadow.png');
}
```
```js
import * as L from 'leaflet';
import 'leaflet-editable';
import 'leaflet-plugins/layer/tile/Yandex';

import {
  LMap,
  LControlLayers,
  LTileLayer,
  LMarker,
  LPolyline,
  LTooltip,
  LPopup,
} from 'vue2-leaflet';
import {
  EditableMap,
  EditablePolyline,
} from 'vue2-leaflet-editable';
import LMarkerCluster from 'vue2-leaflet-markercluster';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

export default {
  install(Vue) {
    delete L.Icon.Default.prototype._getIconUrl; // eslint-disable-line
    L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

    Vue.component('l-map', LMap);
    Vue.component('l-control-layers', LControlLayers);
    Vue.component('l-tile-layer', LTileLayer);
    Vue.component('l-polyline', LPolyline);
    Vue.component('l-marker', LMarker);
    Vue.component('l-marker-cluster', LMarkerCluster);
    Vue.component('l-tooltip', LTooltip);
    Vue.component('l-popup', LPopup);
    Vue.component('e-map', EditableMap);
    Vue.component('e-polyline', EditablePolyline);

    Vue.prototype.$L = L;
  },
};
```
