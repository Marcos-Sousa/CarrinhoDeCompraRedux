import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Product } from "src/app/modelos/product.model";
import { ProdutoServico } from "./produto.servico"

describe('Testando serviço que é responsável pelos produtos.', () => {

    let servico: ProdutoServico

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [ProdutoServico],
            imports: [HttpClientModule],
        }).compileComponents();

        servico = TestBed.inject(ProdutoServico);
    });

    it('verificar se a lista de produtos que está retornando da api é = 8', done => {
        servico.listarProduto().subscribe(data => {
            expect(data.length).toBe(8);
        });
        done()
    });

    it('buscar um produto por ID (1), e verificando se o ID '
    + ' do produto que foi buscado é realmente o que  foi passdo  ', () => {
        let produto = new Product();
        servico.buscarPorId(1).subscribe((data) => {
            produto = data;
        });

        setTimeout(()=>{
            expect(produto?.id).toBe(1);
        }, 1000)
    });
})