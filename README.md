<p align="center">
  <img src="assets/logo.png" alt="BALLONI GmbH Logo" width="320">
</p>

<h1 align="center">🍺 Balloni – Getränkelager Manager</h1>

<p align="center">
  Die smarte Getränkeliste für Bars, Vereine und Events.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success.svg">
  <img src="https://img.shields.io/badge/version-1.0-blue.svg">
  <img src="https://img.shields.io/badge/license-MIT-lightgrey.svg">
  <img src="https://img.shields.io/badge/firebase-realtime%20database-orange">
</p>

---

# 🍺 Balloni

**Balloni** ist eine einfache und schnelle Web-App zur Verwaltung von Getränkelagern.

Mit Balloni kannst du:

- Barcodes scannen  
- Kästen und Flaschen buchen  
- Inventuren durchführen  
- Mindestbestände überwachen  
- Bestellungen planen  

Perfekt für:

- 🍻 Bars  
- 🎪 Events  
- 🏢 Vereine  
- 🥳 Partys  
- 📦 Getränkelager  

Alle Daten werden **live synchronisiert**, sodass mehrere Geräte gleichzeitig mit dem gleichen Lager arbeiten können.

---

# ✨ Features

### 📷 Barcode Scanner
Scanne Getränkebarcodes direkt mit der Smartphone-Kamera.

### 📦 Lagerverwaltung
Verwalte Kästen und einzelne Flaschen übersichtlich.

### ➕ / ➖ Wareneingang & Ausgang
Buche Getränke in Sekunden.

### ⚠️ Mindestbestand Alarm
Automatische Warnung wenn der Bestand zu niedrig ist.

### 🔢 Inventurmodus
Schnelle Bestandskorrektur per Inventur.

### 🛒 Bestellliste
Erstelle Bestellungen direkt aus dem Lager heraus.

### 📊 Dashboard
Statistiken über Bestand und Verbrauch.

### ☁️ Cloud Sync
Alle Geräte sehen immer den gleichen Bestand (Firebase).

### 👥 Benutzerverwaltung
Login mit Benutzerkürzel und PIN.

---

# 📸 Screenshots

*(optional – hier später Screenshots einfügen)*

```
/screenshots/dashboard.png
/screenshots/lager.png
/screenshots/scanner.png
```

---

# 🚀 Installation

1. Repository herunterladen

```
git clone https://github.com/deinname/balloni-getraenkelager.git
```

oder ZIP herunterladen.

---

# 🔥 Firebase Setup

Balloni nutzt **Firebase Realtime Database**.

### 1️⃣ Firebase Projekt erstellen

Gehe zu:

```
https://console.firebase.google.com
```

Neues Projekt erstellen.

---

### 2️⃣ Realtime Database aktivieren

Region:

```
europe-west1
```

---

### 3️⃣ Sicherheitsregeln setzen

Für einfache Nutzung:

```json
{
 "rules": {
  ".read": true,
  ".write": true
 }
}
```

---

### 4️⃣ Firebase Config eintragen

In der HTML Datei:

```javascript
const firebaseConfig = {
  apiKey: "DEIN_KEY",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

---

# ▶️ Nutzung

1. HTML Datei öffnen
2. Benutzer anlegen
3. Produkte hinzufügen
4. Barcodes scannen
5. Lager verwalten 🎉

---

# 💡 Einsatzgebiete

Balloni eignet sich besonders für:

- Getränkelager in Bars
- Vereinsheime
- Eventlager
- Festivalstände
- Partyorganisation
- kleine Gastronomie

---

# 🧠 Kurz gesagt

**Scannen. Buchen. Überblick behalten.**

---

# 👨‍💻 Entwickler

Projekt von

**BALLONI GmbH**  
Köln Ehrenfeld

---

# 📄 Lizenz

MIT License
