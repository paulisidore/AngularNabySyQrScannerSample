import { Component } from '@angular/core';
import { BaseConfig } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nabysyDeliverySystem';
  public config: BaseConfig = {
    isAuto: false,
    isDraw: true,
    isAlwaysEmit: true,
    text: { font: '25px serif' }, // Hiden { font: '0px', bottom: 40 },
    frame: { lineWidth: 8 },
    medias: {
      audio: false,
      video: {
        facingMode: 'environment', // Front and back camera { facingMode: front ? "user" : "environment" } 
        width: { ideal: 800 },
        height: { ideal: 600 }
      }
    }
  };

  cadreScanner: any;
  public onEvent(e: any): void {
    //Les données lut sont ici
    //On arrete la lecture
    if (this.cadreScanner){
      this.stopScan(this.cadreScanner);
    }
    let qrInfo=e ;
    console.log(qrInfo);
    console.log('QrData= '+qrInfo.data);
  }

  public onError(e: any): void {
    alert(e);
  }

  public handle(QrCadreObjet: any, fn: string): void {
    QrCadreObjet[fn]().subscribe(console.log, console.error);
  }

  public startScan(QrCadreObjet: any){
    this.cadreScanner=QrCadreObjet ;
    QrCadreObjet['start']().subscribe(console.log, console.error);
  }
  public stopScan(QrCadreObjet: any){
    QrCadreObjet['stop']().subscribe(console.log, console.error);
  }
  
}
