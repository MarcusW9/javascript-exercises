const findTheOldest = function(arr) {
    let oldest = 0
    let oldestObj = {};
    for (let obj of arr) {
        let age = 0
        if (!obj.yearOfDeath) {
            age = 2024 - obj.yearOfBirth
            if (age > oldest) {
                oldest = age;
                oldestObj = obj;
            }
        } else {
            age = obj.yearOfDeath - obj.yearOfBirth ;
            if (age > oldest) {
                oldest = age;
                oldestObj = obj;
            }
        }
    }
    return oldestObj
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
