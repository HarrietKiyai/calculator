var answer = 0;

function num(id) {
  answer = 0;
  document.getElementById("total").value += id;
  console.log(id);
}

function sumAns() {
  answer = 1;
  var calc = document.getElementById("total").value;
  var ans = (document.getElementById("total").value = eval(calc));
  console.log(ans);
}

function clearBtn() {
  var clear = document.getElementById("total");
  if (clear) {
    clear.value = "";
  }
}
