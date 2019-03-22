import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Map } from '../../models/map';

import { Icon, icon, Marker, marker } from 'leaflet';

declare let L;
var map;

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private defaultIcon: Icon = icon({
    iconUrl: 'assets/leaflet/marker-icon.png',
    shadowUrl: 'assets/leaflet/marker-shadow.png',
    iconSize: [41, 51], // => random values you have to choose right ones for your case
    iconAnchor: [20, 51] // => random values too
  });

  public coordinates: [number];
  constructor(
    private _mapService: MapService, private _router: Router
  ) {

  }

  ngOnInit() {

    //Marker.prototype.options.icon = this.defaultIcon;
    map = L.map('map').setView([0, 0], 2); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    this.getLocations();
  }

  getLocations() {

    var geoJsonMulti = {
      "type": "GeometryCollection",
      "geometries": [

      ]
    }

    this._mapService.getCoordinates().subscribe(
      response => {
        if (!response) {
          this._router.navigate(['/']);
        } else {
          var layer = response.cityFeatures.cities;
          layer.forEach(layer => {
            geoJsonMulti.geometries.push(layer);
          })
          console.log(geoJsonMulti)
        }
        var myStyle = {
          "color": "#ff7800",
          "weight": 5,
          "opacity": 0.65
        };
        L.geoJSON(geoJsonMulti, {
          style: myStyle
        }).addTo(map);

        var myIcon = L.icon({
          iconUrl: 'assets/leaflet/marker-icon.png',
          iconSize: [41, 51],
          iconAnchor: [20, 51],
          popupAnchor: [-3, -76],
          shadowUrl: 'assets/leaflet/marker-shadow.png',
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
        });

        var options={
          
        }


        for(let i=0;i<geoJsonMulti.geometries.length;i++){
          console.log(geoJsonMulti.geometries[i].coordinates)
          console.log(marker)
          var arrayCoords=[geoJsonMulti.geometries[i].coordinates[1],geoJsonMulti.geometries[i].coordinates[0]]
          var marker=L.marker(arrayCoords, {icon: myIcon,clickable: false}).addTo(map).bindPopup("<b>Average temp: </b>"+geoJsonMulti.geometries[i].averageTemp+
          "</br> <b>Average precipitations: </b>"+geoJsonMulti.geometries[i].averageRain);
          console.log(marker)
        }

        
      },

      error => {
        let errorMessage = <any>error;
        if (errorMessage !== null) {
          let body = JSON.parse(error._body);
        }
      }
    );
  }
}
