import { Module } from '@nestjs/common';

import { AppController } from 'apps/chat-server/src/app.controller';
import { AppService } from 'apps/chat-server/src/app.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
