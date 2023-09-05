import { createParamDecorator, ExecutionContext, Logger } from '@nestjs/common';

export function LogParams() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      const context = this.switchToHttp();
      const request = context.getRequest();
      const logger = new Logger(target.constructor.name);

      logger.log(`Method [${key.toString()}] - Parameters: ${JSON.stringify(args)}`);

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}