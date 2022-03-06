import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductoInterface} from "../../../servicios/interfaces/modelo/producto.interface";
import {ProductoService} from "../../../servicios/http/producto.service";

@Component({
  selector: 'app-ruta-productos',
  templateUrl: './ruta-productos.component.html',
  styleUrls: ['./ruta-productos.component.scss']
})
export class RutaProductosComponent implements OnInit {
  listaProductos:ProductoInterface[]=[]
  constructor(
    private readonly activatedRoute:ActivatedRoute,
    private readonly productoServices:ProductoService
  ) { }

  ngOnInit(): void {
    this.llenarProductos()
    const parametrosConsulta$ = this.activatedRoute.queryParams;
    parametrosConsulta$.subscribe(
      {
        next:(queryParams)=>{
          //console.log(queryParams);
          // this.categoriaSeleccionada = queryParams['categoria']
          // if(this.categoriaSeleccionada != undefined){
          //   this.buscarProductos(Number.parseInt(this.categoriaSeleccionada))
          // }
        },
        error: (error)=>{
          console.error(error)
        },
      }
    )
  }

  llenarProductos(){
    this.productoServices.buscarTodos("")
      .subscribe(
        {
          next:(data)=>{
            if(data){
              this.listaProductos=data;
            }
          },
          error:(error)=>{
            console.log(error)
          },
          complete:()=>{

          }
        }
      )
  }
  actualizarProducto(){

  }
  eliminarProducto(){

  }
}