# 🔐 RJK PhishLens

### Detect • Analyze • Protect

RJK PhishLens is a web-based phishing detection tool that analyzes suspicious URLs and messages for common phishing indicators.

The application evaluates multiple security patterns, calculates a **Phishing Risk Score**, identifies detected threats, and provides a clear security recommendation to help users recognize potentially dangerous content.

---

## ✨ Features

- 🔗 URL phishing analysis
- 💬 Message/content analysis
- 📊 Phishing Risk Score from 0–100
- 🔴 High-risk / 🟡 Caution / 🟢 Low-risk classification
- 🚨 Individual threat detection
- 🔍 Suspicious URL pattern detection
- 🎁 Reward and lottery scam detection
- 🔑 Credential phishing detection
- 📱 OTP / MFA phishing detection
- 📲 QR phishing detection
- 🔐 OAuth consent phishing detection
- 📦 Delivery scam detection
- 💼 Job and recruitment scam detection
- 💳 Financial phishing detection
- ☎️ Callback / vishing detection
- 🦠 Malware and malicious download detection
- 🌐 Punycode / IDN spoofing detection
- 🔗 URL shortener detection
- ⚠️ Urgency and fear tactic detection

---

## 📊 Phishing Risk Score

PhishLens generates a risk score between **0 and 100**.

| Score | Risk Level | Verdict |
|---:|---|---|
| 🟢 **0–24** | Low Risk | **SITE APPEARS SAFE** |
| 🟡 **25–69** | Medium Risk | **OPEN WITH CAUTION** |
| 🔴 **70–100** | High Risk | **DO NOT OPEN THIS LINK — VERY SUSPICIOUS** |

The score is calculated based on the number and severity of suspicious indicators detected during analysis.

---

## 🚨 Threat Detection

PhishLens does not only provide a final score.

It displays individual security checks so the user can understand **why** a URL or message was classified as suspicious.

Each security check is displayed as:

```text
🔴 THREAT DETECTED
🟢 NOT DETECTED
```

Example:

```text
HTTPS Encryption              🟢 NOT DETECTED
IP Address Used as Domain     🔴 THREAT DETECTED
Unusually Long URL            🔴 THREAT DETECTED
Credential Phishing           🔴 THREAT DETECTED
Reward / Lottery Scam         🔴 THREAT DETECTED
URL Shortener                 🟢 NOT DETECTED
```

---

## 🧠 Detection Categories

### 🌐 URL-Based Detection

PhishLens checks URLs for:

- HTTPS encryption
- IP addresses used as domains
- Unusually long URLs
- URL obfuscation
- Suspicious login and verification paths
- Credential-harvesting patterns
- Suspicious domain extensions
- Multiple domain hyphens
- URL shorteners
- Punycode / IDN spoofing
- Malicious download patterns

### 🎭 Social Engineering Detection

PhishLens detects common social-engineering patterns including:

- Urgency and fear tactics
- Reward and lottery scams
- Financial phishing
- Job and recruitment scams
- Delivery scams
- Callback / vishing scams

### 🔐 Authentication & Account Phishing

The application checks for:

- Credential harvesting
- OTP / MFA phishing
- OAuth consent phishing
- Fake account verification
- Login and password harvesting

### 📱 Modern Phishing Techniques

PhishLens also checks for:

- QR phishing
- Malicious downloads
- Malware delivery
- Suspicious shortened URLs
- Identity / domain spoofing

---

## ⚙️ How It Works

```text
                    USER INPUT
                        │
               ┌────────┴────────┐
               │                 │
               ▼                 ▼
          URL INPUT        MESSAGE INPUT
               │                 │
               └────────┬────────┘
                        ▼
                PHISHING ANALYSIS
                        │
                        ▼
                 SECURITY CHECKS
                        │
              ┌─────────┴─────────┐
              │                   │
              ▼                   ▼
       THREAT DETECTED      NOT DETECTED
              │                   │
              └─────────┬─────────┘
                        ▼
                   RISK SCORE
                     0–100
                        │
                        ▼
                 FINAL VERDICT
                        │
           ┌────────────┼────────────┐
           ▼            ▼            ▼
        🟢 SAFE      🟡 CAUTION    🔴 HIGH RISK
```

---

## 🖥️ User Interface

PhishLens uses a dark cybersecurity-inspired interface with a modern visual design.

### Design Features

- 🌃 NYC-inspired background
- 💜 Purple cyber aesthetic
- 🪟 Glassmorphism interface
- 📊 Color-coded risk meter
- 🚨 Threat indicators
- 🔍 Security analysis results
- ✨ Custom RJK branding
- 🖋️ Custom RJK + PhishLens typography

The interface is designed to make cybersecurity information understandable to users without requiring advanced technical knowledge.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Website structure |
| **CSS3** | UI, layout and visual design |
| **JavaScript** | Analysis logic and interaction |
| **Regular Expressions** | Pattern-based threat detection |
| **URL API** | URL parsing and validation |

---

## 📁 Project Structure

```text
RJK-PhishLens/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

If the project is implemented as a single HTML file, the CSS and JavaScript may also be contained directly inside `index.html`.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### 2. Open the Project

Navigate into the project folder:

```bash
cd RJK-PhishLens
```

Open the project in **VS Code** or another code editor.

### 3. Run the Application

If the project is a standalone HTML application, open:

```text
index.html
```

in your browser.

You can also use the **Live Server** extension in VS Code.

---

## 🧪 Testing

You can test PhishLens using harmless example inputs.

### Example URL

```text
http://example.com/verify-account
```

### Example Message

```text
URGENT! Congratulations! You have won a special reward.
Verify your account immediately to claim your prize.
```

PhishLens will analyze the URL and message and display the detected security indicators.

> ⚠️ Do not test the application by opening real malicious URLs.

---

## 🔬 Example Analysis

### Input

```text
http://example.com/verify-account
```

Example message:

```text
URGENT! Congratulations! You have won a reward.
Verify your account immediately to claim your prize.
```

### Possible Results

```text
🔴 THREAT DETECTED
Urgency / Fear Tactic

