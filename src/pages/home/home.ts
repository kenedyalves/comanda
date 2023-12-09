import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { ProdutoService } from '../../services/produto.service';

@IonicPage(
)
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  produtos;
  myInput;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public produtoService: ProdutoService) {
  }

  presentLoading() {
    let present = this.loadingCtrl.create({
      content: 'Buscando...',
      duration: 4000,
      dismissOnPageChange: true
    });
    return present;
  }

  ionViewDidLoad() {
    if (window.localStorage['api'])
      this.getMaisVendidos();
    else
      alert('No ha sido posible identificar el path del Servidor')
  }

  add(produto) {
    this.navCtrl.push('AdicionarProdutoPage', { produto: produto })
  }

  onInput() {
    if (this.myInput.length > 1) {
      this.produtoService.pesquisa(this.myInput)
        .subscribe(
          data => {
            console.log(data);
            this.produtos = data
          }, err => {
            console.error(err);
          }
        )
    }
  }

  getMaisVendidos() {
    let present = this.presentLoading();
    present.present();
    this.produtoService.maisPedidos()
      .subscribe(
        data => {
          console.log(data)
          this.produtos = data;
          present.dismiss();
        }, err => {
          console.error(err)
          present.dismiss();
          alert('Verifique el path del servidor')

        }
      )
  }

  verMesas() {
    this.navCtrl.push('MesasPage');
  }

  verComandas() {
    this.navCtrl.push('ComandasPage');
  }

}
