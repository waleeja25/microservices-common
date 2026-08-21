import { Catch, Logger, RpcExceptionFilter } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';

import { DomainException } from '../exceptions';
import { grpcError } from './grpc-error';

@Catch(DomainException)
export class DomainExceptionFilter
  implements RpcExceptionFilter<DomainException>
{
  private readonly logger = new Logger(DomainExceptionFilter.name);

  catch(exception: DomainException): Observable<never> {
    this.logger.warn(`${exception.code}: ${exception.message}`);

    return throwError(() =>
      grpcError(
        exception.grpcStatus,
        JSON.stringify({
          code: exception.code,
          message: exception.message,
        }),
      ),
    );
  }
}
