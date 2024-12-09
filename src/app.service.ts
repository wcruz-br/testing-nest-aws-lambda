import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ATÉ QUE ENFIM FUNCIONOU ESSA JACA';
  }
}
