export const alwaysResolver = async <T = undefined>(
  fn: Function,
): Promise<[T | undefined, Error | undefined]> => {
  let result, error;

  try {
    result = await fn();
  } catch (err) {
    error = err as Error;
  }

  return [result, error];
};
