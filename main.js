function hitungRataRata() {
  const nilai1 = parseFloat(document.getElementById("nilai1").value);
  const nilai2 = parseFloat(document.getElementById("nilai2").value);
  const nilai3 = parseFloat(document.getElementById("nilai3").value);
  const nilai4 = parseFloat(document.getElementById("nilai4").value);
  const nilai5 = parseFloat(document.getElementById("nilai5").value);

  const rataRata = (nilai1 + nilai2 + nilai3 + nilai4 + nilai5) / 5;

  alert(`Rata-rata: ${rataRata.toFixed(2)}`);
}

var audio = new Audio("hehe.mp3");
function submit() {
  const name = document.getElementById("name").value;
  const mapel = document.getElementById("mapel").value;
  const kelas = document.getElementById("kelas").value;
  const jurusan = document.getElementById("jurusan").value;
  const gupel = document.getElementById("gupel").value;
  const nomor = document.getElementById("nomor").value;
  const semester = document.getElementById("semester").value;
  const tahun = document.getElementById("tahun").value;

  if (
    name === "" ||
    mapel === "" ||
    kelas === "" ||
    jurusan === "" ||
    gupel === "" ||
    nomor === "" ||
    semester === "" ||
    tahun === ""
  ) {
    audio.play();
    alert("Data di sisi kiri tidak boleh ada kosong!!!");
    return false;
  } else {
    audio.play();
    alert("Selamat telah terkirim");
    return true;
  }
}
