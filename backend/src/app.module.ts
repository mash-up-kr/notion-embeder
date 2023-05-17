import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LandingModule } from './landing/landing.module';
import { DrawLotModule } from './draw-lot/drawlot.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URL),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', 'frontend', 'build'),
        }),
        LandingModule,
        DrawLotModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
