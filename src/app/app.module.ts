import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { CarrinhoCompraComponent } from './components/carrinho-compra/carrinho-compra.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/cart.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutosComponent,
    CarrinhoCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({userContext: cartReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
