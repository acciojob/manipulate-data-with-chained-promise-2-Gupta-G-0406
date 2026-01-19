window.onload = function () {
  let arr = [1, 2, 3, 4];

  function promise1(array) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(array.filter((elem) => elem % 2 === 0));
      }, 1000); 
    });
  }

  function promise2(array) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(array.map((elem) => elem * 2));
      }, 2000); 
    });
  }

  promise1(arr)
    .then((filteredArr) => {
      document.getElementById("output").innerText = filteredArr.join(",");
      return promise2(filteredArr);
    })
    .then((multipliedArr) => {
      document.getElementById("output").innerText = multipliedArr.join(",");
    })
    .catch((err) => {
      document.getElementById("output").innerText = "error";
    });
};
