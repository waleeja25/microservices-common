import { PipeTransform } from '@nestjs/common';
import { ValidationException } from '../exceptions';

export function Validate<T>(
  validator: (value: T) => string | void,
): PipeTransform<T, T> {
  return {
    transform(value: T): T {
      const error = validator(value);

      if (error) {
        throw new ValidationException(error);
      }

      return value;
    },
  };
}
