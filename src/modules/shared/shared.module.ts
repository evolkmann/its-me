import { Module } from '@nestjs/common';
import { Environments } from './environments';
import { CommonController } from './controllers/common.controller';
import { ExpressComponent } from './components/express.component';
import { ApiInterceptor } from './interceptors/api.interceptor';

@Module({
  imports: [],
  controllers: [
      CommonController
  ],
  components: [
      Environments,
      ExpressComponent,
      ApiInterceptor
  ],
  exports: [
      Environments,
      ExpressComponent
  ]
})
export class SharedModule {}
