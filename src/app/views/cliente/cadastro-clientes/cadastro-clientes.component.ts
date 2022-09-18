import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  nomeCliente = "";
  emailCliente = "";

  constructor() { }

  ngOnInit(): void {
  }

  salvarCliente() {
    console.log("Salvei: " + this.nomeCliente);
  }
    

}
