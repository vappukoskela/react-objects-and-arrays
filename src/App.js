import './App.css';

function App() {

  const objectArray = [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}];

  const javascriptTehtävät = () => {
    // 2.9 Sort by values
    console.log("-------------- 2.09 --------------")
    var sortedByValuesArray = [...objectArray].sort((a, b) => {
      return Object.values(a) - Object.values(b);
    })
    console.log(sortedByValuesArray);

    // 2.10 Sort by keys (weekdays)
    console.log("-------------- 2.10 --------------");
    const sortedDays = ["ma","ti","ke","to","pe","la","su"];
    var sortedByKeysArray = [...objectArray];
     sortedByKeysArray.sort((a, b) => {
        if(sortedDays.indexOf(Object.keys(a)[0]) < sortedDays.indexOf(Object.keys(b)[0])) {
          return -1;
        } if(sortedDays.indexOf(Object.keys(a)[0]) > sortedDays.indexOf(Object.keys(b)[0])) {
          return 1;
        } else {
          return 0;
        }
    })
    console.log(sortedByKeysArray);

    //2.11 Create a list with only even values
    console.log("-------------- 2.11 --------------");
    var evenValuesArray = [...objectArray];
    evenValuesArray = evenValuesArray.filter(element => Object.values(element)[0] % 2 === 0);
    console.log(evenValuesArray);

    // 2.12 Create list with keys that have 'e' as the second character
    console.log("-------------- 2.12 --------------");
    var secondCharEArray = [...objectArray];
    secondCharEArray = secondCharEArray.filter(element => Object.keys(element)[0][1] === 'e');
    console.log(secondCharEArray);
    
    // 2.13 Separate to an array of objects with k : v pairs
    console.log("-------------- 2.13 --------------");
    const initialObject = {"ma":44, "pe":100, "ke":21, "ti": 66, "la":22};
    var newArray = [];
    var emptyObj = {};
    for(var i = 0; i < Object.keys(initialObject).length; i++) {
      var newKey = Object.keys(initialObject)[i];
      var newVal = Object.values(initialObject)[i];
      emptyObj[newKey] = newVal;
      newArray = newArray.concat(emptyObj);
    }
    console.log(newArray);
    return null;
  }

  return (
      javascriptTehtävät()
  );
}

export default App;
