# 🔐 RJK PhishLens

> **Detect • Analyze • Protect**

RJK PhishLens is a web-based phishing detection tool designed to analyze suspicious URLs and messages for common phishing indicators.

It checks for multiple phishing patterns such as credential theft, fake rewards, urgency tactics, OTP scams, QR phishing, suspicious domains, malware downloads, and more — then generates a **Phishing Risk Score** with a clear security verdict.

---

## ✨ Features

- 🔗 URL phishing analysis
- 💬 Message/content analysis
- 📊 Phishing Risk Score from 0–100
- 🔴 High-risk / 🟡 Caution / 🟢 Safe classification
- 🚨 Real-time threat detection
- 🔍 Detection of suspicious URL patterns
- 🎁 Reward & lottery scam detection
- 🔑 Credential phishing detection
- 📱 OTP / MFA phishing detection
- 📦 Delivery scam detection
- 💼 Job & recruitment scam detection
- 💳 Financial phishing detection
- 📲 QR phishing detection
- 🔐 OAuth consent phishing detection
- 🦠 Malware/download detection
- ☎️ Callback / vishing detection
- 🌐 Punycode / IDN spoofing detection
- 🔗 URL shortener detection
- ⚠️ Urgency and fear tactic detection

---

## 🎯 Risk Levels

| Risk Score | Verdict | Meaning |
|------------|---------|---------|
| 🟢 **0–24** | SITE APPEARS SAFE | No major phishing indicators detected |
| 🟡 **25–69** | OPEN WITH CAUTION | Suspicious indicators were detected |
| 🔴 **70–100** | DO NOT OPEN THIS LINK — VERY SUSPICIOUS | Multiple high-risk indicators detected |

---

## 🧠 What PhishLens Checks

PhishLens evaluates the input against multiple security indicators:

- HTTPS encryption
- IP address used as a domain
- Unusually long URLs
- URL obfuscation
- Credential phishing
- Reward / lottery scams
- Suspicious domain extensions
- Multiple domain hyphens
- URL shorteners
- Punycode / IDN spoofing
- Urgency / fear tactics
- Financial phishing
- OTP / MFA phishing
- QR phishing
- OAuth consent phishing
- Delivery phishing
- Job / recruitment scams
- Callback / vishing
- Malware / malicious downloads
- Credential harvesting

Each detected or undetected threat is displayed individually so the user can understand **why** a URL or message received its risk score.

---

## 🖥️ Interface

PhishLens uses a dark cybersecurity-inspired interface with:

- 🌃 NYC-inspired background
- 💜 Purple cyber aesthetic
- 🪟 Glassmorphism interface
- 📊 Color-coded risk visualization
- 🚨 Clear threat indicators
- 📋 Individual security checks

---

## ⚙️ How It Works

```text
        User Input
            │
            ▼
     URL / Message
            │
            ▼
   ┌─────────────────┐
   │ PhishLens       │
   │ Analysis Engine │
   └────────┬────────┘
            │
            ▼
   Security Checks
            │
     ┌──────┴──────┐
     ▼             ▼
 Threat Found   No Threat
     │             │
     └──────┬──────┘
            ▼
       Risk Score
            │
            ▼
     Security Verdict
