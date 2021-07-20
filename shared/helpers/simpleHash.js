export const simpleHash = str => {
  let hash = 0;
  [...str].forEach(char => {
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + char.charCodeAt(0);
    // eslint-disable-next-line no-bitwise
    hash &= hash;
  });

  return hash.toString();
};
