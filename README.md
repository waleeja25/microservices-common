# microservices-common

Shared library consumed by `user-service`, `catalog-service`, `order-service`, `notification-service`, `analytics-service`, and `api-gateway` via a local `file:` dependency (not published to npm).

Contains:

- `DomainException` and its subclasses (e.g. `EntityNotFoundException`, `ValidationException`) — typed business errors that carry a gRPC status and survive the network boundary between services.
- `GrpcExceptionFilter` / `DomainExceptionFilter` — translate exceptions into real gRPC error statuses.
- `Validate()` pipe and validator helpers for gRPC payloads.
- `@GrpcController` decorator and related gRPC constants.
- `createAppLogger()` — shared `ConsoleLogger` configuration used by every service's `main.ts`.

`BaseEntity`, `BaseService`, and `DatabaseExceptionFilter` are deliberately **not** here — each consuming service keeps its own copy, since every service has its own separate TypeORM install, and sharing TypeORM-aware classes across that boundary breaks silently at runtime.

## Building

```bash
npm install
npm run build
```

Any consuming service needs this rebuilt (and reinstalled, since it's a `file:` dependency) after a change here — there's no automatic sync.
