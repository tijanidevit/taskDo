export const convertCamelKeysToSnakeCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj?.map((item) => convertCamelKeysToSnakeCase(item));
  } else if (typeof obj === "object" && obj !== null) {
    return Object?.keys(obj)?.reduce((acc, key) => {
      const snakeKey = key?.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
      // @ts-ignore
      acc[snakeKey] = convertCamelKeysToSnakeCase(obj[key]);
      return acc;
    }, {});
  } else {
    return obj;
  }
};

export const convertSnakeCaseKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertSnakeCaseKeysToCamelCase(item));
  } else if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = key.replace(/_./g, (match) =>
        match.charAt(1).toUpperCase()
      );

      // @ts-ignore
      acc[camelKey] = convertSnakeCaseKeysToCamelCase(obj[key]);
      return acc;
    }, {});
  } else {
    return obj;
  }
};
