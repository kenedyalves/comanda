import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComandaService } from '../../services/comanda.service';
import { LottieAnimationViewModule } from 'ng-lottie';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the FecharComandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fechar-comanda',
  templateUrl: 'fechar-comanda.html',
})
export class FecharComandaPage {
  pedido_id;
  lottieConfig: any;
  sucesso = false;
  tiposPagamento = [
    { cod: '01', nome: 'Dinero' },
    { cod: '02', nome: 'Cheque' },
    { cod: '03', nome: 'Tarjeta de Crédito' },
    { cod: '04', nome: 'Tarjeta de Débito' },
    { cod: '05', nome: 'Crédito Tienda' },
    { cod: '10', nome: 'Vale Alimentación' },
    { cod: '11', nome: 'Vale Comidao' },
    { cod: '12', nome: 'Vale Regalo' },
    { cod: '13', nome: 'Vale Combustible' },
    { cod: '14', nome: 'Duplicata Mercantil' },
    { cod: '15', nome: 'Boleto Bancário' },
    { cod: '90', nome: 'Sin pago' },
    { cod: '99', nome: 'Otros' }
  ];
  dinheiro_recebido = 0;
  tipo_pagamento;
  observacao = "";
  total = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private vibration: Vibration,
    public comandaService: ComandaService
  ) {
    LottieAnimationViewModule.forRoot();
    this.lottieConfig = {
      path: 'assets/success.json',
      autoplay: true,
      loop: false
    }
    this.pedido_id = this.navParams.get("comanda_id");
    this.total = this.navParams.get("total");
    // this.pedido_id = 1;
    console.log(this.pedido_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FecharComandaPage');
  }
  calculaTroco(){

  }
  fecharComanda(){
    let usuario = JSON.parse(window.localStorage['usuario']);
    let usuario_id = usuario.id
    let js = {
      pedido_id: this.pedido_id,
      observacao: this.observacao,
      dinheiro_recebido: this.dinheiro_recebido,
      tipo_pagamento: this.tipo_pagamento,
      usuario_id: usuario_id
    }
    let json = JSON.stringify(js);
    this.comandaService.fecharComanda(json)
    .subscribe(
      data => {
        console.log(data)
        this.sucesso = true;
          this.vibration.vibrate([100, 150, 100]);
          setTimeout(() => {
            this.navCtrl.setRoot('HomePage');
          }, 2000)
      },
      err => {
        console.log(err)
      }
    )

  }

  fechar() {
    const prompt = this.alertCtrl.create({
      title: 'Cerrar Comanda',
      message: "Deseas cerrar esta comanda?",
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: data => {
            console.log('Saved clicked');
            this.fecharComanda()
          }
        }
      ]
    });
    prompt.present();
  }

}
