import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit, OnDestroy {
  cliente: Cliente;
  nome: string = "";
  sub: any;
  id: string = "";
  titulo = "Cadastra novo cliente";


  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {
    this.cliente = new Cliente();
   }


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log("Id: ", this.id);
      if (this.id) {
        this.titulo = `Altera o cliente de id ${this.id}`
        this.lerCliente(this.id);
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  salvarCliente() {
    if (this.id) {
      this.salvaEdicaoCliente();
    } else {
      this.salvaNovoCliente();
    }
  }

  salvaEdicaoCliente() {
    let observable = this.clienteService.put(this.id, this.cliente);
    observable.subscribe(s => {
      console.log("Altarado o cliente: ", s);
    })
  }

  salvaNovoCliente() {
    let observable = this.clienteService.post(this.cliente);
    observable.subscribe(s => {
      console.log("Criando novo cliente: ", s);
    })
  }

  lerCliente(id: string) {
    let observable = this.clienteService.get(id);
    observable.subscribe(cliente => {
      console.log("Cliente do banco: ", cliente);
      this.cliente = cliente;
      console.log("Cliente da página: ", this.cliente);
    })
  }

}
