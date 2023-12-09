import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComandaService } from '../../services/comanda.service';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  path = "https://interativo.com.py";
  usuario = "";
  senha = "";
  usuarioConectado = ""
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public comandaService: ComandaService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
    let api = window.localStorage['api'];
    let usuario = JSON.parse(window.localStorage['usuario']);
    if (api && usuario) {
      this.path = api;
      this.usuario = usuario.login

      this.usuarioConectado = usuario.nome;
    }else{

    }
  }

  salvar() {
    let json = {
      usuario: this.usuario,
      senha: this.senha
    }

    let temp = JSON.stringify(json);
    this.comandaService.autenticar(this.path, temp).subscribe(
      success => {
        console.log(success)
        window.localStorage['api'] = this.path;
        window.localStorage['usuario'] = JSON.stringify(success);
        alert('Éxitos, reinicie el App');
        this.navCtrl.setRoot('HomePage');
      }, err => {
        console.log(err)
        window.localStorage['api'] = ''
        window.localStorage['usuario'] = ''
        alert('No ha sido posible conectarse')
      }
    )


  }

}
