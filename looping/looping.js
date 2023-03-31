const hasil = document.getElementById("hasil");

// No 1

let userCount = 100;

let user = "";

for (let i = 1; i <= userCount; i++) {
  user += `<p>User ke - ${i} </p>`;
}

// hasil.innerHTML = user;

// No 2

let firstNumber = 0;

for (let i = 0; i < 10; i++) {
  firstNumber += 2;
  // hasil.innerHTML += `<p>${firstNumber}</p>`;
}

// No 3

let result = "";

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    result += `<p>Angka ${i} adalah GENAP</p>`;
  } else if (i % 2 !== 0) {
    result += `<p>Angka ${i} adalah GANJIL</p>`;
  }
}

// hasil.innerHTML = result;

// No 4

// let count = 0;
// let again = true;

// while (again) {
//   let question = confirm("Apakah anda mau mengulang?");
//   question ? (count += 1) : (again = false);
// }

// hasil.innerHTML = `Perulangan sudah dilakukan sebanyak ${count} kali`;

// No 5

// let quiz = true;

// while (quiz) {
//   let question = prompt("Sebutkan kepanjangan dari nama IB!");

//   if (question == "Impact Byte" || question == "impact byte") {
//     alert("Selamat jawaban kamu benar");
//     quiz = false;
//   }
// }
