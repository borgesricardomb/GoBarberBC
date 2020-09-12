import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  //  Um contructor é a funcionalidade de instanciar um objeto daquela classe. Quando fazemos new Date(), por exemplo,
  //  o constructor passa os parâmetros para a classe e constrói o objeto na memória.

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
