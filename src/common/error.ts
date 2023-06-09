interface ApiErrorProps {
  message: string;
  code?: number;
}

export default class APIError extends Error {
  code?: number;

  constructor(props: ApiErrorProps) {
    super();
    this.message = props.message;
    this.code = props.code;
  }
}
