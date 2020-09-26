export default function isNotNil<T>(val: T | undefined | null): val is T {
  return val != null;
}