🔴 THREAT DETECTED
Reward / Lottery Scam

🔴 THREAT DETECTED
Credential Phishing

🟢 NOT DETECTED
URL Shortener

🟢 NOT DETECTED
Punycode / IDN Spoofing
```

### Final Verdict

```text
DO NOT OPEN THIS LINK — VERY SUSPICIOUS
```

---

## 🔐 Security Approach

PhishLens currently uses a **heuristic-based detection approach**.

Instead of relying on a single indicator, the application evaluates multiple characteristics of the URL and message.

For example:

```text
Suspicious URL
      +
Urgent Message
      +
Credential Request
      +
Reward Claim
      ↓
Higher Risk Score
```

This makes the result more informative than simply checking whether a website uses HTTPS.

---

## 🧩 Why HTTPS Alone Is Not Enough

A common misconception is:

> "If a website uses HTTPS, it must be safe."

That is not necessarily true.

HTTPS protects the connection between the browser and the website, but it does not prove that the website itself is legitimate.

A phishing website can also use HTTPS.

Therefore, PhishLens evaluates multiple indicators instead of relying only on the connection protocol.

---

## ⚠️ Security Disclaimer

PhishLens is an **educational cybersecurity project** and should not be considered a complete security solution.

A website with no detected indicators is not automatically guaranteed to be safe.

Similarly, a suspicious-looking URL is not necessarily malicious.

Some phishing attacks require additional context that cannot be determined from a URL or message alone.

Examples include:

- Spear phishing
- Business Email Compromise (BEC)
- Image-based phishing
- Thread hijacking
- Highly targeted social engineering
- Zero-day phishing campaigns

Always verify suspicious requests through trusted channels before providing:

- Passwords
- OTPs
- MFA codes
- Banking information
- Personal information
- Authentication credentials

---

## 🎯 Project Goals

The main goals of RJK PhishLens are to:

- Understand how phishing attacks are structured
- Learn URL analysis techniques
- Identify social-engineering patterns
- Build a practical cybersecurity application
- Understand heuristic-based threat detection
- Practice JavaScript programming
- Improve security-focused web development
- Create an accessible security tool
- Apply cybersecurity concepts through a practical project

---

## 📚 Cybersecurity Concepts Demonstrated

### 🔎 Threat Detection

Identifying suspicious characteristics in URLs and messages.

### 🌐 URL Analysis

Examining domains, paths, protocols and URL structures.

### 🎭 Social Engineering

Recognizing psychological manipulation techniques such as urgency, fear, rewards and account threats.

### 🔐 Credential Security

Detecting patterns commonly associated with credential harvesting.

### 📊 Risk Scoring

Converting multiple security indicators into an understandable risk score.

### 🧠 Pattern Recognition

Using predefined patterns and regular expressions to identify suspicious content.

---

## 🔮 Future Improvements

Possible future versions of PhishLens could include:

- [ ] Domain reputation checking
- [ ] WHOIS lookup
- [ ] DNS record analysis
- [ ] SSL certificate inspection
- [ ] Domain age analysis
- [ ] IP reputation checking
- [ ] VirusTotal API integration
- [ ] Google Safe Browsing integration
- [ ] QR code analysis
- [ ] Screenshot-based phishing detection
- [ ] Email header analysis
- [ ] Browser extension
- [ ] Backend threat-intelligence engine
- [ ] Database of known malicious domains
- [ ] Machine-learning assisted detection
- [ ] User reporting system
- [ ] Analysis history
- [ ] Exportable security reports

---

## 🧩 Future Architecture

The current project can eventually evolve from a simple heuristic analyzer into a larger threat-intelligence platform.

### Current Version

```text
URL + Message
      │
      ▼
Heuristic Detection
      │
      ▼
Risk Score
      │
      ▼
Security Verdict
```

### Future Version

```text
                    USER INPUT
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
          URL ANALYSIS       MESSAGE ANALYSIS
              │                   │
              └─────────┬─────────┘
                        ▼
               THREAT INTELLIGENCE
                        │
             ┌──────────┼──────────┐
             ▼          ▼          ▼
            DNS       WHOIS    REPUTATION
             │          │          │
             └──────────┼──────────┘
                        ▼
                 DETECTION ENGINE
                        │
                        ▼
                   RISK SCORING
                        │
                        ▼
                  SECURITY REPORT
```

---

## 💡 Why I Built This

Phishing is one of the most common forms of cyberattack because attackers often exploit **human behaviour rather than technical vulnerabilities**.

Messages that create urgency, promise rewards, request OTPs, or imitate trusted organizations can trick users into clicking malicious links or revealing sensitive information.

I built PhishLens to explore how these indicators can be identified programmatically and presented in a simple, understandable way.

The project combines:

```text
Cybersecurity
      +
Web Development
      +
Threat Analysis
      +
Security Awareness
```

into one practical application.

---

## 👩‍💻 Author

### Ruth John

## 📌 Project Status

**🟢 Active Development**

PhishLens is currently a client-side prototype focused on heuristic phishing detection.

Future versions will focus on integrating real-world threat intelligence, stronger detection logic and advanced security analysis.

---

## 📜 License

This project is intended for educational and research purposes.

You are free to study and modify the code for learning purposes.

---

# 🔐 RJK PhishLens

### Detect • Analyze • Protect

**Think before you click.**

