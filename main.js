document.addEventListener("DOMContentLoaded", function() {
  var title = document.getElementById('title');
  title.innerHTML = 'Silahkan isi nama anda';
  
  var back_button = document.getElementById('backButton');
  back_button.style.visibility = 'hidden'; // Tombol back disembunyikan saat mulai
  
  // Event listener untuk keypress pada input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      enter(); // Panggil fungsi enter saat tombol Enter ditekan
    }
  });
});

let enterCalled = false; // Flag untuk memastikan kondisi pertama hanya terjadi sekali

function enter() {
  let nama = document.getElementById("input").value;
  document.getElementById("input").value = ""; // Mengosongkan input setelah mendapatkan nilai

  var title = document.getElementById('title');
  var back_button = document.getElementById('backButton');
  
  // Jika input kosong, jangan lanjutkan
  if (!nama) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Isi dulu dong!',
      width:'250px',
      customClass: {
        confirmButton: 'swal-button-warning',
        popup: 'swal-popup-warning',
        icon: 'swal-icon-warning',
    }
      
    });
    return; // Tambahkan return agar tidak lanjut jika input kosong
  }

  // Menampilkan kondisi pertama: "halo ${nama} mau maen gak?"
  if (!enterCalled) {
    title.innerHTML = `Halo ${nama} mau maen gak?`;
    enterCalled = true; // Tandai bahwa enter sudah dipanggil untuk pertama kali
    back_button.style.visibility = 'visible'; // Menampilkan tombol back
    return; // Selesai, tunggu input selanjutnya
    // if (nama == ' ' ) {
    //   alert('pea')
    // }
  }
  // Setelah kondisi pertama, cek apakah inputnya "mau", "gak", atau selain itu
  if (nama === "mau" || nama === "Mau") {
 
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'tapi boong',
      width:'250px',
      customClass: {
        confirmButton: 'swal-button-warning',
        popup: 'swal-popup-warning',
        icon: 'swal-icon-warning',
    }
    })
    .then(()=>{
      back() // Kembali ke tampilan pertama setelah
    }) 
  } 
  else if (nama === "gak" || nama === "Gak") {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '',
      text: 'Okedeh',
      width:'250px',
      customClass: {
        confirmButton: 'swal-button-success',
        popup: 'swal-popup-success',
        // icon: 'swall-icon',
    }
    })
    setTimeout(() => {
      back(); // Kembali ke tampilan pertama setelah
    });
  }
  
  else {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Tinggal isi "gak" atau "mau" susah amat!',
      width:'250px',
      customClass: {
        confirmButton: 'swal-button-warning',
        popup: 'swal-popup-warning',
        icon: 'swal-icon-warning',
    }
    })
  }
}

function back() {
  // Kosongkan input dan sembunyikan tombol back
  document.getElementById("input").value = "";
  var back_button = document.getElementById('backButton');
  back_button.style.visibility = 'hidden';
  
  // Reset title
  var title = document.getElementById('title');
  title.innerHTML = 'Silahkan isi nama anda';
  
  // Reset flag enterCalled untuk memungkinkan kondisi pertama dijalankan lagi
  enterCalled = false;
}
