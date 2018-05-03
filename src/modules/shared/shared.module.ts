import { Module } from '@nestjs/common';
import { Environments } from './environments';
import { CommonController } from './controllers/common.controller';
import { ExpressComponent } from './components/express.component';

@Module({
  imports: [],
  controllers: [
      CommonController
  ],
  components: [
      Environments,
      ExpressComponent
  ],
  exports: [
      Environments,
      ExpressComponent
  ]
})
export class SharedModule {}
