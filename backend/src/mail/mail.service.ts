import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

type mailOption = {
  subject: string;
  email: string;
  name: string;
  activationCode: string;
  template: string;
};

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail({
    email,
    subject,
    name,
    activationCode,
    template,
  }: mailOption) {
    await this.mailerService.sendMail({
      to: email,
      subject,
      template,
      context: {
        name,
        activationCode,
      },
    });
  }
}
