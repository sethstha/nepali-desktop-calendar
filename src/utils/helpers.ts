/**
 * repr :: gets the string representation of `arg`
 * @param {} arg :: unknown function argument
 * @returns {String} :: a string representation of `arg`
 */
export const repr = (arg: any) => {
  return Object.prototype.toString.call(arg);
};

/**
 * isArray
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is an Array, false otherwise
 */
export const isArray = (arg: any) => {
  return Array.isArray ? Array.isArray(arg) : repr(arg) === '[object Array]';
};

/**
 * isObject :: checks if `arg` is an object.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is an object.
 */
export const isObject = (arg: any) => {
  return repr(arg) === '[object Object]';
};

/**
 * isTruthyish :: checks if `arg` is not null or undefined.
 *
 * for example, statements like `!""`, `!0`, `!null`, or `!undefined`
 *  evaluate to `true`. However, sometimes deep-cleaner is only interested
 *  if something is null or undefined, so `isTruthyish("")` and
 *  `isTruthyish(0)` evaluate to `true`, while `isTruthyish(null)` and
 *  `isTruthyish(undefined)` still evaluate to `false`.
 *
 * @param {} arg :: unknown function argument.
 * @returns {Boolean}
 */
export const isTruthyish = (arg: any) => {
  if (arg === false) {
    return false;
  }
  return !(isNull(arg) || isUndefined(arg));
};

/**
 * isString :: checks if `arg` is a string.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is a String, false otherwise
 */
export const isString = (arg: any) => {
  return repr(arg) === '[object String]';
};

/**
 * isNumber :: checks if `arg` is a number.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is a Number, false otherwise
 */
export const isNumber = (arg: any) => {
  return repr(arg) === '[object Number]';
};

export const isFloat = (n: any) => {
  return Number(n) === n && n % 1 !== 0;
};

/**
 * isNull :: checks if `arg` is null.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is of type Null, false otherwise
 */
export const isNull = (arg: any) => {
  return repr(arg) === '[object Null]';
};

/**
 * isPositiveNumber :: checks if `arg` is a positive number.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` is a Positive Number, false otherwise
 */
export const isPositiveNumber = (arg: any) => {
  return parseInt(arg) >= 0;
};

/**
 * hasNumber :: checks if `arg` has number..
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: returns true if `arg` has number, false otherwise
 */
export const hasNumber = (arg: any) => {
  const pattern = /^\D+$/i;
  return pattern.test(arg);
};

/**
 * isUndefined :: checks if `arg` is undefined.
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: Returns true if `arg` is of type Undefined, false otherwise
 */
export const isUndefined = (arg: any) => {
  try {
    return typeof arg === 'undefined';
  } catch (e) {
    if (e instanceof ReferenceError) {
      return true;
    }

    throw e;
  }
};

/**
 * isEmpty :: Checks if `arg` is an empty string, array, or object.
 *
 * @param {} arg :: unknown function argument
 * @returns {Boolean} :: Returns true if `arg` is an empty string,
 *  array, or object. Also returns true is `arg` is null or
 *  undefined. Returns true otherwise.
 */
export const isEmpty = (arg: any) => {
  return (
    isUndefined(arg) ||
    isNull(arg) ||
    (isString(arg) && arg.length === 0) ||
    (isArray(arg) && arg.length === 0) ||
    (isObject(arg) && Object.keys(arg).length === 0)
  );
};
