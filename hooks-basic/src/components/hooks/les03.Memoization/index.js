//luu lai ket qua theo tung bo input--- cache
const addMemo = (a, b) => {
  if (!addMemo.cache) {
    addMemo.cache = {}; //tap doi tuong de luu lai
  }

  const key = `${a}_${b}`;
  const synmetricKey = `${b}_${a}`;

  if (addMemo.cache[key]) return addMemo.cache[key];
  if (addMemo.cache[synmetricKey]) return addMemo.cache[synmetricKey];

  const sum = a + b;
  addMemo.cache[key] = sum;
  addMemo.cache[synmetricKey] = sum;

  return sum;
};

//----> React.memo(component)
// khi props khong thay doi thi ko can rerender 
// khi thay doi event in component khong rerender
