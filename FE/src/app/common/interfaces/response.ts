export default interface Response<T> {
  json(): unknown;
  items: T;
  succeeded: string;
  errors: string[];
  message: string;
}
