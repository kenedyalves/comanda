import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
@Injectable()
export class ComandaService {
    API_CONFIG = ''
    constructor(public http: HttpClient){
        this.API_CONFIG = window.localStorage['api'];
    }

    autenticar(path, json) : Observable<any[]> {
        return this.http.get<any[]>
        (`${path}/api/pedidos/autenticaUsuario?json=${json}`);
    }

    getOpen() : Observable<any[]> {
        return this.http.get<any[]>
        (`${this.API_CONFIG}/api/pedidos/comandasAberta`);
    }

    getMesas() : Observable<any[]> {
        return this.http.get<any[]>
        (`${this.API_CONFIG}/api/pedidos/mesas`);
    }

    getMesasTodas() : Observable<any[]> {
        return this.http.get<any[]>
        (`${this.API_CONFIG}/api/pedidos/mesasTodas`);
    }

    open(cod: any, mesa: any) : Observable<any[]> {
        return this.http.get<any[]>(
            `${this.API_CONFIG}/api/pedidos/abrirComanda?cod=${cod}&mesa=${mesa}`,
        )
    }

    fecharComanda(js: any) : Observable<any[]> {
        return this.http.get<any[]>(
            `${this.API_CONFIG}/api/pedidos/fecharComanda?js=${js}`,
        )
    }

    addProduto(nova_comanda, comanda, produto, quantidade, obs, adicionais, saboresExtras, tamanho, valorFlex, novaMesa){
        return this.http.get(
            `${this.API_CONFIG}/api/pedidos/addProduto?nova_comanda=${nova_comanda}&comanda=${comanda}&produto=${produto}&quantidade=${quantidade}&obs=${obs}&adicionais=${JSON.stringify(adicionais)}&saboresExtras=${JSON.stringify(saboresExtras)}&tamanho=${tamanho}&valorFlex=${valorFlex}&novaMesa=${novaMesa}`
        )
    }

    addItens(pedido_id, itens){
        return this.http.get(
            `${this.API_CONFIG}/api/pedidos/addItens?pedido_id=${pedido_id}&itens=${itens}`
        )
    }

    deleteItem(id) : Observable<any[]> {
        return this.http.get<any[]>(
            `${this.API_CONFIG}/api/pedidos/deleteItem?id=${id}`
        )
    } 
    imprimeComanda(id) : Observable<any[]> {
        return this.http.get<any[]>(
            `${this.API_CONFIG}/api/pedidos/imprimeComanda?id=${id}`
        )
    } 
    imprimeResumoComanda(id) : Observable<any[]> {
        return this.http.get<any[]>(
            `${this.API_CONFIG}/api/pedidos/imprimeComandaTotal?id=${id}`
        )
    } 
}