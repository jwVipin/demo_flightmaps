import { Component, OnInit } from '@angular/core';

declare var  flightmap;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {
  map;
  constructor() { }

  async ngOnInit() {
    await this.loadMap();
    this.initializeMap();
  }

  initializeMap() {
    var map = new flightmap.Map({
      container: 'map', // container id
      style: 'default.json', //hosted style id
      center: [-77.38, 39], // starting position
      zoom: 3, // starting zoom,
      accessToken: ''
    });
  }

  loadMap() {
    return new Promise((resolve, reject) => {
      if (document.getElementById("fm-map-js"))
        return resolve(true);
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.id = "fm-map-js";
      script.src = "https://maps.flightmap.io/flightmapjs"; //flightmap.js //not from dist
      script.onload = () => {
        resolve(true);
      };
      document.head.appendChild(script);
    });

  }

}
