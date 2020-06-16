import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthenticationMiddleware } from './common/authentication.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReflectMetadata } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TrainingSessionModule } from './training-session/training-session.module';
import { SetModule } from './set/set.module';
import { ExerciceModule } from './exercice/exercice.module';
import { PhysicalDataModule } from './physical-data/physical-data.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    ExerciceModule,
    TrainingSessionModule,
    SetModule,
    PhysicalDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
