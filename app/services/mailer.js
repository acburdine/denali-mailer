import { Service } from 'denali';

export default class MailerService extends Service {

  send(name, data) {
    let Mailer = this.container.factoryFor(`mailer:${ name }/mailer`);
    let mailer = Mailer.create(name, this.container);
    return mailer.send(data);
  }

}
