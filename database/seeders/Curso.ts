import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
   await Curso.createMany([
      {nome: "Relações Públicas", duracao: 4, modalidade: 'P'},
      {nome: 'Direito', duracao: 5, modalidade: 'P'},
      {nome: 'Análise e desenvolvimento de sistemas', duracao: 5, modalidade: 'E'},
      {nome: 'Enfermagem', duracao: 10, modalidade: 'P'},
      {nome: 'Farmácia', duracao: 8, modalidade: 'P'},
      {nome: 'Psicologia', duracao: 8, modalidade: 'P'},
      {nome: 'Educação Física', duracao: 8, modalidade: 'H'},
      {nome: 'Biomedicina', duracao: 10, modalidade: 'P'}
    ])
  }
}