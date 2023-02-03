const randomKey = document.getElementById("randomKey");
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
key()
});

const key = () => {
  let password = [];
  let quotes = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  quotes = quotes.split("");
  let letters = "abcdefghijklmnopqrstuvwxyz";
  letters = letters.split("");
  let rakam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * 10);
    let random = Math.floor(Math.random() * rakam.length);
    password[rakam[random]] = number;
    delete rakam[random];
    rakam = rakam.filter((item) => item !== undefined);
  }
  for (let i = 0; i < 2; i++) {
    let mark = Math.floor(Math.random() * 28);
    let random = Math.floor(Math.random() * rakam.length);
    password[rakam[random]] = quotes[mark];
    delete rakam[random];
    rakam = rakam.filter((item) => item !== undefined);
  }
  let upper = Math.ceil(Math.random() * 3);
  for (let i = 0; i < upper; i++) {
    let upper1 = Math.floor(Math.random() * 26);
    let random = Math.floor(Math.random() * rakam.length);
    password[rakam[random]] = letters[upper1].toUpperCase();
    delete rakam[random];
    rakam = rakam.filter((item) => item !== undefined);
  }
  for (let i = 0; i < 5 - upper; i++) {
    let upper2 = Math.floor(Math.random() * 26);
    let random = Math.floor(Math.random() * rakam.length);
    password[rakam[random]] = letters[upper2];
    delete rakam[random];
    rakam = rakam.filter((item) => item !== undefined);
  }
  password = password.join("");
  console.log(password);
};

