const animals = ['dog', 'cat'];

function showAnimals() {
  animals.map(function (item) {
    console.log(item);
  });
}

module.exports = {
  animals,
  showAnimals,
};
