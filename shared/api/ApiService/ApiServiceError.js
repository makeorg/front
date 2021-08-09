/* @flow */
import { v4 as uuidv4 } from 'uuid';

export class ApiServiceError extends Error {
  message: string;

  name: string;

  logId: string;

  status: ?number;

  data: ?Object;

  logged: ?boolean;

  url: ?string;

  method: ?string;

  requestId: ?string;

  headers: ?Object;

  clone = (message: string) =>
    new ApiServiceError(
      message,
      this.status,
      this.data,
      this.url,
      this.method,
      this.logId,
      this.logged,
      this.requestId,
      this.headers
    );

  constructor(
    message: string,
    status: ?number,
    data: ?Object,
    url: ?string,
    method: ?string,
    logId: ?string,
    logged: ?boolean,
    requestId: ?string,
    headers: ?Object
  ) {
    super(message);
    this.status = status;
    this.data = data;
    this.message = message;
    this.url = url;
    this.method = method;
    this.logId = logId || uuidv4();
    this.logged = logged || false;
    this.name = 'api-service-error';
    this.requestId = requestId;
    this.headers = headers;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiServiceError);
    }
  }
}
