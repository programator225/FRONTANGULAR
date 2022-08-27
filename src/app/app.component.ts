import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  title = 'RESTAPIAPP';
  users: any;
  
  constructor(private userData:UserDataService){
    this.userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users = data;
    })
  }

  create(){
    alert("vous avez clique sur sur le bouton Ajouter un utilisateur")
  }

  delete(){
    alert("vous avez clique sur supprimer")
  }
  edit(){
    alert("vous avez clique sur edit")
  }
}

