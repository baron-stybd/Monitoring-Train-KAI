import { useState, useEffect, useRef } from "react";

// ===================== DATA GAPEKA 2026 =====================
const GAPEKA_2026 = {
  argo: [
    {
      kode: "GA101",
      nama: "Argo Bromo Anggrek",
      relasi: "Gambir → Surabaya Pasar Turi",
      kelas: "Eksekutif",
      jadwal: [
        { stasiun: "Gambir", tiba: "-", berangkat: "08:00" },
        { stasiun: "Cirebon", tiba: "10:12", berangkat: "10:17" },
        { stasiun: "Tegal", tiba: "11:25", berangkat: "11:28" },
        { stasiun: "Pekalongan", tiba: "12:10", berangkat: "12:13" },
        { stasiun: "Semarang Tawang", tiba: "13:30", berangkat: "13:40" },
        { stasiun: "Surabaya Pasar Turi", tiba: "17:00", berangkat: "-" },
      ],
      status: "running",
      posisi: "Semarang Tawang",
      delay: 0,
      gerbong: 8,
      kapasitas: 400,
      terisi: 380,
    },
    {
      kode: "GA501",
      nama: "Argo Wilis",
      relasi: "Bandung → Surabaya Gubeng",
      kelas: "Eksekutif",
      jadwal: [
        { stasiun: "Bandung", tiba: "-", berangkat: "07:00" },
        { stasiun: "Yogyakarta", tiba: "11:45", berangkat: "11:55" },
        { stasiun: "Solo Balapan", tiba: "12:40", berangkat: "12:45" },
        { stasiun: "Surabaya Gubeng", tiba: "15:30", berangkat: "-" },
      ],
      status: "running",
      posisi: "Yogyakarta",
      delay: 5,
      gerbong: 7,
      kapasitas: 350,
      terisi: 320,
    },
    {
      kode: "GA701",
      nama: "Argo Parahyangan",
      relasi: "Gambir → Bandung",
      kelas: "Eksekutif",
      jadwal: [
        { stasiun: "Gambir", tiba: "-", berangkat: "06:30" },
        { stasiun: "Bekasi", tiba: "06:58", berangkat: "07:00" },
        { stasiun: "Bandung", tiba: "09:15", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Gambir",
      delay: 0,
      gerbong: 8,
      kapasitas: 400,
      terisi: 350,
    },
    {
      kode: "GA801",
      nama: "Argo Lawu",
      relasi: "Gambir → Solo Balapan",
      kelas: "Eksekutif",
      jadwal: [
        { stasiun: "Gambir", tiba: "-", berangkat: "20:45" },
        { stasiun: "Cirebon", tiba: "23:25", berangkat: "23:30" },
        { stasiun: "Purwokerto", tiba: "01:20", berangkat: "01:25" },
        { stasiun: "Yogyakarta", tiba: "03:40", berangkat: "03:45" },
        { stasiun: "Solo Balapan", tiba: "04:35", berangkat: "-" },
      ],
      status: "running",
      posisi: "Cirebon",
      delay: 5,
      gerbong: 9,
      kapasitas: 450,
      terisi: 410,
    }
  ],
  intercity: [
    {
      kode: "GA201",
      nama: "Gajayana",
      relasi: "Gambir → Malang",
      kelas: "Eksekutif",
      jadwal: [
        { stasiun: "Gambir", tiba: "-", berangkat: "17:30" },
        { stasiun: "Yogyakarta", tiba: "22:15", berangkat: "22:25" },
        { stasiun: "Solo Balapan", tiba: "23:10", berangkat: "23:15" },
        { stasiun: "Madiun", tiba: "00:35", berangkat: "00:40" },
        { stasiun: "Malang", tiba: "04:30", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Yogyakarta",
      delay: 0,
      gerbong: 7,
      kapasitas: 350,
      terisi: 290,
    },
    {
      kode: "GA301",
      nama: "Taksaka",
      relasi: "Gambir → Yogyakarta",
      kelas: "Eksekutif",
      jadwal: [
        { stasiun: "Gambir", tiba: "-", berangkat: "09:00" },
        { stasiun: "Cirebon", tiba: "11:00", berangkat: "11:05" },
        { stasiun: "Yogyakarta", tiba: "14:30", berangkat: "-" },
      ],
      status: "delay",
      posisi: "Cirebon",
      delay: 15,
      gerbong: 6,
      kapasitas: 300,
      terisi: 256,
    },
    {
      kode: "GA401",
      nama: "Lodaya",
      relasi: "Bandung → Solo Balapan",
      kelas: "Eksekutif/Bisnis",
      jadwal: [
        { stasiun: "Bandung", tiba: "-", berangkat: "07:00" },
        { stasiun: "Tasikmalaya", tiba: "08:30", berangkat: "08:35" },
        { stasiun: "Banjar", tiba: "09:15", berangkat: "09:20" },
        { stasiun: "Kroya", tiba: "10:45", berangkat: "10:50" },
        { stasiun: "Yogyakarta", tiba: "12:20", berangkat: "12:30" },
        { stasiun: "Solo Balapan", tiba: "13:15", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Kroya",
      delay: 0,
      gerbong: 8,
      kapasitas: 400,
      terisi: 310,
    },
    {
      kode: "GA601",
      nama: "Bima",
      relasi: "Gambir → Surabaya Gubeng",
      kelas: "Eksekutif",
      jadwal: [
        { stasiun: "Gambir", tiba: "-", berangkat: "16:00" },
        { stasiun: "Cirebon", tiba: "18:12", berangkat: "18:17" },
        { stasiun: "Semarang Tawang", tiba: "21:30", berangkat: "21:40" },
        { stasiun: "Surabaya Gubeng", tiba: "02:00", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Gambir",
      delay: 0,
      gerbong: 9,
      kapasitas: 450,
      terisi: 420,
    },
    {
      kode: "GB101",
      nama: "Sancaka",
      relasi: "Yogyakarta → Surabaya Gubeng",
      kelas: "Eksekutif/Bisnis",
      jadwal: [
        { stasiun: "Yogyakarta", tiba: "-", berangkat: "07:30" },
        { stasiun: "Solo Balapan", tiba: "08:15", berangkat: "08:20" },
        { stasiun: "Madiun", tiba: "09:40", berangkat: "09:45" },
        { stasiun: "Surabaya Gubeng", tiba: "11:30", berangkat: "-" },
      ],
      status: "delay",
      posisi: "Madiun",
      delay: 22,
      gerbong: 8,
      kapasitas: 400,
      terisi: 275,
    },
    {
      kode: "GB201",
      nama: "Kaligung",
      relasi: "Tegal → Semarang Poncol",
      kelas: "Bisnis",
      jadwal: [
        { stasiun: "Tegal", tiba: "-", berangkat: "06:00" },
        { stasiun: "Pekalongan", tiba: "06:50", berangkat: "06:55" },
        { stasiun: "Semarang Poncol", tiba: "08:10", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Pekalongan",
      delay: 0,
      gerbong: 5,
      kapasitas: 250,
      terisi: 190,
    },
  ],
  ekonomi: [
    {
      kode: "GC101",
      nama: "Progo",
      relasi: "Pasar Senen → Lempuyangan",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Pasar Senen", tiba: "-", berangkat: "21:00" },
        { stasiun: "Cirebon", tiba: "23:30", berangkat: "23:35" },
        { stasiun: "Purwokerto", tiba: "02:10", berangkat: "02:20" },
        { stasiun: "Kroya", tiba: "02:50", berangkat: "02:55" },
        { stasiun: "Kebumen", tiba: "03:30", berangkat: "03:35" },
        { stasiun: "Kutoarjo", tiba: "04:10", berangkat: "04:15" },
        { stasiun: "Lempuyangan", tiba: "05:15", berangkat: "-" },
      ],
      status: "running",
      posisi: "Purwokerto",
      delay: 0,
      gerbong: 8,
      kapasitas: 600,
      terisi: 580,
    },
    {
      kode: "GC102",
      nama: "Bengawan",
      relasi: "Pasar Senen → Solo Jebres",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Pasar Senen", tiba: "-", berangkat: "14:30" },
        { stasiun: "Cirebon", tiba: "17:00", berangkat: "17:10" },
        { stasiun: "Purwokerto", tiba: "19:50", berangkat: "20:00" },
        { stasiun: "Kroya", tiba: "20:30", berangkat: "20:35" },
        { stasiun: "Gombong", tiba: "21:00", berangkat: "21:05" },
        { stasiun: "Kebumen", tiba: "21:25", berangkat: "21:30" },
        { stasiun: "Kutoarjo", tiba: "22:05", berangkat: "22:10" },
        { stasiun: "Yogyakarta", tiba: "23:00", berangkat: "23:10" },
        { stasiun: "Solo Jebres", tiba: "23:55", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Pasar Senen",
      delay: 0,
      gerbong: 8,
      kapasitas: 600,
      terisi: 450,
    },
    {
      kode: "GC201",
      nama: "Kahuripan",
      relasi: "Kiaracondong → Blitar",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Kiaracondong", tiba: "-", berangkat: "07:00" },
        { stasiun: "Tasikmalaya", tiba: "08:40", berangkat: "08:45" },
        { stasiun: "Banjar", tiba: "09:25", berangkat: "09:30" },
        { stasiun: "Kroya", tiba: "11:00", berangkat: "11:05" },
        { stasiun: "Yogyakarta", tiba: "13:00", berangkat: "13:10" },
        { stasiun: "Solo Balapan", tiba: "13:55", berangkat: "14:05" },
        { stasiun: "Madiun", tiba: "15:25", berangkat: "15:30" },
        { stasiun: "Blitar", tiba: "18:30", berangkat: "-" },
      ],
      status: "delay",
      posisi: "Kroya",
      delay: 18,
      gerbong: 9,
      kapasitas: 675,
      terisi: 620,
    },
    {
      kode: "GC301",
      nama: "Logawa",
      relasi: "Purwokerto → Jember",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Purwokerto", tiba: "-", berangkat: "07:30" },
        { stasiun: "Kroya", tiba: "08:00", berangkat: "08:05" },
        { stasiun: "Yogyakarta", tiba: "10:00", berangkat: "10:10" },
        { stasiun: "Solo Balapan", tiba: "10:55", berangkat: "11:00" },
        { stasiun: "Madiun", tiba: "12:20", berangkat: "12:25" },
        { stasiun: "Surabaya Gubeng", tiba: "14:30", berangkat: "14:40" },
        { stasiun: "Jember", tiba: "18:00", berangkat: "-" },
      ],
      status: "running",
      posisi: "Madiun",
      delay: 10,
      gerbong: 7,
      kapasitas: 525,
      terisi: 490,
    },
    {
      kode: "GC401",
      nama: "Kutojaya Utara",
      relasi: "Kiaracondong → Pasar Senen",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Kiaracondong", tiba: "-", berangkat: "08:20" },
        { stasiun: "Cibatu", tiba: "09:10", berangkat: "09:15" },
        { stasiun: "Tasikmalaya", tiba: "10:00", berangkat: "10:05" },
        { stasiun: "Banjar", tiba: "10:40", berangkat: "10:45" },
        { stasiun: "Ciamis", tiba: "11:00", berangkat: "11:05" },
        { stasiun: "Cirebon", tiba: "13:00", berangkat: "13:10" },
        { stasiun: "Pasar Senen", tiba: "15:30", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Tasikmalaya",
      delay: 0,
      gerbong: 6,
      kapasitas: 450,
      terisi: 380,
    },
    {
      kode: "GC501",
      nama: "Gaya Baru Malam Selatan",
      relasi: "Pasar Senen → Surabaya Gubeng",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Pasar Senen", tiba: "-", berangkat: "17:00" },
        { stasiun: "Cirebon", tiba: "19:30", berangkat: "19:40" },
        { stasiun: "Purwokerto", tiba: "22:20", berangkat: "22:30" },
        { stasiun: "Kroya", tiba: "23:00", berangkat: "23:05" },
        { stasiun: "Yogyakarta", tiba: "01:00", berangkat: "01:10" },
        { stasiun: "Solo Balapan", tiba: "01:55", berangkat: "02:00" },
        { stasiun: "Madiun", tiba: "03:20", berangkat: "03:25" },
        { stasiun: "Surabaya Gubeng", tiba: "05:30", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Pasar Senen",
      delay: 0,
      gerbong: 10,
      kapasitas: 750,
      terisi: 700,
    },
    {
      kode: "GC601",
      nama: "Sri Tanjung",
      relasi: "Lempuyangan → Banyuwangi Baru",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Lempuyangan", tiba: "-", berangkat: "08:00" },
        { stasiun: "Solo Balapan", tiba: "08:45", berangkat: "08:50" },
        { stasiun: "Madiun", tiba: "10:10", berangkat: "10:15" },
        { stasiun: "Surabaya Gubeng", tiba: "12:20", berangkat: "12:30" },
        { stasiun: "Jember", tiba: "15:45", berangkat: "15:50" },
        { stasiun: "Banyuwangi Baru", tiba: "17:30", berangkat: "-" },
      ],
      status: "running",
      posisi: "Solo Balapan",
      delay: 5,
      gerbong: 8,
      kapasitas: 600,
      terisi: 540,
    },
    {
      kode: "GC701",
      nama: "Brantas",
      relasi: "Pasar Senen → Blitar",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Pasar Senen", tiba: "-", berangkat: "10:30" },
        { stasiun: "Cirebon", tiba: "13:00", berangkat: "13:10" },
        { stasiun: "Semarang Tawang", tiba: "16:30", berangkat: "16:40" },
        { stasiun: "Solo Balapan", tiba: "18:40", berangkat: "18:50" },
        { stasiun: "Madiun", tiba: "20:05", berangkat: "20:10" },
        { stasiun: "Kediri", tiba: "22:00", berangkat: "22:05" },
        { stasiun: "Blitar", tiba: "23:00", berangkat: "-" },
      ],
      status: "delay",
      posisi: "Cirebon",
      delay: 30,
      gerbong: 9,
      kapasitas: 675,
      terisi: 610,
    },
    {
      kode: "GC801",
      nama: "Pasundan",
      relasi: "Kiaracondong → Surabaya Gubeng",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Kiaracondong", tiba: "-", berangkat: "06:00" },
        { stasiun: "Tasikmalaya", tiba: "07:40", berangkat: "07:45" },
        { stasiun: "Banjar", tiba: "08:25", berangkat: "08:30" },
        { stasiun: "Kroya", tiba: "10:00", berangkat: "10:05" },
        { stasiun: "Kebumen", tiba: "10:40", berangkat: "10:45" },
        { stasiun: "Kutoarjo", tiba: "11:20", berangkat: "11:25" },
        { stasiun: "Yogyakarta", tiba: "12:15", berangkat: "12:25" },
        { stasiun: "Solo Balapan", tiba: "13:10", berangkat: "13:20" },
        { stasiun: "Madiun", tiba: "14:40", berangkat: "14:45" },
        { stasiun: "Surabaya Gubeng", tiba: "16:45", berangkat: "-" },
      ],
      status: "running",
      posisi: "Kroya",
      delay: 0,
      gerbong: 10,
      kapasitas: 750,
      terisi: 680,
    },
    {
      kode: "GC901",
      nama: "Menoreh",
      relasi: "Pasar Senen → Semarang Tawang",
      kelas: "Ekonomi",
      jadwal: [
        { stasiun: "Pasar Senen", tiba: "-", berangkat: "09:00" },
        { stasiun: "Cirebon", tiba: "11:30", berangkat: "11:40" },
        { stasiun: "Pekalongan", tiba: "13:00", berangkat: "13:05" },
        { stasiun: "Semarang Tawang", tiba: "14:30", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Cirebon",
      delay: 0,
      gerbong: 7,
      kapasitas: 525,
      terisi: 410,
    },
  ],
  commuter: [
    {
      kode: "KRL001",
      nama: "KRL Commuter Bogor",
      relasi: "Bogor → Jakarta Kota",
      kelas: "Commuter",
      jadwal: [
        { stasiun: "Bogor", tiba: "-", berangkat: "06:00" },
        { stasiun: "Depok", tiba: "06:20", berangkat: "06:22" },
        { stasiun: "Pasar Minggu", tiba: "06:45", berangkat: "06:46" },
        { stasiun: "Manggarai", tiba: "07:05", berangkat: "07:07" },
        { stasiun: "Jakarta Kota", tiba: "07:30", berangkat: "-" },
      ],
      status: "running",
      posisi: "Manggarai",
      delay: 3,
      gerbong: 10,
      kapasitas: 1200,
      terisi: 1050,
    },
    {
      kode: "KRL002",
      nama: "KRL Commuter Bekasi",
      relasi: "Bekasi → Jakarta Kota",
      kelas: "Commuter",
      jadwal: [
        { stasiun: "Bekasi", tiba: "-", berangkat: "07:00" },
        { stasiun: "Jatinegara", tiba: "07:35", berangkat: "07:37" },
        { stasiun: "Jakarta Kota", tiba: "07:55", berangkat: "-" },
      ],
      status: "ontime",
      posisi: "Bekasi",
      delay: 0,
      gerbong: 10,
      kapasitas: 1200,
      terisi: 980,
    },
    {
      kode: "KRL003",
      nama: "KRL Commuter Serpong",
      relasi: "Parung Panjang → Tanah Abang",
      kelas: "Commuter",
      jadwal: [
        { stasiun: "Parung Panjang", tiba: "-", berangkat: "05:30" },
        { stasiun: "Serpong", tiba: "06:00", berangkat: "06:02" },
        { stasiun: "Tanah Abang", tiba: "06:45", berangkat: "-" },
      ],
      status: "delay",
      posisi: "Serpong",
      delay: 8,
      gerbong: 10,
      kapasitas: 1200,
      terisi: 800,
    },
  ],
  bandara: [
    {
      kode: "ARB01",
      nama: "KA Bandara Soetta",
      relasi: "Manggarai → Bandara Soekarno-Hatta",
      kelas: "Bandara",
      jadwal: [
        { stasiun: "Manggarai", tiba: "-", berangkat: "06:00" },
        { stasiun: "BNI City", tiba: "06:08", berangkat: "06:10" },
        { stasiun: "Duri", tiba: "06:24", berangkat: "06:26" },
        { stasiun: "Batu Ceper", tiba: "06:42", berangkat: "06:44" },
        { stasiun: "Bandara Soekarno-Hatta", tiba: "06:56", berangkat: "-" }
      ],
      status: "running",
      posisi: "BNI City",
      delay: 0,
      gerbong: 6,
      kapasitas: 272,
      terisi: 180
    },
    {
      kode: "ARB02",
      nama: "KA Bandara YIA",
      relasi: "Yogyakarta → Bandara YIA",
      kelas: "Bandara",
      jadwal: [
        { stasiun: "Yogyakarta", tiba: "-", berangkat: "08:00" },
        { stasiun: "Wates", tiba: "08:26", berangkat: "08:28" },
        { stasiun: "Bandara YIA", tiba: "08:39", berangkat: "-" }
      ],
      status: "ontime",
      posisi: "Yogyakarta",
      delay: 0,
      gerbong: 4,
      kapasitas: 200,
      terisi: 150
    },
    {
      kode: "ARB03",
      nama: "KA Bandara Adi Soemarmo",
      relasi: "Solo Balapan → Bandara Adi Soemarmo",
      kelas: "Bandara",
      jadwal: [
        { stasiun: "Solo Balapan", tiba: "-", berangkat: "09:00" },
        { stasiun: "Kadipiro", tiba: "09:08", berangkat: "09:10" },
        { stasiun: "Bandara Adi Soemarmo", tiba: "09:19", berangkat: "-" }
      ],
      status: "running",
      posisi: "Kadipiro",
      delay: 0,
      gerbong: 4,
      kapasitas: 200,
      terisi: 90
    }
  ]
};

const ALL_TRAINS = [...GAPEKA_2026.argo, ...GAPEKA_2026.intercity, ...GAPEKA_2026.ekonomi, ...GAPEKA_2026.commuter, ...GAPEKA_2026.bandara];

const STATUS_CONFIG = {
  running: { label: "Berjalan", color: "#00D4AA", bg: "#00D4AA20", dot: "#00D4AA" },
  ontime: { label: "Tepat Waktu", color: "#4ADE80", bg: "#4ADE8020", dot: "#4ADE80" },
  delay: { label: "Terlambat", color: "#F59E0B", bg: "#F59E0B20", dot: "#F59E0B" },
  stopped: { label: "Berhenti", color: "#EF4444", bg: "#EF444420", dot: "#EF4444" },
};

const KELAS_CONFIG = {
  Eksekutif: { color: "#FFD700", icon: "★" },
  "Eksekutif/Bisnis": { color: "#C0C0C0", icon: "◆" },
  Bisnis: { color: "#CD7F32", icon: "●" },
  Ekonomi: { color: "#34D399", icon: "◉" },
  Commuter: { color: "#60A5FA", icon: "⬡" },
  Bandara: { color: "#A855F7", icon: "✈️" },
};

// ===================== COMPONENTS =====================
function PulseDot({ color }) {
  return (
    <span style={{ position: "relative", display: "inline-block", width: 10, height: 10 }}>
      <span style={{
        position: "absolute", inset: 0, borderRadius: "50%", background: color,
        animation: "pulse-ring 1.5s ease-out infinite", opacity: 0.4
      }} />
      <span style={{
        position: "absolute", inset: 1, borderRadius: "50%", background: color
      }} />
    </span>
  );
}

function OccupancyBar({ terisi, kapasitas }) {
  const pct = Math.round((terisi / kapasitas) * 100);
  const barColor = pct > 90 ? "#EF4444" : pct > 70 ? "#F59E0B" : "#00D4AA";
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#94A3B8", marginBottom: 4 }}>
        <span>Isi Kursi</span>
        <span style={{ color: barColor, fontWeight: 700 }}>{pct}%</span>
      </div>
      <div style={{ height: 5, borderRadius: 99, background: "#1E293B", overflow: "hidden" }}>
        <div style={{
          width: `${pct}%`, height: "100%", borderRadius: 99,
          background: `linear-gradient(90deg, ${barColor}88, ${barColor})`,
          transition: "width 1s ease"
        }} />
      </div>
    </div>
  );
}

function TrainCard({ train, onClick, selected }) {
  const status = STATUS_CONFIG[train.status];
  const kelas = KELAS_CONFIG[train.kelas] || KELAS_CONFIG["Bisnis"];
  return (
    <div onClick={() => onClick(train)} style={{
      background: selected ? "linear-gradient(135deg, #1E293B, #0F172A)" : "#0F172A",
      border: `1px solid ${selected ? "#00D4AA" : "#1E293B"}`,
      borderRadius: 14, padding: "14px 16px", cursor: "pointer",
      transition: "all 0.2s ease", marginBottom: 10,
      boxShadow: selected ? `0 0 20px ${status.color}30` : "none",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10, flexShrink: 0,
          background: `linear-gradient(135deg, ${kelas.color}30, ${kelas.color}10)`,
          border: `1px solid ${kelas.color}50`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, color: kelas.color
        }}>
          {kelas.icon || "🚂"}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 800, fontSize: 15, color: "#F1F5F9", fontFamily: "'Sora', sans-serif" }}>
              {train.nama}
            </span>
            <span style={{
              fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 99,
              background: status.bg, color: status.color, border: `1px solid ${status.color}40`,
              display: "flex", alignItems: "center", gap: 4
            }}>
              <PulseDot color={status.dot} />
              {status.label}
              {train.delay > 0 && ` +${train.delay}m`}
            </span>
          </div>
          <div style={{ fontSize: 12, color: "#64748B", marginTop: 3 }}>{train.kode} · {train.relasi}</div>
          <div style={{ fontSize: 11, color: "#475569", marginTop: 5 }}>
            📍 {train.posisi}
          </div>
          <div style={{ marginTop: 8 }}>
            <OccupancyBar terisi={train.terisi} kapasitas={train.kapasitas} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleTimeline({ train }) {
  const status = STATUS_CONFIG[train.status];
  return (
    <div>
      <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#CBD5E1", fontSize: 13, marginBottom: 12, letterSpacing: 1 }}>
        JADWAL PERJALANAN
      </div>
      <div style={{ position: "relative" }}>
        {train.jadwal.map((stop, i) => {
          const isCurrent = stop.stasiun === train.posisi;
          const isPast = train.jadwal.findIndex(s => s.stasiun === train.posisi) > i;
          return (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 4 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24 }}>
                <div style={{
                  width: 12, height: 12, borderRadius: "50%", flexShrink: 0,
                  background: isCurrent ? status.color : isPast ? "#334155" : "#1E293B",
                  border: `2px solid ${isCurrent ? status.color : isPast ? "#475569" : "#334155"}`,
                  boxShadow: isCurrent ? `0 0 10px ${status.color}` : "none",
                  marginTop: 4,
                }} />
                {i < train.jadwal.length - 1 && (
                  <div style={{ width: 2, flex: 1, background: isPast ? "#334155" : "#1E293B", minHeight: 20 }} />
                )}
              </div>
              <div style={{
                flex: 1, padding: "8px 12px", borderRadius: 10, marginBottom: 4,
                background: isCurrent ? `${status.color}10` : "transparent",
                border: isCurrent ? `1px solid ${status.color}30` : "1px solid transparent",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontWeight: isCurrent ? 700 : 500, fontSize: 14,
                    color: isCurrent ? "#F1F5F9" : isPast ? "#475569" : "#94A3B8"
                  }}>
                    {stop.stasiun}
                    {isCurrent && <span style={{ fontSize: 10, marginLeft: 6, color: status.color }}>◄ HERE</span>}
                  </span>
                  <div style={{ display: "flex", gap: 12, fontSize: 12 }}>
                    {stop.tiba !== "-" && (
                      <span style={{ color: isPast ? "#334155" : "#64748B" }}>↓ {stop.tiba}</span>
                    )}
                    {stop.berangkat !== "-" && (
                      <span style={{ color: isPast ? "#334155" : "#94A3B8" }}>↑ {stop.berangkat}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div style={{
      background: "#0F172A", border: "1px solid #1E293B", borderRadius: 14, padding: "16px 20px",
      flex: 1, minWidth: 0
    }}>
      <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
      <div style={{ fontSize: 26, fontWeight: 900, color: color || "#F1F5F9", fontFamily: "'Sora', sans-serif" }}>{value}</div>
      <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: "#334155", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

// ===================== KOORDINAT STASIUN =====================
const STATION_COORDS = {
  "Gambir":             { lat: -6.1764,  lng: 106.8294 },
  "Pasar Senen":        { lat: -6.1724,  lng: 106.8452 },
  "Jatinegara":         { lat: -6.2147,  lng: 106.8702 },
  "Bekasi":             { lat: -6.2383,  lng: 107.0000 },
  "Manggarai":          { lat: -6.2099,  lng: 106.8503 },
  "Pasar Minggu":       { lat: -6.2835,  lng: 106.8454 },
  "Depok":              { lat: -6.3897,  lng: 106.8219 },
  "Bogor":              { lat: -6.5952,  lng: 106.7892 },
  "Tanah Abang":        { lat: -6.1864,  lng: 106.8107 },
  "Serpong":            { lat: -6.3197,  lng: 106.6647 },
  "Parung Panjang":     { lat: -6.3564,  lng: 106.5596 },
  "Cirebon":            { lat: -6.7053,  lng: 108.5572 },
  "Tegal":              { lat: -6.8697,  lng: 109.1258 },
  "Pekalongan":         { lat: -6.8886,  lng: 109.6753 },
  "Semarang Tawang":    { lat: -6.9717,  lng: 110.4281 },
  "Semarang Poncol":    { lat: -6.9644,  lng: 110.4147 },
  "Purwokerto":         { lat: -7.4267,  lng: 109.2347 },
  "Kroya":              { lat: -7.6267,  lng: 109.2483 },
  "Gombong":            { lat: -7.6114,  lng: 109.5106 },
  "Kebumen":            { lat: -7.6708,  lng: 109.6519 },
  "Kutoarjo":           { lat: -7.7183,  lng: 109.9058 },
  "Lempuyangan":        { lat: -7.7844,  lng: 110.3742 },
  "Yogyakarta":         { lat: -7.7893,  lng: 110.3644 },
  "Solo Balapan":       { lat: -7.5581,  lng: 110.8286 },
  "Solo Jebres":        { lat: -7.5558,  lng: 110.8447 },
  "Madiun":             { lat: -7.6297,  lng: 111.5228 },
  "Kediri":             { lat: -7.8161,  lng: 112.0114 },
  "Blitar":             { lat: -8.0958,  lng: 112.1617 },
  "Malang":             { lat: -7.9772,  lng: 112.6317 },
  "Surabaya Pasar Turi":{ lat: -7.2461,  lng: 112.7317 },
  "Surabaya Gubeng":    { lat: -7.2656,  lng: 112.7514 },
  "Jember":             { lat: -8.1811,  lng: 113.6742 },
  "Banyuwangi Baru":    { lat: -8.2011,  lng: 114.3675 },
  "Bandung":            { lat: -6.9064,  lng: 107.6394 },
  "Kiaracondong":       { lat: -6.9250,  lng: 107.6608 },
  "Cibatu":             { lat: -7.1236,  lng: 107.9778 },
  "Tasikmalaya":        { lat: -7.3297,  lng: 108.2183 },
  "Banjar":             { lat: -7.3714,  lng: 108.5378 },
  "Ciamis":             { lat: -7.3311,  lng: 108.3533 },
  // Stasiun Bandara & Area
  "BNI City":           { lat: -6.2023,  lng: 106.8206 },
  "Duri":               { lat: -6.1561,  lng: 106.8011 },
  "Batu Ceper":         { lat: -6.1644,  lng: 106.6661 },
  "Bandara Soekarno-Hatta": { lat: -6.1264, lng: 106.6603 },
  "Wates":              { lat: -7.8600,  lng: 110.1583 },
  "Bandara YIA":        { lat: -7.9044,  lng: 110.0581 },
  "Kadipiro":           { lat: -7.5369,  lng: 110.8256 },
  "Bandara Adi Soemarmo":{ lat: -7.5164, lng: 110.7497 },
};

function interpolateCoord(from, to, progress) {
  if (!from || !to) return from || to;
  return {
    lat: from.lat + (to.lat - from.lat) * progress,
    lng: from.lng + (to.lng - from.lng) * progress,
  };
}

function getTrainCoord(train) {
  const stops = train.jadwal;
  const currentIdx = train.currentStopIdx ?? 0;
  const currentStop = stops[currentIdx];
  if (!currentStop) return null;