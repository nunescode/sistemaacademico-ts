import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run() {
    await Aluno.createMany([
      {nome: "Letícia", cpf: 17633401117, matricula: "123456789", email: "lele02@gmail.com", telefone: "61981043056", cep: 72215244, logradouro: "Setor M", complemento: "-", numero: "13A", bairro: "Ceilândia Sul" },
      {nome: "Marcos", cpf: 27625288102, matricula: "1234567891", email: "marcos.sms@hotmail.com", telefone: "61981707812", cep: 72110035, logradouro: "QNM 30", complemento: "-", numero: "23", bairro: "Ceilândia Sul" },
      {nome: "Caio", cpf: 12800708117, matricula: "1234567892", email: "caio.ads@yahoo.com.br", telefone: "61998334160", cep: 72145833, logradouro: "QNM 38", complemento: "-", numero: "12", bairro: "Ceilândia Sul" },
      {nome: "Leandro", cpf: 56613292109, matricula: "1234567893", email: "leander.2000@iesb.edu.br", telefone: "61982999251", cep: 72160803, logradouro: "QNL 18", complemento: "-", numero: "22", bairro: "Taguatinga" },
      {nome: "Isaías", cpf: 53662101190, matricula: "1234567894", email: "isaqcode@outlook.com", telefone: "61992023263", cep: 72161431, logradouro: "QNL 24", complemento: "-", numero: "30", bairro: "Taguatinga" },
      {nome: "Sérgio", cpf: 69767169121, matricula: "1234567895", email: "sergin8000@gmail.com", telefone: "61985441737", cep: 72162302, logradouro: "QNL 30", complemento: "-", numero: "14", bairro: "Taguatinga" },
      {nome: "Gisele", cpf: 50306279100, matricula: "1234567896", email: "gisa.estud@bing.com", telefone: "61998703394", cep: 70346540, logradouro: "CLS 107", complemento: "-", numero: "18", bairro: "Asa Sul" },
      {nome: "Cailane", cpf: 14905558115, matricula: "1234567897", email: "cailanemodas@gmail.com", telefone: "6140028922", cep: 70375020, logradouro: "SQS 112", complemento: "-", numero: "16", bairro: "Asa Sul" },
      {nome: "Giovana", cpf: 14905558113, matricula: "1234567892", email: "giihti@gmail.com", telefone: "6140028923", cep: 70375021, logradouro: "SQS 113", complemento: "-", numero: "17", bairro: "Asa Sul" },
    ])
  }
}