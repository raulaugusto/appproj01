import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  nomeCliente = "";
  emailCliente = "";

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  salvarCliente() {
    console.log("Salvei: " + this.nomeCliente);
  }

  lerClientes() {
    let observable = this.clienteService.getAll();
    observable.subscribe(listaCliente => {
      const entries = Object.entries(listaCliente);
      console.log(listaCliente);

      entries.forEach(entry => {
        console.log(entry);
      })
    });
  }

  lerCliente(id: string) {
    let observable = this.clienteService.get(id);
    observable.subscribe(cliente => {
      console.log("Apenas um cliente: ", cliente);
    })
  }

  novoCliente() {
    const c = new Cliente();
    c.nome = "Mary del Priori";
    c.cpf = "22222222222";
    c.cep = "01001000";
    c.endereco = "Praça da Sé";
    c.id = "";

    let observable = this.clienteService.post(c);
    observable.subscribe(s => {
      console.log("Criando novo cliente: ", s);
    })
  }

  alteraCliente() {
    const c = new Cliente();
    c.nome = "João dos Santos";
    c.cpf = "3333333333";
    c.cep = "01001000";
    c.endereco = "Praça da Sé";
    c.id = "";

    let observable = this.clienteService.put("-NCHM1RAfeFY4LRoEyM3",c);
    observable.subscribe(c => {
      console.log("Alterando um cliente: ", c);
    })

  }

  //-NCHRw4ljDrQv23xJiL3

  excluirCliente() {
    let observable = this.clienteService.delete("-NCHRw4ljDrQv23xJiL3");
    observable.subscribe(cliente => {
      console.log("Cliente excluído: ", cliente);
    })
  }



}
