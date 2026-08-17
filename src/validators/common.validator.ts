export function isPositiveInt(value: unknown): boolean {
  return typeof value === 'number' && Number.isInteger(value) && value > 0;
}

export interface EntityIdRequestLike {
  id: number;
}

export function validateEntityIdRequest(
  request: EntityIdRequestLike,
): string | void {
  if (!isPositiveInt(request.id)) {
    return 'Id must be a positive integer';
  }
}
