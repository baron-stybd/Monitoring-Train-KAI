soimport { useState, useEffect, useRef } from "react";

// ===================== DATA GAPEKA 2026 =====================
const GAPEKA_2026 = {
  intercity: [
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
      ]
      status: "running",
      posisi: "Semarang Tawang",
      delay: 0,
      gerbong: 8,
      kapasitas: 400,
      terisi: 380,
    },
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
};

const ALL_TRAINS = [...GAPEKA_2026.intercity, ...GAPEKA_2026.ekonomi, ...GAPEKA_2026.commuter];

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
          🚂
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
  const coord = STATION_COORDS[currentStop.stasiun];
  if (!train.inTransit || !train.nextStation) return coord;
  const nextCoord = STATION_COORDS[train.nextStation];
  if (!coord || !nextCoord) return coord;
  return interpolateCoord(coord, nextCoord, train.progress || 0);
}

// ===================== REAL-TIME ENGINE =====================
function timeToMinutes(str) {
  if (!str || str === "-") return null;
  const [h, m] = str.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(mins) {
  const total = ((mins % 1440) + 1440) % 1440;
  const h = Math.floor(total / 60).toString().padStart(2, "0");
  const m = (total % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

function computeTrainState(train, nowMinutes) {
  const jadwal = train.jadwal;
  // Build segments: from stop i to stop i+1
  // Use berangkat of current stop and tiba of next stop
  const stops = jadwal.map((s, i) => {
    const dep = timeToMinutes(s.berangkat);
    const arr = timeToMinutes(s.tiba);
    return { ...s, depMin: dep, arrMin: arr, idx: i };
  });

  // Determine which segment or station the train is at
  let posisi = stops[0].stasiun;
  let currentStopIdx = 0;
  let status = "belum";
  let delay = train.baseDelay || 0;

  const firstDep = stops[0].depMin;
  const lastArr = stops[stops.length - 1].arrMin;

  // Handle overnight: if lastArr < firstDep, add 1440 to lastArr
  let adjLastArr = lastArr;
  if (lastArr !== null && firstDep !== null && lastArr < firstDep) adjLastArr = lastArr + 1440;

  // not yet departed
  if (firstDep !== null && nowMinutes < firstDep - delay) {
    return { posisi: stops[0].stasiun, status: "ontime", delay, currentStopIdx: 0, progress: 0 };
  }

  // already arrived at destination
  if (adjLastArr !== null) {
    let adjNow = nowMinutes;
    if (firstDep !== null && nowMinutes < firstDep - 60) adjNow = nowMinutes + 1440;
    if (adjNow >= adjLastArr + delay) {
      return { posisi: stops[stops.length - 1].stasiun, status: "ontime", delay, currentStopIdx: stops.length - 1, progress: 1 };
    }
  }

  // Find current segment
  for (let i = 0; i < stops.length - 1; i++) {
    let depI = stops[i].depMin;
    let arrNext = stops[i + 1].arrMin;
    if (depI === null) depI = stops[i].arrMin;
    if (arrNext === null) arrNext = stops[i + 1].depMin;

    // Adjust for overnight
    if (i > 0 && depI < stops[0].depMin) depI += 1440;
    if (arrNext < stops[0].depMin) arrNext += 1440;

    let adjNow = nowMinutes;
    if (nowMinutes < (stops[0].depMin || 0) - 30) adjNow = nowMinutes + 1440;

    if (adjNow >= depI + delay && adjNow < arrNext + delay) {
      // In transit between stop i and i+1
      const segDuration = arrNext - depI;
      const elapsed = adjNow - (depI + delay);
      const progress = segDuration > 0 ? Math.min(elapsed / segDuration, 1) : 0;
      // posisi shows origin station while traveling
      currentStopIdx = i;
      const statusVal = delay > 20 ? "delay" : delay > 0 ? "delay" : "running";
      return {
        posisi: stops[i].stasiun,
        nextStation: stops[i + 1].stasiun,
        status: statusVal,
        delay,
        currentStopIdx: i,
        progress,
        inTransit: true,
      };
    }

    // At stop i+1 (between arrival and departure)
    const depNext = stops[i + 1].depMin;
    let adjDepNext = depNext;
    if (depNext !== null && depNext < stops[0].depMin) adjDepNext = depNext + 1440;

    if (adjNow >= arrNext + delay && adjDepNext !== null && adjNow < adjDepNext + delay) {
      currentStopIdx = i + 1;
      return {
        posisi: stops[i + 1].stasiun,
        status: delay > 0 ? "delay" : "ontime",
        delay,
        currentStopIdx: i + 1,
        progress: 0,
        inTransit: false,
      };
    }
  }

  // Default fallback
  return { posisi: train.posisi, status: train.status, delay: train.baseDelay || 0, currentStopIdx: 0, progress: 0 };
}

function buildLiveTrain(train, nowMinutes, seed) {
  // Add a stable per-train random delay offset
  const baseDelay = train.baseDelay !== undefined ? train.baseDelay : 0;
  const state = computeTrainState({ ...train, baseDelay }, nowMinutes);

  // Dynamic occupancy: rises through peak hours (7-9, 17-19), lower at night
  const peakFactor = (() => {
    const h = Math.floor(nowMinutes / 60) % 24;
    if (h >= 7 && h <= 9) return 0.95;
    if (h >= 17 && h <= 19) return 0.90;
    if (h >= 22 || h <= 5) return 0.55;
    return 0.75;
  })();
  const jitter = (seed % 7) / 100; // small stable variation per train
  const terisi = Math.round(train.kapasitas * Math.min(peakFactor + jitter, 0.99));

  return { ...train, ...state, terisi };
}

// ===================== PETA LIVE COMPONENT =====================
function PetaLive({ trains, selectedTrain, onSelectTrain }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const polylineRef = useRef(null);
  const infoWindowRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [hoveredTrain, setHoveredTrain] = useState(null);
  const [filterKelas, setFilterKelas] = useState("all");

  const GMAPS_KEY = "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"; // demo key – replace with real

  useEffect(() => {
    if (window.google && window.google.maps) { setMapReady(true); return; }
    const existing = document.getElementById("gmaps-script");
    if (existing) { existing.onload = () => setMapReady(true); return; }
    const script = document.createElement("script");
    script.id = "gmaps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_KEY}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapReady(true);
    script.onerror = () => setMapError(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!mapReady || !mapRef.current || mapInstanceRef.current) return;
    try {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: -7.3, lng: 109.5 },
        zoom: 7,
        mapTypeId: "roadmap",
        styles: [
          { elementType: "geometry", stylers: [{ color: "#0f172a" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#0f172a" }] },
          { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#334155" }] },
          { featureType: "administrative.province", elementType: "geometry.stroke", stylers: [{ color: "#1e293b" }] },
          { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#1e293b" }] },
          { featureType: "poi", elementType: "geometry", stylers: [{ color: "#1e293b" }] },
          { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#475569" }] },
          { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#162032" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#334155" }] },
          { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#475569" }] },
          { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#00d4aa30" }] },
          { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#1e293b" }] },
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#020617" }] },
          { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#334155" }] },
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });
      infoWindowRef.current = new window.google.maps.InfoWindow();
    } catch (e) { setMapError(true); }
  }, [mapReady]);

  // Draw route polyline for selected train
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedTrain) return;
    if (polylineRef.current) polylineRef.current.setMap(null);
    const routeCoords = selectedTrain.jadwal
      .map(s => STATION_COORDS[s.stasiun])
      .filter(Boolean)
      .map(c => ({ lat: c.lat, lng: c.lng }));
    if (routeCoords.length < 2) return;
    polylineRef.current = new window.google.maps.Polyline({
      path: routeCoords,
      geodesic: true,
      strokeColor: STATUS_CONFIG[selectedTrain.status]?.color || "#00D4AA",
      strokeOpacity: 0.7,
      strokeWeight: 3,
      map: mapInstanceRef.current,
      icons: [{
        icon: { path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW, scale: 3, strokeColor: "#fff", fillColor: STATUS_CONFIG[selectedTrain.status]?.color || "#00D4AA", fillOpacity: 1 },
        offset: "50%",
        repeat: "120px"
      }]
    });
    // Draw station dots along route
    selectedTrain.jadwal.forEach(s => {
      const c = STATION_COORDS[s.stasiun];
      if (!c) return;
      new window.google.maps.Circle({
        center: { lat: c.lat, lng: c.lng },
        radius: 1800,
        fillColor: "#00D4AA",
        fillOpacity: 0.15,
        strokeColor: "#00D4AA",
        strokeOpacity: 0.4,
        strokeWeight: 1,
        map: mapInstanceRef.current,
      });
    });
  }, [mapInstanceRef.current, selectedTrain?.kode]);

  // Place/update markers
  useEffect(() => {
    if (!mapInstanceRef.current || !window.google) return;
    const filtered = filterKelas === "all" ? trains : trains.filter(t => {
      if (filterKelas === "Commuter") return t.kelas === "Commuter";
      if (filterKelas === "Ekonomi") return t.kelas === "Ekonomi";
      return ["Eksekutif", "Bisnis", "Eksekutif/Bisnis"].includes(t.kelas);
    });

    // Remove stale markers
    Object.keys(markersRef.current).forEach(kode => {
      if (!filtered.find(t => t.kode === kode)) {
        markersRef.current[kode].setMap(null);
        delete markersRef.current[kode];
      }
    });

    filtered.forEach(train => {
      const coord = getTrainCoord(train);
      if (!coord) return;
      const isSelected = selectedTrain?.kode === train.kode;
      const statusColor = STATUS_CONFIG[train.status]?.color || "#94A3B8";
      const emoji = train.kelas === "Commuter" ? "🚇" : "🚆";
      const svgMarker = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${isSelected ? 44 : 34}" height="${isSelected ? 44 : 34}" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="${isSelected ? 20 : 15}" fill="${statusColor}" opacity="0.2"/>
          <circle cx="22" cy="22" r="${isSelected ? 14 : 10}" fill="${statusColor}" opacity="0.9"/>
          <text x="22" y="28" text-anchor="middle" font-size="${isSelected ? 14 : 11}">${emoji}</text>
        </svg>`;
      const icon = {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svgMarker),
        scaledSize: new window.google.maps.Size(isSelected ? 44 : 34, isSelected ? 44 : 34),
        anchor: new window.google.maps.Point(isSelected ? 22 : 17, isSelected ? 22 : 17),
      };

      if (markersRef.current[train.kode]) {
        markersRef.current[train.kode].setPosition({ lat: coord.lat, lng: coord.lng });
        markersRef.current[train.kode].setIcon(icon);
      } else {
        const marker = new window.google.maps.Marker({
          position: { lat: coord.lat, lng: coord.lng },
          map: mapInstanceRef.current,
          icon,
          title: train.nama,
          zIndex: isSelected ? 999 : 1,
        });
        marker.addListener("click", () => {
          const delay = train.delay > 0 ? `<span style="color:#F59E0B">⚠️ +${train.delay} menit</span>` : `<span style="color:#4ADE80">✅ Tepat Waktu</span>`;
          const content = `
            <div style="font-family:sans-serif;background:#0f172a;color:#f1f5f9;padding:14px;border-radius:10px;min-width:220px;border:1px solid #334155">
              <div style="font-weight:800;font-size:15px;margin-bottom:6px">${train.nama}</div>
              <div style="font-size:12px;color:#64748b;margin-bottom:8px">${train.kode} · ${train.kelas}</div>
              <div style="font-size:12px;margin-bottom:4px">🛤 ${train.relasi}</div>
              <div style="font-size:12px;margin-bottom:4px">📍 ${train.posisi}${train.inTransit && train.nextStation ? ` → ${train.nextStation}` : ""}</div>
              <div style="font-size:12px;margin-bottom:4px">⏱ ${delay}</div>
              <div style="font-size:12px;margin-bottom:10px">👥 ${train.terisi} / ${train.kapasitas} penumpang</div>
              <button onclick="window.__selectTrain('${train.kode}')" style="background:#00D4AA;color:#020617;border:none;padding:6px 14px;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px;width:100%">Lihat Detail →</button>
            </div>`;
          infoWindowRef.current.setContent(content);
          infoWindowRef.current.open(mapInstanceRef.current, marker);
        });
        markersRef.current[train.kode] = marker;
      }
    });

    window.__selectTrain = (kode) => {
      infoWindowRef.current?.close();
      onSelectTrain(trains.find(t => t.kode === kode));
    };
  }, [trains, selectedTrain?.kode, mapReady, filterKelas]);

  // Pan to selected train
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedTrain) return;
    const coord = getTrainCoord(selectedTrain);
    if (coord) mapInstanceRef.current.panTo({ lat: coord.lat, lng: coord.lng });
  }, [selectedTrain?.kode]);

  const activeCt = trains.filter(t => t.inTransit || t.status === "running").length;
  const delayCt  = trains.filter(t => t.delay > 0).length;

  return (
    <div style={{ animation: "fadeIn 0.3s ease" }}>
      {/* Peta header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 20, margin: 0, color: "#F1F5F9" }}>
            📍 Peta Pemantauan Live
          </h2>
          <p style={{ color: "#475569", fontSize: 13, margin: "4px 0 0" }}>
            Posisi kereta real-time berdasarkan jadwal GAPEKA 2026 · diperbarui setiap 15 detik
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          {[
            { label: "🚆 Aktif", val: activeCt, color: "#00D4AA" },
            { label: "⚠️ Delay", val: delayCt, color: "#F59E0B" },
            { label: "🚃 Total", val: trains.length, color: "#60A5FA" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: 10, padding: "8px 14px", textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "#475569" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
        {[["all","Semua Kereta"],["Eksekutif","Eksekutif/Bisnis"],["Ekonomi","Ekonomi"],["Commuter","KRL Commuter"]].map(([v, l]) => (
          <button key={v} onClick={() => setFilterKelas(v)} style={{
            background: filterKelas === v ? "#00D4AA15" : "transparent",
            border: `1px solid ${filterKelas === v ? "#00D4AA" : "#1E293B"}`,
            borderRadius: 8, padding: "5px 12px", fontSize: 12, fontWeight: 600,
            color: filterKelas === v ? "#00D4AA" : "#64748B", cursor: "pointer", transition: "all 0.2s"
          }}>{l}</button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        {/* Map */}
        <div style={{ flex: 1, position: "relative" }}>
          {mapError ? (
            <div style={{
              background: "#0F172A", border: "1px solid #1E293B", borderRadius: 16,
              height: 520, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12
            }}>
              <div style={{ fontSize: 40 }}>🗺️</div>
              <div style={{ fontWeight: 700, color: "#F1F5F9" }}>Google Maps tidak tersedia</div>
              <div style={{ fontSize: 13, color: "#475569", textAlign: "center", maxWidth: 320 }}>
                Diperlukan API Key Google Maps yang valid.<br/>
                Gunakan peta SVG built-in di bawah sebagai alternatif.
              </div>
            </div>
          ) : (
            <>
              {!mapReady && (
                <div style={{
                  position: "absolute", inset: 0, background: "#0F172A", borderRadius: 16,
                  display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10,
                  border: "1px solid #1E293B"
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>🗺️</div>
                    <div style={{ color: "#64748B", fontSize: 14 }}>Memuat Google Maps...</div>
                  </div>
                </div>
              )}
              <div ref={mapRef} style={{
                width: "100%", height: 520, borderRadius: 16,
                border: "1px solid #1E293B", overflow: "hidden"
              }} />
            </>
          )}
        </div>

        {/* Sidebar: active trains list */}
        <div style={{ width: 260, flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: "#334155", fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>
            KERETA AKTIF DI PETA
          </div>
          <div style={{ maxHeight: 520, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
            {trains
              .filter(t => filterKelas === "all" || (filterKelas === "Commuter" ? t.kelas === "Commuter" : filterKelas === "Ekonomi" ? t.kelas === "Ekonomi" : ["Eksekutif","Bisnis","Eksekutif/Bisnis"].includes(t.kelas)))
              .map(train => {
                const st = STATUS_CONFIG[train.status] || STATUS_CONFIG.ontime;
                const isSelected = selectedTrain?.kode === train.kode;
                return (
                  <div key={train.kode} onClick={() => onSelectTrain(train)} style={{
                    background: isSelected ? "#0F172A" : "#0A0F1A",
                    border: `1px solid ${isSelected ? st.color : "#1E293B"}`,
                    borderRadius: 10, padding: "10px 12px", cursor: "pointer",
                    transition: "all 0.15s",
                    boxShadow: isSelected ? `0 0 12px ${st.color}25` : "none"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 13, color: "#F1F5F9" }}>{train.nama}</span>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: st.color, flexShrink: 0, display: "inline-block" }} />
                    </div>
                    <div style={{ fontSize: 11, color: "#475569" }}>{train.posisi}{train.inTransit && train.nextStation ? ` → ${train.nextStation}` : ""}</div>
                    {train.delay > 0 && <div style={{ fontSize: 10, color: "#F59E0B", marginTop: 3 }}>+{train.delay} mnt terlambat</div>}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
        {Object.entries(STATUS_CONFIG).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#64748B" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: v.color, display: "inline-block" }} />
            {v.label}
          </div>
        ))}
        <div style={{ marginLeft: "auto", fontSize: 11, color: "#334155" }}>
          Klik marker di peta untuk melihat info kereta · Klik "Lihat Detail" untuk membuka monitor
        </div>
      </div>
    </div>
  );
}

// ===================== MAIN APP =====================
export default function KAIMonitor() {
  const [selectedTrainKode, setSelectedTrainKode] = useState(ALL_TRAINS[0].kode);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [activeTab, setActiveTab] = useState("monitor");
  const [clock, setClock] = useState(new Date());
  const [liveTrains, setLiveTrains] = useState([]);
  const [aiResult, setAiResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuery, setAiQuery] = useState("");

  // Assign stable baseDelay per train (some trains have chronic delays)
  const BASE_DELAYS = {
    GA301: 15, GB101: 22, GC201: 18, GC701: 30, KRL003: 8, GA501: 5, GC301: 10, GC601: 5,
  };

  const STATIC_TRAINS = ALL_TRAINS.map(t => ({
    ...t,
    baseDelay: BASE_DELAYS[t.kode] || 0,
  }));

  function refresh() {
    const now = new Date();
    const nowMins = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
    const updated = STATIC_TRAINS.map((t, i) => buildLiveTrain(t, nowMins, i));
    setLiveTrains(updated);
    setClock(now);
  }

  useEffect(() => {
    refresh();
    const t = setInterval(refresh, 15000); // update every 15 seconds
    return () => clearInterval(t);
  }, []);

  // tick clock every second (display only)
  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const trains = liveTrains.length > 0 ? liveTrains : STATIC_TRAINS;
  const selectedTrain = trains.find(t => t.kode === selectedTrainKode) || trains[0];

  const filtered = trains.filter(t => {
    const matchSearch = t.nama.toLowerCase().includes(search.toLowerCase()) ||
      t.kode.toLowerCase().includes(search.toLowerCase()) ||
      t.relasi.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || t.status === filterStatus;
    const origType = GAPEKA_2026.intercity.find(x => x.kode === t.kode) ? "intercity"
      : GAPEKA_2026.ekonomi.find(x => x.kode === t.kode) ? "ekonomi"
      : GAPEKA_2026.commuter.find(x => x.kode === t.kode) ? "commuter" : "intercity";
    const matchType = filterType === "all" || filterType === origType;
    return matchSearch && matchStatus && matchType;
  });

  const totalDelay = trains.filter(t => t.delay > 0).length;
  const onTime = trains.filter(t => t.delay === 0).length;
  const totalPax = trains.reduce((a, b) => a + (b.terisi || 0), 0);

  // AI Assistant
  const askAI = async () => {
    if (!aiQuery.trim()) return;
    setAiLoading(true);
    setAiResult("");
    const trainData = JSON.stringify(trains.map(t => ({
      kode: t.kode, nama: t.nama, relasi: t.relasi, status: t.status,
      posisi: t.posisi, delay: t.delay, jadwal: t.jadwal,
      inTransit: t.inTransit, nextStation: t.nextStation
    })));
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `Kamu adalah asisten pemantauan kereta api Indonesia yang menggunakan data GAPEKA 2026. 
Jawab pertanyaan tentang jadwal, status, dan informasi kereta berdasarkan data berikut:
${trainData}
Jawab dalam Bahasa Indonesia dengan singkat, padat, dan informatif. Gunakan emoji kereta api yang relevan.`,
          messages: [{ role: "user", content: aiQuery }]
        })
      });
      const data = await res.json();
      const text = data.content?.filter(c => c.type === "text").map(c => c.text).join("") || "Maaf, tidak ada respons.";
      setAiResult(text);
    } catch (e) {
      setAiResult("❌ Gagal terhubung ke AI. Silakan coba lagi.");
    }
    setAiLoading(false);
  };

  const timeStr = clock.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const dateStr = clock.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const lastUpdated = clock.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div style={{
      minHeight: "100vh", background: "#020617", color: "#F1F5F9",
      fontFamily: "'DM Sans', 'Sora', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(2.5);opacity:0} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #1E293B; border-radius: 99px; }
        input, textarea { outline: none; }
        .tab-btn:hover { border-color: #334155 !important; color: #CBD5E1 !important; }
        .filter-btn:hover { border-color: #00D4AA50 !important; }
        .train-card:hover { border-color: #00D4AA50 !important; transform: translateX(2px); }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #0F172A 0%, #020617 100%)",
        borderBottom: "1px solid #0F172A", padding: "0 24px",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: "linear-gradient(135deg, #00D4AA, #0891B2)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20
            }}>🚆</div>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900, fontSize: 16, letterSpacing: -0.5 }}>
                KAI<span style={{ color: "#00D4AA" }}>Monitor</span>
              </div>
              <div style={{ fontSize: 10, color: "#475569", letterSpacing: 1 }}>GAPEKA 2026</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 6 }}>
            {["monitor", "peta", "jadwal", "asisten"].map(tab => (
              <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)} style={{
                background: activeTab === tab ? "#00D4AA15" : "transparent",
                border: `1px solid ${activeTab === tab ? "#00D4AA40" : "#1E293B"}`,
                borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 600,
                color: activeTab === tab ? "#00D4AA" : "#64748B", cursor: "pointer",
                transition: "all 0.2s"
              }}>
                {tab === "monitor" ? "🗺 Monitor" : tab === "peta" ? "📍 Peta Live" : tab === "jadwal" ? "📅 Jadwal" : "🤖 Asisten AI"}
              </button>
            ))}
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 18, fontWeight: 700, color: "#00D4AA", letterSpacing: 2 }}>{timeStr}</div>
            <div style={{ fontSize: 10, color: "#475569" }}>{dateStr}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px" }}>

        {/* STATS */}
        {activeTab === "monitor" && (
          <>
            <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
              <StatCard icon="🚆" label="Total Kereta Aktif" value={ALL_TRAINS.length} color="#00D4AA" sub="Lintas Jawa & Commuter" />
              <StatCard icon="✅" label="Tepat Waktu" value={onTime} color="#4ADE80" sub={`${Math.round((onTime/ALL_TRAINS.length)*100)}% dari total`} />
              <StatCard icon="⚠️" label="Terlambat" value={totalDelay} color="#F59E0B" sub="Perlu perhatian" />
              <StatCard icon="👥" label="Total Penumpang" value={totalPax.toLocaleString()} color="#60A5FA" sub="Semua rangkaian aktif" />
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              {/* LEFT PANEL */}
              <div style={{ width: 360, flexShrink: 0 }}>
                {/* Search */}
                <div style={{
                  background: "#0F172A", border: "1px solid #1E293B", borderRadius: 12,
                  display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", marginBottom: 12
                }}>
                  <span style={{ color: "#475569" }}>🔍</span>
                  <input value={search} onChange={e => setSearch(e.target.value)}
                    placeholder="Cari nama, kode, atau rute..."
                    style={{ background: "transparent", border: "none", color: "#F1F5F9", flex: 1, fontSize: 13 }}
                  />
                </div>

                {/* Filters */}
                <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
                  {[["all","Semua"],["running","Berjalan"],["ontime","Tepat"],["delay","Terlambat"]].map(([val, lbl]) => (
                    <button key={val} className="filter-btn" onClick={() => setFilterStatus(val)} style={{
                      background: filterStatus === val ? "#00D4AA15" : "transparent",
                      border: `1px solid ${filterStatus === val ? "#00D4AA" : "#1E293B"}`,
                      borderRadius: 8, padding: "5px 10px", fontSize: 11, fontWeight: 600,
                      color: filterStatus === val ? "#00D4AA" : "#64748B", cursor: "pointer",
                      transition: "all 0.2s"
                    }}>{lbl}</button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                  {[["all","Semua"],["intercity","Jarak Jauh"],["ekonomi","Ekonomi"],["commuter","Commuter"]].map(([val, lbl]) => (
                    <button key={val} className="filter-btn" onClick={() => setFilterType(val)} style={{
                      background: filterType === val ? "#0891B215" : "transparent",
                      border: `1px solid ${filterType === val ? "#0891B2" : "#1E293B"}`,
                      borderRadius: 8, padding: "5px 10px", fontSize: 11, fontWeight: 600,
                      color: filterType === val ? "#38BDF8" : "#64748B", cursor: "pointer",
                      transition: "all 0.2s"
                    }}>{lbl}</button>
                  ))}
                </div>

                <div style={{ fontSize: 11, color: "#334155", marginBottom: 10, fontWeight: 600, letterSpacing: 1 }}>
                  {filtered.length} KERETA DITEMUKAN
                </div>

                <div style={{ maxHeight: "calc(100vh - 360px)", overflowY: "auto", paddingRight: 4 }}>
                  {filtered.map(train => (
                    <TrainCard key={train.kode} train={train}
                      onClick={(t) => setSelectedTrainKode(t.kode)}
                      selected={selectedTrain?.kode === train.kode}
                    />
                  ))}
                  {filtered.length === 0 && (
                    <div style={{ textAlign: "center", color: "#334155", padding: "40px 20px" }}>
                      🔍 Tidak ada kereta ditemukan
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT PANEL - Detail */}
              {selectedTrain && (
                <div style={{
                  flex: 1, background: "#0F172A", border: "1px solid #1E293B",
                  borderRadius: 16, padding: 24, animation: "fadeIn 0.3s ease"
                }}>
                  {/* Train Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900, fontSize: 24, margin: 0, color: "#F1F5F9" }}>
                          {selectedTrain.nama}
                        </h2>
                        <span style={{
                          fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 99,
                          background: STATUS_CONFIG[selectedTrain.status]?.bg || "#1E293B",
                          color: STATUS_CONFIG[selectedTrain.status]?.color || "#94A3B8",
                          border: `1px solid ${STATUS_CONFIG[selectedTrain.status]?.color || "#334155"}40`,
                          display: "flex", alignItems: "center", gap: 5
                        }}>
                          <PulseDot color={STATUS_CONFIG[selectedTrain.status]?.dot || "#94A3B8"} />
                          {STATUS_CONFIG[selectedTrain.status]?.label || selectedTrain.status}
                          {selectedTrain.delay > 0 && ` +${selectedTrain.delay} menit`}
                        </span>
                        <span style={{ fontSize: 10, color: "#334155", display: "flex", alignItems: "center", gap: 4 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00D4AA", display: "inline-block", animation: "pulse-ring 2s ease-out infinite" }} />
                          Live · diperbarui {lastUpdated}
                        </span>
                      </div>
                      <div style={{ color: "#64748B", fontSize: 14, marginTop: 6 }}>
                        {selectedTrain.kode} · {selectedTrain.relasi}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{
                        fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 99,
                        background: `${KELAS_CONFIG[selectedTrain.kelas]?.color || "#888"}20`,
                        color: KELAS_CONFIG[selectedTrain.kelas]?.color || "#888",
                        border: `1px solid ${KELAS_CONFIG[selectedTrain.kelas]?.color || "#888"}40`
                      }}>
                        {selectedTrain.kelas}
                      </div>
                    </div>
                  </div>

                  {/* Transit Progress Bar */}
                  {selectedTrain.inTransit && selectedTrain.nextStation && (
                    <div style={{ background: "#020617", border: "1px solid #1E293B", borderRadius: 12, padding: "14px 16px", marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#64748B", marginBottom: 8 }}>
                        <span>📍 {selectedTrain.posisi}</span>
                        <span style={{ color: "#00D4AA", fontWeight: 700 }}>→ {selectedTrain.nextStation}</span>
                      </div>
                      <div style={{ height: 6, borderRadius: 99, background: "#1E293B", overflow: "hidden" }}>
                        <div style={{
                          width: `${Math.round((selectedTrain.progress || 0) * 100)}%`,
                          height: "100%", borderRadius: 99,
                          background: "linear-gradient(90deg, #0891B2, #00D4AA)",
                          transition: "width 1s ease",
                          position: "relative"
                        }}>
                          <span style={{
                            position: "absolute", right: -4, top: "50%", transform: "translateY(-50%)",
                            fontSize: 14
                          }}>🚆</span>
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: "#475569", marginTop: 6, textAlign: "center" }}>
                        {Math.round((selectedTrain.progress || 0) * 100)}% menuju {selectedTrain.nextStation}
                      </div>
                    </div>
                  )}

                  {/* Info Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 28 }}>
                    {[
                      { label: "Posisi Terkini", value: selectedTrain.posisi, icon: "📍" },
                      { label: "Jumlah Gerbong", value: `${selectedTrain.gerbong} gerbong`, icon: "🚃" },
                      { label: "Kapasitas", value: `${selectedTrain.terisi} / ${selectedTrain.kapasitas}`, icon: "👥" },
                      { label: "Keterlambatan", value: selectedTrain.delay > 0 ? `+${selectedTrain.delay} mnt` : "Tepat Waktu", icon: "⏱" },
                    ].map((info, i) => (
                      <div key={i} style={{
                        background: "#020617", borderRadius: 12, padding: "14px 16px",
                        border: "1px solid #1E293B"
                      }}>
                        <div style={{ fontSize: 18, marginBottom: 6 }}>{info.icon}</div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "#F1F5F9" }}>{info.value}</div>
                        <div style={{ fontSize: 11, color: "#475569", marginTop: 3 }}>{info.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Occupancy */}
                  <div style={{ background: "#020617", borderRadius: 12, padding: "16px", marginBottom: 24, border: "1px solid #1E293B" }}>
                    <OccupancyBar terisi={selectedTrain.terisi} kapasitas={selectedTrain.kapasitas} />
                    <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                      {[
                        { label: "Penumpang", val: selectedTrain.terisi, color: "#00D4AA" },
                        { label: "Tersedia", val: selectedTrain.kapasitas - selectedTrain.terisi, color: "#475569" },
                      ].map((item, i) => (
                        <div key={i} style={{
                          display: "flex", alignItems: "center", gap: 6, fontSize: 12
                        }}>
                          <span style={{ width: 8, height: 8, borderRadius: 2, background: item.color, display: "inline-block" }} />
                          <span style={{ color: "#64748B" }}>{item.label}:</span>
                          <span style={{ fontWeight: 700, color: item.color }}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div style={{ background: "#020617", borderRadius: 12, padding: "20px", border: "1px solid #1E293B" }}>
                    <ScheduleTimeline train={selectedTrain} />
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* PETA TAB */}
        {activeTab === "peta" && (
          <PetaLive
            trains={trains}
            selectedTrain={selectedTrain}
            onSelectTrain={(t) => { setSelectedTrainKode(t.kode); setActiveTab("monitor"); }}
          />
        )}

        {/* JADWAL TAB */}
        {activeTab === "jadwal" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 20, color: "#F1F5F9", margin: 0 }}>
                📅 Jadwal GAPEKA 2026
              </h2>
              <p style={{ color: "#475569", fontSize: 13, margin: "6px 0 0" }}>
                Grafik Perjalanan Kereta Api Indonesia · Berlaku Mulai 1 Februari 2026
              </p>
            </div>

            {["intercity", "ekonomi", "commuter"].map(type => (
              <div key={type} style={{ marginBottom: 32 }}>
                <div style={{
                  fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 1,
                  color: "#64748B", marginBottom: 14, paddingLeft: 4,
                  borderLeft: "3px solid #00D4AA", paddingLeft: 10
                }}>
                  {type === "intercity" ? "🚆 KERETA JARAK JAUH (EKSEKUTIF/BISNIS)" : type === "ekonomi" ? "🚃 KERETA EKONOMI" : "🚇 KERETA KOMUTER"}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
                  {GAPEKA_2026[type].map(train => {
                    const status = STATUS_CONFIG[train.status];
                    const kelas = KELAS_CONFIG[train.kelas] || KELAS_CONFIG["Bisnis"];
                    return (
                      <div key={train.kode} style={{
                        background: "#0F172A", border: "1px solid #1E293B",
                        borderRadius: 14, padding: 18, transition: "all 0.2s"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                          <div>
                            <div style={{ fontWeight: 800, fontSize: 15, fontFamily: "'Sora', sans-serif", color: "#F1F5F9" }}>
                              {train.nama}
                            </div>
                            <div style={{ fontSize: 12, color: "#475569", marginTop: 3 }}>{train.kode}</div>
                          </div>
                          <span style={{
                            fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 99,
                            background: status.bg, color: status.color, border: `1px solid ${status.color}40`,
                            whiteSpace: "nowrap"
                          }}>
                            {status.label}
                          </span>
                        </div>

                        <div style={{ fontSize: 12, color: "#64748B", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                          <span>🛤</span> {train.relasi}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          {train.jadwal.map((stop, i) => (
                            <div key={i} style={{
                              display: "flex", justifyContent: "space-between", alignItems: "center",
                              padding: "6px 10px", borderRadius: 8,
                              background: stop.stasiun === train.posisi ? `${status.color}10` : "transparent",
                            }}>
                              <span style={{
                                fontSize: 12, color: stop.stasiun === train.posisi ? "#F1F5F9" : "#64748B",
                                fontWeight: stop.stasiun === train.posisi ? 700 : 400
                              }}>
                                {stop.stasiun === train.posisi && "▶ "}{stop.stasiun}
                              </span>
                              <div style={{ display: "flex", gap: 10, fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
                                {stop.tiba !== "-" && <span style={{ color: "#475569" }}>{stop.tiba}</span>}
                                {stop.berangkat !== "-" && <span style={{ color: "#94A3B8" }}>{stop.berangkat}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ASISTEN AI TAB */}
        {activeTab === "asisten" && (
          <div style={{ maxWidth: 720, margin: "0 auto", animation: "fadeIn 0.3s ease" }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🤖</div>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900, fontSize: 24, margin: 0, color: "#F1F5F9" }}>
                Asisten KAI AI
              </h2>
              <p style={{ color: "#475569", fontSize: 13, marginTop: 8 }}>
                Tanya apa saja tentang jadwal dan status kereta berdasarkan GAPEKA 2026
              </p>
            </div>

            {/* Quick prompts */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20, justifyContent: "center" }}>
              {[
                "Kereta mana yang sedang terlambat?",
                "Jadwal Pasundan dari Kiaracondong?",
                "Kereta ekonomi paling penuh?",
                "KRL Bogor posisi di mana?",
                "Jadwal Sri Tanjung ke Banyuwangi?",
              ].map((q, i) => (
                <button key={i} onClick={() => setAiQuery(q)} style={{
                  background: "#0F172A", border: "1px solid #1E293B", borderRadius: 99,
                  padding: "7px 14px", fontSize: 12, color: "#94A3B8", cursor: "pointer",
                  transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif",
                  ":hover": { borderColor: "#00D4AA" }
                }}>{q}</button>
              ))}
            </div>

            {/* Input */}
            <div style={{
              background: "#0F172A", border: "1px solid #1E293B", borderRadius: 14,
              padding: 16, marginBottom: 16
            }}>
              <textarea
                value={aiQuery}
                onChange={e => setAiQuery(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); askAI(); } }}
                placeholder="Tanyakan tentang jadwal, status, atau informasi kereta..."
                rows={3}
                style={{
                  background: "transparent", border: "none", color: "#F1F5F9", width: "100%",
                  fontSize: 14, resize: "none", fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.6
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                <button onClick={askAI} disabled={aiLoading || !aiQuery.trim()} style={{
                  background: aiLoading || !aiQuery.trim() ? "#1E293B" : "linear-gradient(135deg, #00D4AA, #0891B2)",
                  border: "none", borderRadius: 10, padding: "9px 20px", fontSize: 13, fontWeight: 700,
                  color: aiLoading || !aiQuery.trim() ? "#475569" : "#020617", cursor: aiLoading || !aiQuery.trim() ? "not-allowed" : "pointer",
                  transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8
                }}>
                  {aiLoading ? "⏳ Memproses..." : "🔍 Tanya AI"}
                </button>
              </div>
            </div>

            {/* AI Response */}
            {(aiResult || aiLoading) && (
              <div style={{
                background: "#0F172A", border: "1px solid #1E293B", borderRadius: 14, padding: 20,
                animation: "fadeIn 0.3s ease"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8,
                    background: "linear-gradient(135deg, #00D4AA, #0891B2)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14
                  }}>🤖</div>
                  <span style={{ fontWeight: 700, color: "#00D4AA", fontSize: 13 }}>Asisten KAI AI</span>
                </div>
                {aiLoading ? (
                  <div style={{
                    height: 14, borderRadius: 99, width: "60%",
                    background: "linear-gradient(90deg, #1E293B 25%, #334155 50%, #1E293B 75%)",
                    backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite"
                  }} />
                ) : (
                  <div style={{ color: "#CBD5E1", fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
                    {aiResult}
                  </div>
                )}
              </div>
            )}

            {/* Data note */}
            <div style={{
              marginTop: 24, padding: "12px 16px", background: "#00D4AA08",
              border: "1px solid #00D4AA20", borderRadius: 12, fontSize: 12, color: "#475569"
            }}>
              ℹ️ Data berdasarkan <strong style={{ color: "#00D4AA" }}>GAPEKA 2026</strong> — Grafik Perjalanan Kereta Api Indonesia yang berlaku mulai 1 Februari 2026. Status real-time merupakan simulasi untuk demonstrasi.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
