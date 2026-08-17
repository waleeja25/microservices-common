import { status as GrpcStatus } from '@grpc/grpc-js';
import { DomainException } from './domain.exception';

export class ValidationException extends DomainException {
  constructor(message: string) {
    super('VALIDATION_ERROR', message, GrpcStatus.INVALID_ARGUMENT);
  }
}
