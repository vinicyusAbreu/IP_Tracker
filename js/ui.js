import { containerLoading } from "./app.js";

export class UI {
    constructor() {
        this.ip = document.querySelector('.IP');
        this.location = document.querySelector('.location');
        this.timezone = document.querySelector('.timezone');
        this.isp = document.querySelector('.isp');
    }

    inserirValoresUI(valor) {


        valor.isp = decodeURIComponent(escape(valor.isp));

        this.buscaNoMapa(valor.location.lng, valor.location.lat);

        this.ip.textContent = valor.ip;
        this.location.textContent = `${valor.location.city}, ${valor.location.country}`;
        this.timezone.textContent = `UTC${valor.location.timezone}`
        this.isp.textContent = valor.isp
        containerLoading.style.display = 'none';
    }

    buscaNoMapa(long, lat) {

        mapboxgl.accessToken = 'pk.eyJ1IjoidmluaWN5dXNhYnJldSIsImEiOiJja3JzY2dxcHUwc3V2Mm9vOTA4Ym5uMHo1In0.UcQl0CLNv1bQA262yfLxGg';
        let map = new mapboxgl.Map({
            container: 'mapid',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [long, lat], // starting position [lng, lat]
            zoom: 12 // starting zoom
        });

        // Create a default Marker, colored black, rotated 45 degrees.
        let marker2 = new mapboxgl.Marker({
                color: 'black',

            })
            .setLngLat([long, lat])
            .addTo(map)
    }

}