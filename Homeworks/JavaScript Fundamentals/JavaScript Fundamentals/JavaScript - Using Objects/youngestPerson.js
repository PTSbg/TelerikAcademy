function solve (array){
  var minage = +array[2], firstname = array[0], lastname = array[1];
  for (var i = 5; i < array.length; i+=3){
    if (+array[i] < minage) {
      minage = +array[i];
      firstname = array[i-2];
      lastname = array[i-1];
    }
  }
  console.log(firstname + " " + lastname);
}