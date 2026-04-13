import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { Button } from '../../components/button/button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, Button, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
  standalone: true
})
export class CertificadoForm {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['angular', 'react', 'vue'];

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched && control.errors?.['required']
  }
}
