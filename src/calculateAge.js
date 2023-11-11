function calculateAge() {
    let s = document.getElementById("i1").value;
    let cur = new Date();
    let x = cur.getFullYear() * 365 + cur.getMonth() * 30 + cur.getDate();
    cur = new Date(s);
    let y = cur.getFullYear() * 365 + cur.getMonth() * 30 + cur.getDate();
    let res = "";
    if (x < y) {
      res = "Enter a date before the current date";
    } else {
      let diff = x - y;
      res = "Your Age is " + Math.floor(diff / 365);
    }
    document.getElementById("i2").innerHTML = res;
  }
  
  export default calculateAge;
  