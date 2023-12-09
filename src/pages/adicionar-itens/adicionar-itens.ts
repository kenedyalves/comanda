import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ComandaService } from '../../services/comanda.service';
import { ProdutoService } from '../../services/produto.service';
import { LottieAnimationViewModule } from 'ng-lottie';

/**
 * Generated class for the AdicionarItensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-itens',
  templateUrl: 'adicionar-itens.html',
})
export class AdicionarItensPage {
  comanda_id = 0;
  produtos;
  produtosFilter;
  adicionais;
  myAdicional;
  adicionaisInicio: any;
  obs = '';
  myInput;
  produtoSelecionado = null;
  produtoPizza = false;
  tamanhoSelecionado = null;
  tamanhosDePizza: any;
  valorFlex = 0;
  adicionaisSelecionados = [];
  valorPizzaPorTamanho = 0;
  totalSabores = 1;
  quantidade = 1;
  divideValorPizza = 0;
  saboresExtrasPizza = [];
  contProdutos = 0;
  sucesso = false;
  lottieConfig: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoService: ProdutoService,
    public modalCtrl: ModalController,
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
    this.comanda_id = this.navParams.get("comanda_id");
    console.log(this.comanda_id)
    this.getProdutos();
    this.getAdicionais();
    this.dividePizza();

  }

  ionViewDidLoad() {
    window.localStorage['cart'] = ''
    console.log('ionViewDidLoad AdicionarItensPage');
  }

  getProdutos() {
    this.produtoService.all()
      .subscribe(
        resp => {
          console.log(resp)
          this.produtosFilter = resp;
        },
        err => {
          console.log(err)
        }
      )
  }

  getAdicionais() {
    this.produtoService.adicionais()
      .subscribe(
        resp => {
          console.log(resp)
          // this.adicionais = resp;
          this.adicionaisInicio = resp;
        },
        err => {
          console.log(err)
        }
      )
  }

  onInput() {
    if (this.myInput.length > 1) {
      this.produtoSelecionado = null;
      this.produtos = this.produtosFilter.filter(
        (element) => {
          console.log(element)
          return element.nome.toLowerCase().includes(this.myInput.toLowerCase())
        }
      );
    }
  }

  add(produto) {
    this.produtoSelecionado = produto;
    console.log(this.produtoSelecionado)
    if (this.produtoSelecionado.categoria.nome.includes('izza')) {
      this.produtoPizza = true;
      this.tamanhosPizza();
      //buscando o tamanho das pizzas
    }
  }

  tamanhosPizza() {
    // let present = this.presentLoading('Buscando tamanhos para pizza...');
    // present.present();
    this.produtoService.tamanhosPizza()
      .subscribe(
        data => {
          // present.dismiss();
          console.log(data)
          this.tamanhosDePizza = data;
        },
        err => {
          console.log(err)
          // present.dismiss();
        }
      )
  }

  selecionaAdicional(adicional) {
    this.verificaAdicionalJaIncluido(adicional, (res) => {
      if (res == false) this.adicionaisSelecionados.push(adicional);
    })
  }

  verificaAdicionalJaIncluido(adicional, call) {
    let retorno = false;
    this.adicionaisSelecionados.map((v) => {
      if (v.id == adicional.id) {
        retorno = true;
      }
    })
    call(retorno);
  }

  searchAdicional() {

    if (this.myAdicional.length > 0) {
      this.adicionais = this.adicionaisInicio.filter((r) => {
        return r.nome.match(this.myAdicional)
      })
    }
  }

  adicionar() {
    // let loading = this.presentLoading('Salvando...');
    // loading.present();
    if (this.valorFlex == 0 && (this.produtoSelecionado.valor_livre == '1' ||
      this.produtoSelecionado.valor_livre == 1)) {
      alert("Informe el valor!")
    } else {
      if (this.valorFlex == 0) {
        this.valorFlex = this.produtoSelecionado.valor_venda;
        if (this.valorPizzaPorTamanho > 0) {
          this.valorFlex = this.valorPizzaPorTamanho;
        }
      }
      this.addProdutoStorage()
      this.valorFlex = 0;
      this.produtoSelecionado.id = '';
      this.quantidade = 1;
      this.obs = '';
    }
  }

  addProdutoStorage() {
    let cart = [];
    if (window.localStorage['cart']) {
      cart = JSON.parse(window.localStorage['cart']);
    }

    let json = {
      produto_id: this.produtoSelecionado.id,
      quantidade: this.quantidade,
      obs: this.obs,
      adicionaisSelecionados: this.adicionaisSelecionados,
      saboresExtrasPizza: this.saboresExtrasPizza,
      valorFlex: this.valorFlex,
      tamanho: this.tamanhoSelecionado
    }
    cart.push(json);
    console.log(cart)
    // this.vibration.vibrate([100, 150, 100]);
    window.localStorage['cart'] = JSON.stringify(cart)
    this.contCart();
    this.showAlert()
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Elemento Adicionado!',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

  contCart() {
    this.produtoSelecionado = null;
    this.myInput = '';
    this.produtos = []
    if (window.localStorage['cart']) {
      let cart = JSON.parse(window.localStorage['cart']);
      this.contProdutos = cart.length
    } else {
      this.contProdutos = 0;
    }
  }

  buscaValorPizza() {
    this.totalSabores = 1;
    this.saboresExtrasPizza = [];
    this.produtoService.pizzaValorPorTamanho(this.tamanhoSelecionado, this.produtoSelecionado.id)
      .subscribe(
        data => {
          let valor: any = data
          this.valorPizzaPorTamanho = valor
        },
        err => {
          console.log(err)
        }
      )
  }

  addSabor() {
    console.log(this.saboresExtrasPizza)
    if (this.tamanhoSelecionado) {
      let modal = this.modalCtrl.create('ModalSaborPage',
        {
          tamanho: this.tamanhoSelecionado, saborPrincipal: this.produtoSelecionado.id,
          selecionados: this.saboresExtrasPizza
        });
      modal.present();
      modal.onDidDismiss((selecionados) => {
        let maiorValor = this.valorPizzaPorTamanho;
        let somaValores = Number(maiorValor);
        console.log(maiorValor)
        selecionados.map((s) => {
          if (s.valor > maiorValor) {
            maiorValor = s.valor
          }
          somaValores += Number(s.valor);
        })
        console.log(somaValores)
        if (this.divideValorPizza == 1) {
          maiorValor = (somaValores / (selecionados.length + 1))
        }
        this.valorPizzaPorTamanho = maiorValor;
        this.saboresExtrasPizza = selecionados;

        if (this.saboresExtrasPizza.length == 0) this.totalSabores = 1;
        else this.totalSabores += this.saboresExtrasPizza.length;
      })
    } else {
      alert('Seleccione el tamaño');
    }
  }

  dividePizza(){
    this.produtoService.dividePizza()
    .subscribe(
      data => {
        if(data == 1){
          this.divideValorPizza = 1;
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  enviarItens() {
    let cart = window.localStorage['cart'];
    // this.comanda_id = 1;
    this.comandaService.addItens(this.comanda_id, cart)
      .subscribe(
        resp => {
          console.log(resp)
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

  enviarItensPresent() {
    const prompt = this.alertCtrl.create({
      title: 'Enviar Pedido',
      message: "Deseas enviar este pedido?",
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log('Saved clicked');
            this.enviarItens()
          }
        }
      ]
    });
    prompt.present();

  }

}
