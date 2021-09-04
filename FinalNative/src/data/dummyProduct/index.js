import {
  BaliHotel,
  BaliHotel2,
  BaliHotel3,
  LembangHotel,
  LembangHotel2,
  LembangHotel3,
  SyariahHotel,
  SyariahHotel2,
  JakartaHotel,
  JogjaHotel,
  PBB,
} from '../../assets';

export const dummyProduct = [
  {
    id: 1,
    nama: 'Bali Hotel',
    gambar: [BaliHotel, BaliHotel2, BaliHotel3],
    jenis: {
      id: 1,
      nama: 'Hotel',
      gambar: PBB,
    },
    harga: 1250000,
    nilai: 4.25,
    jenisHotel: 'Romance',
    kamar: ['Family', 'Single', 'Romance', 'Vloger', 'Bisnis'],
    ready: true,
    jumlah: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    lokasi: 'Denpasar, Nusa Dua',
    tentang:
      'Hotel Kami Memiliki Fasilitas Yang Tidak Kalah Bagus Dari Hotel Lainnya, Antara lain: Kolam Renang, Pemandian Air Panas,, Meeting Rooms, Family rooms, Park, Dll. Jika Anda Tertarik Dengan Hotel Kami Silahkan Anda Berkunjung, Kami Menanti Kedatangan Anda',
  },
  {
    id: 2,
    nama: 'Lembang Hotel',
    gambar: [LembangHotel, LembangHotel2, LembangHotel3],
    jenis: {
      id: 1,
      nama: 'Hotel',
      gambar: PBB,
    },
    harga: 1250000,
    nilai: 4.25,
    jenisHotel: 'Familly',
    kamar: ['Family', 'Single', 'Romance', 'Vloger', 'Bisnis'],
    ready: true,
    jumlah: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    lokasi: 'Lembang',
    tentang:
      'Hotel Kami Memiliki Fasilitas Yang Tidak Kalah Bagus Dari Hotel Lainnya, Antara lain: Kolam Renang, Pemandian Air Panas,, Meeting Rooms, Family rooms, Park, Dll. Jika Anda Tertarik Dengan Hotel Kami Silahkan Anda Berkunjung, Kami Menanti Kedatangan Anda',
  },
  {
    id: 3,
    nama: 'Syariah Hotels',
    gambar: [SyariahHotel, SyariahHotel2],
    jenis: {
      id: 1,
      nama: 'Hotel',
      gambar: PBB,
    },
    harga: 1250000,
    nilai: 4.25,
    jenisHotel: 'Syariah',
    kamar: ['Family', 'Single', 'Romance', 'Vloger', 'Bisnis'],
    ready: true,
    jumlah: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    lokasi: 'Jakarta Selatan',
    tentang:
      'Hotel Kami Memiliki Fasilitas Yang Tidak Kalah Bagus Dari Hotel Lainnya, Antara lain: Kolam Renang, Pemandian Air Panas,, Meeting Rooms, Family rooms, Park, Dll. Jika Anda Tertarik Dengan Hotel Kami Silahkan Anda Berkunjung, Kami Menanti Kedatangan Anda',
  },
  {
    id: 4,
    nama: 'Jogja Hotels',
    gambar: [JogjaHotel, LembangHotel2, LembangHotel3],
    jenis: {
      id: 1,
      nama: 'Hotel',
      gambar: PBB,
    },
    harga: 1250000,
    nilai: 4.25,
    jenisHotel: 'Vloger',
    kamar: ['Family', 'Single', 'Romance', 'Vloger', 'Bisnis'],
    ready: true,
    jumlah: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    lokasi: 'Jogjakarta',
    tentang:
      'Hotel Kami Memiliki Fasilitas Yang Tidak Kalah Bagus Dari Hotel Lainnya, Antara lain: Kolam Renang, Pemandian Air Panas,, Meeting Rooms, Family rooms, Park, Dll. Jika Anda Tertarik Dengan Hotel Kami Silahkan Anda Berkunjung, Kami Menanti Kedatangan Anda',
  },
  {
    id: 5,
    nama: 'Jakarta Hotel',
    gambar: [JakartaHotel, LembangHotel2, LembangHotel3],
    jenis: {
      id: 1,
      nama: 'Hotel',
      gambar: PBB,
    },
    harga: 1250000,
    nilai: 4.25,
    jenisHotel: 'Culture',
    kamar: ['Family', 'Single', 'Romance', 'Vloger', 'Bisnis'],
    ready: true,
    jumlah: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    lokasi: 'Jakarta Pusat',
    tentang:
      'Hotel Kami Memiliki Fasilitas Yang Tidak Kalah Bagus Dari Hotel Lainnya, Antara lain: Kolam Renang, Pemandian Air Panas,, Meeting Rooms, Family rooms, Park, Dll. Jika Anda Tertarik Dengan Hotel Kami Silahkan Anda Berkunjung, Kami Menanti Kedatangan Anda',
  },
];
