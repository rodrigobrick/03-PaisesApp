import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin: 10px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['eu', 'efta', 'caricom', 'pa', 'au', 'usan', 'eeu', 'al', 'asean', 'cais', 'cefta', 'nafta', 'saarc'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private PaisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) 
          ? 'btn btn-primary'
          : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {

    if ( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.paises = [];
    
    this.PaisService.buscarRegion(this.regionActiva)
      .subscribe( (paises) => {
        this.paises = paises;
      },(error) => {
        this.paises = [];
      });
  }


}
