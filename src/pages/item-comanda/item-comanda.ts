import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ComandaService } from '../../services/comanda.service';
import { LottieAnimationViewModule } from 'ng-lottie';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the ItemComandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-comanda',
  templateUrl: 'item-comanda.html',
})
export class ItemComandaPage {
  comanda;
  delete = false;
  lottieConfig: any;
  impresso = false;

  constructor(public navCtrl: NavController,
    public comandaService: ComandaService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private vibration: Vibration,
    public navParams: NavParams) {
    LottieAnimationViewModule.forRoot();
    this.lottieConfig = {
      path: 'assets/delete.json',
      autoplay: true,
      loop: false
    }

    this.comanda = this.navParams.get("comanda");
    console.log(this.comanda)
  }

  ionViewDidLoad() {
  }

  presentLoading(mensagem) {
    let present = this.loadingCtrl.create({
      content: mensagem,
      duration: 4000,
      dismissOnPageChange: true
    });
    return present;
  }

  alert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: msg,
      buttons: ['Cerrar']
    });
    alert.present();
  }

  deleteItem(item) {
    let loading = this.presentLoading('eliminando...');
    loading.present();
    console.log(item)
    this.comandaService.deleteItem(item.id)
      .subscribe(
        data => {
          loading.dismiss();
          console.log(data);
          if (data) {
            this.vibration.vibrate([100,150,100]);
            this.delete = true;
            setTimeout(() => {
              this.navCtrl.setRoot('ComandasPage');
            }, 2000)
          }
        }, err => {
          loading.dismiss();
          console.error(err)
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'No es posible eliminar un elemento que ya se entregó!',
            buttons: ['Cerrar']
          });
          alert.present();
        }
      )
  }

  adicionarItens(){
    this.navCtrl.push('AdicionarItensPage', { comanda_id: this.comanda.id })
  }

  fecharMesa(){
    this.navCtrl.push('FecharComandaPage', {comanda_id: this.comanda.id, total: this.comanda.soma})
  }
  imprimeResumoComanda(comanda) {
    let loading = this.presentLoading('imprimiendo...');
    loading.present();
    console.log(comanda)
    this.comandaService.imprimeResumoComanda(comanda)
      .subscribe(
        data => {
          loading.dismiss();
          console.log(data);
          if (data) {
            this.vibration.vibrate([100,150,100]);
            this.impresso = true;
            setTimeout(() => {
              this.navCtrl.setRoot('ComandasPage');
            }, 2000)
          }
        }, err => {
          loading.dismiss();
          console.error(err)
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error al imprimir!',
            buttons: ['Cerrar']
          });
          alert.present();
        }
      )
  }

}
