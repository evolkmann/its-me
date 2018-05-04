import { Interceptor, NestInterceptor, ExecutionContext, Logger } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

/**
 * This interceptor just logs each API Request like this:
 * --> GET /some/thing?param=1
 *
 * Requests or Responses are not changed.
 */
@Interceptor()
export class ApiInterceptor implements NestInterceptor {

    private logger = new Logger('API');

    intercept(dataOrRequest, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
        this.logger.log(`${dataOrRequest.method} ${dataOrRequest.originalUrl}`);

        return stream$;
    }

}
