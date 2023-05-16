import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TurmaAluno from 'App/Models/TurmaAluno'

export default class extends BaseSeeder {
  public async run () {
    await TurmaAluno.createMany([
      {turmasId: 1, alunosId: 8},
      {turmasId: 2, alunosId: 7},
      {turmasId: 3, alunosId: 6},
      {turmasId: 4, alunosId: 5},
      {turmasId: 5, alunosId: 4},
      {turmasId: 4, alunosId: 3},
      {turmasId: 3, alunosId: 2},
      {turmasId: 2, alunosId: 1},
      {turmasId: 1, alunosId: 9},
    ])
  }
}