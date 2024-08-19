import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parametros-form',
  templateUrl: './parametros-form.component.html',
  styleUrls: ['./parametros-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ParametrosFormComponent {
  form: FormGroup;

  unidades = [
    'Águas do Rio-01', 'Águas do Rio-02', 'Águas do SP-01',
    'Águas do SP-02', 'Águas do AM', 'Águas do CE'
  ];

  superintendencias: { [key: string]: string[] } = {
    'Águas do Rio-01': ['BK - RJ-B1', 'BK - RJ-B2'],
    'Águas do Rio-02': ['BK - RJ-B3'],
    'Águas do SP-01': ['BK - SP-B1', 'BK - SP-B2'],
    'Águas do SP-02': ['BK - SP-B3'],
    'Águas do AM': ['BK - AM'],
    'Águas do CE': []
  };

  filteredSuperintendencias: string[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      unidade: ['', Validators.required],
      superintendencia: ['']
    });
  }

  ngOnInit() {
    this.onChanges();
  }

  onChanges(): void {
    this.form.get('unidade')?.valueChanges.subscribe((val: keyof typeof this.superintendencias) => {
      this.filteredSuperintendencias = this.superintendencias[val] || [];
      this.form.get('superintendencia')?.setValue('');
      // Atualiza os validadores conforme a unidade selecionada
      if (this.filteredSuperintendencias.length > 0) {
        this.form.get('superintendencia')?.setValidators(Validators.required);
      } else {
        this.form.get('superintendencia')?.clearValidators();
      }
      this.form.get('superintendencia')?.updateValueAndValidity();
    });
  }

  validateForm(): boolean {
    if (this.filteredSuperintendencias.length > 0 && !this.form.get('superintendencia')?.value) {
      alert('Por favor, preencha a superintendência quando existir uma disponível.');
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.validateForm() && this.form.valid) {
      alert('Formulário salvo com sucesso!');
      this.form.reset();  // Limpa o formulário para nova parametrização
      this.filteredSuperintendencias = []; // Limpa a lista de superintendências filtradas
    } else if (!this.form.valid) {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
