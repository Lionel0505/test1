import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm:FormGroup;
  inscriptionForm:FormGroup;

  messageConnexion : any;
  erreurConnexion  : any;
  messageInscription  : any;
  erreurInscription : any;
  affichage : any = false;
  bouton:any = 'Inscription';
  
  constructor(private formBuilder:FormBuilder, private router:Router) { 

  }

  ngOnInit(): void {
    this.initFormControlConnexion();
    this.initFormControlInscription();
  }

  initFormControlConnexion(){
    this.connexionForm = this.formBuilder.group({
      email:new FormControl(),
      motDePasse:new FormControl()
    });
  }

  initFormControlInscription(){
    this.inscriptionForm = this.formBuilder.group({
      nom:new FormControl(),
      prenom:new FormControl(),
      dateNaissance:new FormControl(),
      email:new FormControl(),
      motDePasse: new FormControl()
    });
  }

  onConnexion(){
    this.messageConnexion ='';
    const formValue = this.connexionForm.value;
    let valeurEmail = formValue['email'];
    let valeurMdp = formValue['motDePasse'];

    this.messageConnexion ='email='+valeurEmail+' mot de passe='+valeurMdp;
    this.router.navigate(['ato']);
  }

  onInscription(){
    this.messageConnexion='';
    const formValue = this.inscriptionForm.value;
    let valeurNom = formValue['nom'];
    let valeurPrenom = formValue['prenom'];
    let valeurDateNaissance = formValue['dateNaissance'];
    let valeurEmail = formValue['email'];
    let valeurMdp = formValue['motDePasse'];
    this.messageConnexion = 'nom='+valeurNom+' prenom='+valeurPrenom+' date deNaissance='+valeurDateNaissance+' email='+valeurEmail+' mot de passe='+valeurMdp;
  }

  onAffichage(){
    
    console.log("TY EEEE"+this.affichage);
    if(this.affichage === true)
    {
      this.bouton = 'Inscription';
      this.affichage = false;
    }
    else{
      this.bouton = 'Connexion';
      this.affichage = true;
      }
      
  }

}
