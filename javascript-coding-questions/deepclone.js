const obj = {
  name: "samadhan",
  age: 25,
  address: {
    city: "dubai",
    landmark: "burj khalipa",
  },
};
const deepCopy = (obj) => {
  console.log(obj, "12");
  if (obj === null || typeof obj !== "object") return obj;

  const copy = {};

  for (let key in obj) {
    console.log("19");
    copy[key] = deepCopy(obj[key]);
    console.log(copy, "copy");
  }
  console.log("23");
  return copy;
};

const obj2 = deepCopy(obj);
obj2.name = "don";
obj2.address.city = "bali";
console.log(obj2, obj);
