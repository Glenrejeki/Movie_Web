// High Order Function -> Function yang menerima function lain sebagai argumen (nilai) atau mengembalikan function lain sebagai hasil


// CallBack Function -> Function yang dikirim sebagai argumen ke function lain dan dipanggil di dalam function tersebut 

function selesaikanTugas(tugas, callBack){ // high order -> Menerima inputan si fungsinya
  console.log(`Menyelesaikan tugas: `+tugas)
  callBack()
}

function tugasSelesai(){ // call back function -> Memberikan  si fungsinya
  console.log(`Tugas selesai`)

}
selesaikanTugas(`Belajar JavaScript`, tugasSelesai)