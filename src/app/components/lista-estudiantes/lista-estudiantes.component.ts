import { Component } from '@angular/core';
import { Estudiante } from 'src/models/estudiante';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent {
    estudianteAcargo: Estudiante ={
    idEstudiante: 100,
    nombre:'juan',
    edad:25,
    presente: true 
    
  
    };

  listaEstudiantes:Estudiante[]= [
    {idEstudiante:101,
    nombre:'lionel',
     edad:25,
     presente: true 
  },
    {idEstudiante:102,
    nombre:'martin',
   edad:22,
   presente:false   
  },
    {idEstudiante:103,
    nombre:'flor',
   edad:36,
   presente:true   
  },
    {idEstudiante:104,
    nombre:'vicky',
   edad:28,
   presente:false   
  },
    {idEstudiante:105,
    nombre:'lucas',
   edad:33,
   presente:true   
  },
    {idEstudiante:106,
    nombre:'giuliana',
   edad:26,
   presente:false   
  },
    {idEstudiante:107,
    nombre:'natalia',
   edad:45,
   presente:true   
  },
    {idEstudiante:108,
    nombre:'emiliano',
   edad:23,
   presente:false   
  },
    {idEstudiante:109,
    nombre:'carlos',
   edad:50,
   presente:true   
  },









  ] 

}
