# EDU RUNNER ARABIC 3D

Game runner 3D untuk latihan 25 kosakata bahasa Arab berdasarkan gambar. Proyek statis HTML, CSS, JavaScript, dan Three.js. Siap diunggah ke GitHub dan dideploy di Vercel. Tidak membutuhkan API key, database, login, atau proses build.

## Jalankan di komputer

Pasang Node.js 20 atau lebih baru. Ekstrak ZIP, masuk ke folder yang berisi package.json, lalu:

```bash
npm run dev
```

Buka http://localhost:3000. Tidak perlu npm install. Jangan membuka index.html langsung melalui file:// karena browser membatasi modul JavaScript.

## Deploy melalui GitHub dan Vercel

1. Buat repositori GitHub baru.
2. Upload ISI folder edu-runner-arabic-3d, termasuk folder public, package.json, server.mjs, dan vercel.json. Jangan hanya mengunggah ZIP.
3. Pada Vercel pilih Add New Project, lalu impor repositori GitHub.
4. Root Directory: folder yang berisi package.json dan vercel.json. Jika Anda mengunggah folder pembungkus ke repositori, pilih folder pembungkus itu sebagai root.
5. Framework Preset: Other. Build Command: kosong. Output Directory: public. Berkas vercel.json telah menetapkan pengaturan ini.
6. Klik Deploy dan buka URL HTTPS yang Vercel hasilkan.

Tidak ada Environment Variables yang perlu diisi. server.mjs hanya untuk pengembangan lokal; Vercel menyajikan isi folder public secara statis. Jangan mengatur framework menjadi Next.js.

Alternatif melalui Git:

