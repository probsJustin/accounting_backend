import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { inspect } from 'util';

@Injectable()
export class LogParamsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const className = context.getClass().name;
    const handler = context.getHandler().name;
    const logger = new Logger(className);
    const args = context.getArgs();
    
    
    // Since you're targeting controller methods, args[0] is the Request object. You can adjust this accordingly.
    logger.log(`Method [${handler}] - Params: ${inspect(args[0].params)} - Request Body: ${JSON.stringify(args[0].body)}`);

    return next.handle();
  }
}