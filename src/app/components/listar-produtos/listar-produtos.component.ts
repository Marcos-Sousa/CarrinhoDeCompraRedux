import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from 'src/app/modelos/cart.model';
import { ProductModel } from 'src/app/modelos/product.model';
import { Add} from 'src/app/reducers/cart-action';
import { ProdutoServico } from 'src/app/services/produto/produto.servico';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  public produtos: ProductModel[] = [];
  constructor(
    public produtoServico: ProdutoServico,
    private store: Store<CartModel>,
  ) { 
    this.listarProdutos();
  }

  ngOnInit(): void {
  }

  listarProdutos(){
   this.produtoServico.listarProduto().subscribe((data)=>{
      this.produtos = data;
    });
 }

 adicionarItem(produto: ProductModel){
   if(produto.nome != null){
    this.store.dispatch(Add(produto))
    return 'Produto Adicionado com sucesso';
   }else{
     return 'Erro ao adicionar Produto';
   }
 }

}