```bash
git init
git add .
git commit -m "Create Edu Runner Arabic 3D"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti USERNAME dan NAMA-REPO dengan milik Anda.

## Mekanisme permainan

Pemain memilih tingkat dan tema. Semua tema memuat 25 soal; memilih satu tema menghasilkan sesi lebih pendek. Soal muncul dalam urutan acak tanpa pengulangan dalam sesi. Gambar ada di atas layar. Tiga gerbang menampilkan kata Arab berharakat, dan tiga kartu di bawah mewakili gerbang yang sama.

Pemain memilih jalur, lalu tekan Lewati gerbang untuk mengonfirmasi. Jika waktu habis, game menilai jalur terakhir yang dipilih. Pemain yang belum memilih kehilangan satu nyawa. Penilaian terjadi melalui indeks jalur, bukan tabrakan fisika. Animasi pemain berpindah ke jalur tersebut dan gerbang bergerak mendekat.

Jawaban benar memberi 10 poin. Jawaban salah atau tidak memilih mengurangi satu nyawa dan memberi 0 poin. Sesi berakhir setelah seluruh soal dalam tema selesai atau tiga nyawa habis. Maksimal semua tema adalah 250 poin. Siswa dapat membaca pembahasan tanpa batas waktu sebelum melanjutkan. Tidak ada rintangan tambahan yang mengurangi nyawa.

Arti Indonesia baru muncul setelah penilaian agar tidak membocorkan jawaban. Distraktor mengutamakan kosakata dari tema yang sama; jika jumlahnya tidak cukup, game mengambil kata dari tema lain.

## Tingkat kesulitan

- Mudah: 16 detik per soal.
- Sedang: 11 detik per soal.
- Sulit: 7 detik per soal.

Perbedaan tingkat terletak pada durasi mendekati gerbang. Pilihan kosakata berasal dari bank yang sama. Timer mengikuti waktu animasi aktif; pada perangkat lambat durasi nyata dapat lebih panjang. Game tidak dimaksudkan sebagai instrumen tes dengan batas waktu presisi.

## Kontrol

Desktop: panah kiri/kanan atau A/D untuk berpindah. Angka 1, 2, 3 memilih jalur kiri, tengah, kanan. Enter atau Spasi mengonfirmasi saat fokus bukan pada tombol lain. Pada tombol yang sedang fokus, Enter/Spasi menjalankan tombol tersebut sesuai perilaku browser. P atau Escape menjeda/melanjutkan permainan. Tombol Jeda juga tersedia.

HP: sentuh kartu kosakata, gunakan panah layar, atau geser horizontal pada area lintasan. Tombol Lewati gerbang mengonfirmasi. Klik kartu hanya memilih jalur, sehingga siswa masih bisa mengganti pilihan sebelum mengonfirmasi atau waktu habis.

Game otomatis masuk jeda saat tab tidak aktif. Dialog pembahasan menghentikan timer. Jika animasi berlebihan atau tidak nyaman, berhenti bermain dan gunakan latihan kosakata biasa.

## Audio pelafalan

Tombol Dengarkan pelafalan muncul pada pembahasan. Audio memakai Web Speech API dan suara Arab yang tersedia pada browser/perangkat. Tidak ada API berbayar atau file rekaman dalam proyek. Suara sintetis bukan rekaman penutur asli dan kualitasnya bervariasi.

Jika suara Arab belum tersedia, game memberi pesan, bukan membacakan dengan suara bahasa lain. Pasang suara Arab melalui pengaturan bahasa/text-to-speech perangkat dan muat ulang. Layanan suara tertentu dapat memerlukan koneksi internet atau memproses teks sesuai kebijakan vendor perangkat. Game tidak merekam mikrofon.

## Grafik dan aset

Three.js versi 0.186.1 tersimpan lokal dalam public/vendor, termasuk three.module.js, three.core.js, dan lisensi MIT resminya. Proyek tidak memuat library dari CDN saat runtime. Ilustrasi SVG tersimpan lokal dan berasal dari aset orisinal proyek.

WebGL2 diperlukan untuk mode 3D. Jika inisialisasi WebGL gagal, game tetap menyediakan mode ringan dengan gambar, kartu pilihan, timer, skor, dan nyawa. Tidak ada karakter/lintasan 3D dalam mode ringan. Jika konteks WebGL hilang di tengah sesi, game memberi pesan agar halaman dimuat ulang.

## Data dan rekor

Rekor tersimpan pada localStorage browser, terpisah berdasarkan tingkat kesulitan dan tema. Tidak ada akun, nama siswa, database, analytics, atau pengiriman nilai ke server aplikasi. Pengelola hosting dan penyedia suara dapat memiliki pencatatan/pemrosesan sendiri. Progres sesi berada dalam memori dan hilang saat refresh. Hasil sesi dapat diunduh sebagai TXT.

Skor sisi browser dapat diubah pengguna dan bukan nilai ujian yang terlindungi. Gunakan untuk latihan. Untuk penilaian kelas, guru perlu meninjau ejaan, ilustrasi, pelafalan, dan kesesuaian materi. Skor ini tidak membuktikan peningkatan kemahiran tanpa evaluasi pembelajaran terpisah.

## Bank kosakata

Rumah: 6 soal. Sekolah: 3 soal. Anggota tubuh: 5 soal. Hewan: 4 soal. Makanan: 3 soal. Transportasi: 4 soal. Total: 25 soal. Kunci lengkap ada di KUNCI-JAWABAN.md.

Kata مَكْتَبٌ dipakai untuk meja belajar. Transliterasi membantu pembacaan praktis dan tidak menggantikan contoh pengucapan dari guru. Harakat ditampilkan pada semua kartu jawaban.

## Ubah materi

Edit public/questions.mjs untuk mengganti kata, harakat, arti, tema, atau gambar. Pastikan id unik, word memuat ejaan dasar, vocalized memuat kata berharakat, dan image mengarah pada gambar yang benar. Mengubah jumlah soal atau tema membutuhkan pembaruan label jumlah pada index.html. Aturan waktu dan penilaian ada di public/rules.mjs. Grafik ada di public/world.mjs, sedangkan alur permainan ada di public/app.mjs.

## Pemeriksaan

```bash
npm test
node --check public/app.mjs
node --check public/world.mjs
node --check server.mjs
```

Tujuh tes otomatis lulus: bank soal dan gambar, pilihan jawaban, penilaian semua jalur, pengurangan nyawa ketika tanpa pilihan, timer tingkat kesulitan, kontrol antarmuka, dan resolusi impor modul lokal. Pemeriksaan sintaks JavaScript juga lulus.

Server pengembangan dapat dimulai, tetapi akses HTTP lokal dari alat pemeriksaan terhalang pembatasan lingkungan pembuatan. Pengujian browser interaktif, WebGL, audio, serta tampilan HP/laptop belum selesai. Tidak ada deployment GitHub/Vercel yang dilakukan dari lingkungan ini.

Sebelum digunakan di kelas: coba semua jalur, jawaban salah, kehabisan waktu tanpa pilihan, tiga kesalahan, satu sesi tema lengkap, semua tingkat, jeda/resume, pindah tab, unduh hasil, dan audio pada perangkat sasaran. Periksa console browser jika gambar atau modul tidak muncul. Pastikan public/vendor turut diunggah ke GitHub.

## Lisensi

Kode aplikasi dan ilustrasi: MIT. Three.js memakai lisensi MIT tersendiri pada public/vendor/THREE-LICENSE.txt.
