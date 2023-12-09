import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { ComandaService } from '../../services/comanda.service';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the ComandasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comandas',
  templateUrl: 'comandas.html',
})
export class ComandasPage {
  comandas: any[];
  nenhumaComanda = false;
  impresso = false;
  erro = false;

  comandasAbertas = 0;
  total = 0.00;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private vibration: Vibration,
    public comandaService: ComandaService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getComandasAbertas()
  }


  getComandasAbertas() {
    let present = this.presentLoading('Buscando...');
    present.present();
    this.comandaService.getOpen()
      .subscribe(
        data => {
          present.dismiss();
          console.log(data)
          this.comandas = data;
          this.comandasAbertas = this.comandas.length;
          this.somaTotal(data);
          if (data.length == 0) this.nenhumaComanda = true;
        },
        err => {
          present.dismiss();
          console.error(err)
          this.erro = true;
        }
      )
  }

  somaTotal(data) {
    data.map((v) => {
      this.total += v.soma
    })
  }

  abrir() {
    this.showPrompt();
  }

  itens(c) {
    this.navCtrl.push('ItemComandaPage', { comanda: c });
  }

  modalNovaComanda() {
    let profileModal = this.modalCtrl.create('AbrirComandaPage');
    profileModal.present();
    profileModal.onDidDismiss(data => {
      console.log("Retornou");
      location.reload();
    });
  }

  imprimeComanda(comanda) {
    let loading = this.presentLoading('imprimiendo...');
    loading.present();
    console.log(comanda)
    this.comandaService.imprimeComanda(comanda)
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
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Abrir Comanda',
      message: "Indique el código de identificación de la comanda",
      inputs: [
        {
          name: 'cod',
          placeholder: 'Código',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Abrir',
          handler: data => {

          }
        }
      ]
    });
    prompt.present();
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
      title: 'Erro',
      subTitle: msg,
      buttons: ['Cerrar']
    });
    alert.present();
  }


}
