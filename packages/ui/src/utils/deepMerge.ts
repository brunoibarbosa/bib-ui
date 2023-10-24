type ObjectType = Record<string, any>;

export function deepMerge(
  obj1: ObjectType = {},
  obj2: ObjectType = {}
): ObjectType {
  const keys = [...Object.keys(obj1), ...Object.keys(obj2)];
  if (!keys.length) return obj1 || obj2;

  return Object.assign(
    {},
    ...keys.map((key) => {
      const spreadFirstObj = typeof obj2[key] === "undefined";
      const value = spreadFirstObj ? obj1[key] : obj2[key];
      const isObjectType = Boolean(
        (typeof obj1[key] === "object" || typeof obj1[key] === "object") &&
          (obj1[key] || obj2[key])
      );

      return {
        [key]: isObjectType
          ? deepMerge(obj1[key] ?? {}, obj2[key] ?? {})
          : value,
      };
    })
  );
}
