const bodem = () => {
  let dem = 0;
  return {
    getDem: () => dem++,
    getXem: () => dem,
    getReset: () => (dem = 0),
  };
};
const soLan = bodem();
soLan.getDem();
soLan.getDem();
soLan.getDem();
console.log(soLan.getXem());
console.log(soLan.getReset());

//bai2

//const tenham = () => {};

const caculator = () => {
  let value = 0;

  return {
    getValue: () => value,
    setValue: (newValue) => (value = newValue),
  };
};
const myCalc = caculator();

console.log(myCalc.getValue());

myCalc.setValue(42);
console.log(myCalc.getValue());
