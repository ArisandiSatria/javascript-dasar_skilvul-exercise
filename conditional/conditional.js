// 1

const person = "HR";

let job = "";

if (person === "HR") {
  job += "Tugas saya adalah melakukan rekrutmen untuk calon pegawai baru.";
} else if (person === "OB") {
  job += "Tugas saya adalah menjaga kebersihan dan keindahan kantor.";
} else if (person === "Security") {
  job += "Tugas saya adalah menjaga keamanan kantor.";
} else {
  job += "Bukan bagian dari kantor";
}

// console.log(job);

// No 2

let a = 2;
let b = 2;

let hasil = "";

if (a == "" || b == "") {
  hasil += "Input tidak boleh kosong!";
} else {
  if (a > b) {
    hasil += `angka ${a} lebih besar dari angka ${b}`;
  } else if (a < b) {
    hasil += `angka ${a} lebih kecil dari angka ${b}`;
  } else if (a === b) {
    hasil += `angka ${a} sama dengan angka ${b}`;
  } else {
    hasil += "Input error";
  }
}

// console.log(hasil);

// No 3

let number = 9;

let day = "";

switch (number) {
  case 1:
    day += "Minggu";
    break;
  case 2:
    day += "Senin";
    break;
  case 3:
    day += "Selasa";
    break;
  case 4:
    day += "Rabu";
    break;
  case 5:
    day += "Kamis";
    break;
  case 6:
    day += "Jumat";
    break;
  case 7:
    day += "Sabtu";
    break;
  default:
    day += "Masukkan angka antara 1 sampai 7 saja!";
}

// console.log(day);

// No 4

let input = "UP";

let charMovement = "";

switch (input) {
  case "UP":
    charMovement += "Karakter berjalan keatas";
    break;
  case "RIGHT":
    charMovement += "Karakter berjalan kekanan";
    break;
  case "BOTTOM":
    charMovement += "Karakter berjalan kebawah";
    break;
  case "LEFT":
    charMovement += "Karakter berjalan kekiri";
    break;
}

// console.log(charMovement);
