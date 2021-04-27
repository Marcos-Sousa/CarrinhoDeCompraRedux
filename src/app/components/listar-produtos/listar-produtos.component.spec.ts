import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/modelos/product.model';
import { ListarProdutosComponent } from './listar-produtos.component';

describe('Buscando lista de retorno de produtos do component', () => {
  let component: ListarProdutosComponent;
  let fixture: ComponentFixture<ListarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarProdutosComponent],
      imports: [HttpClientModule],
    })
      .compileComponents();
    fixture = TestBed.createComponent(ListarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criaçao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('listando quantidade de produto do component de listagem de produtos', async done => {
    setTimeout(async () => {
      await expect(component.produtos.length).toBe(8);
      await done();
    }, 1000)
  })

  it('Adicionando produto ao carrinho', ()=>{
    fixture.detectChanges();
    let produto = new Product();
    produto.descricao = 'Produto teste';
    produto.id = 1;
    produto.imagem = 'imagem.url';
    produto.nome = 'Produto adicionado';
    produto.preco = 10,20;
  
    expect(component.adicionarItem(produto)).toBe('Produto Adicionado com sucesso');
  });

  it('Adicionando um produto vazio ao carrinho', ()=>{
    fixture.detectChanges();
    let produto = new Product();
    expect(component.adicionarItem(produto)).toBe('Erro ao adicionar Produto');
  })
});


