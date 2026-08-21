import { ConsoleLogger } from '@nestjs/common';

export function createAppLogger(): ConsoleLogger {
  return new ConsoleLogger({
    timestamp: true,
  });
}
