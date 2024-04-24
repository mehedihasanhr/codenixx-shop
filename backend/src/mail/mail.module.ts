import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get<string>('SMTP_HOST'),
          secure: true,
          auth: {
            user: config.get<string>('SMTP_MAIL'),
            pass: config.get<string>('SMTP_PASSWORD'),
          },
        },

        defaults: {
          from: 'Codenixx.com',
        },

        template: {
          dir: join(__dirname, '../../../mail-templates'),
          adapter: new EjsAdapter(),
          options: { strict: false },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
})
export class MailModule {}
