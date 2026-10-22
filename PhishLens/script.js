const urlInput = document.getElementById("urlInput");
const analyzeBtn = document.getElementById("analyzeBtn");

const result = document.getElementById("result");
const riskScore = document.getElementById("riskScore");
const riskBadge = document.getElementById("riskBadge");
const scoreFill = document.getElementById("scoreFill");

const checkResults = document.getElementById("checkResults");
const recommendationText = document.getElementById("recommendationText");


analyzeBtn.addEventListener("click", analyzeURL);

urlInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        analyzeURL();
    }
});


function analyzeURL() {

    let input = urlInput.value.trim();

    if (input === "") {
        alert("Enter a URL first.");
        return;
    }

    // Add protocol if user didn't type one
    if (!/^https?:\/\//i.test(input)) {
        input = "https://" + input;
    }

    let parsedURL;

    try {
        parsedURL = new URL(input);
    } catch {
        alert("Invalid URL. Please enter something like example.com");
        return;
    }


    let score = 0;
    let checks = [];


    // ==========================================
    // 1. HTTPS CHECK
    // ==========================================

    if (parsedURL.protocol === "https:") {

        checks.push({
            type: "safe",
            icon: "✓",
            text: "HTTPS is enabled"
        });

    } else {

        score += 20;

        checks.push({
            type: "danger",
            icon: "✗",
            text: "HTTPS is NOT enabled"
        });
    }


    // ==========================================
    // 2. IP ADDRESS CHECK
    // ==========================================

    const ipRegex =
        /^(?:\d{1,3}\.){3}\d{1,3}$/;

    if (ipRegex.test(parsedURL.hostname)) {

        score += 25;

        checks.push({
            type: "danger",
            icon: "✗",
            text: "The URL uses an IP address instead of a domain"
        });

    } else {

        checks.push({
            type: "safe",
            icon: "✓",
            text: "A domain name is being used"
        });
    }


    // ==========================================
    // 3. URL LENGTH
    // ==========================================

    const urlLength = parsedURL.href.length;

    if (urlLength > 150) {

        score += 20;

        checks.push({
            type: "danger",
            icon: "✗",
            text: `Very long URL detected (${urlLength} characters)`
        });

    } else if (urlLength > 80) {

        score += 10;

        checks.push({
            type: "warning",
            icon: "⚠",
            text: `Long URL detected (${urlLength} characters)`
        });

    } else {

        checks.push({
            type: "safe",
            icon: "✓",
            text: `URL length looks normal (${urlLength} characters)`
        });
    }


    // ==========================================
    // 4. @ SYMBOL
    // ==========================================

    if (parsedURL.href.includes("@")) {

        score += 20;

        checks.push({
            type: "danger",
            icon: "✗",
            text: "Suspicious @ symbol detected"
        });

    } else {

        checks.push({
            type: "safe",
            icon: "✓",
            text: "No @ symbol detected"
        });
    }


    // ==========================================
    // 5. SUSPICIOUS KEYWORDS
    // ==========================================

    const suspiciousWords = [
        "login",
        "signin",
        "verify",
        "verification",
        "password",
        "account",
        "update",
        "confirm",
        "secure",
        "security",
        "bank",
        "payment",
        "wallet",
        "recover",
        "credential"
    ];


    const lowerURL = parsedURL.href.toLowerCase();

    const foundWords = suspiciousWords.filter(word =>
        lowerURL.includes(word)
    );


    if (foundWords.length >= 3) {

        score += 25;

        checks.push({
            type: "danger",
            icon: "✗",
            text: `Multiple suspicious keywords: ${foundWords.join(", ")}`
        });

    } else if (foundWords.length > 0) {

        score += 10;

        checks.push({
            type: "warning",
            icon: "⚠",
            text: `Suspicious keyword detected: ${foundWords.join(", ")}`
        });

    } else {

        checks.push({
            type: "safe",
            icon: "✓",
            text: "No common phishing keywords detected"
        });
    }


    // ==========================================
    // 6. SUBDOMAIN CHECK
    // ==========================================

    const domainParts = parsedURL.hostname.split(".");

    if (domainParts.length >= 4) {

        score += 15;

        checks.push({
            type: "warning",
            icon: "⚠",
            text: "Unusually large number of subdomains"
        });

    } else {

        checks.push({
            type: "safe",
            icon: "✓",
            text: "Domain structure looks normal"
        });
    }


    // ==========================================
    // 7. HYPHEN CHECK
    // ==========================================

    const hyphenCount =
        (parsedURL.hostname.match(/-/g) || []).length;

    if (hyphenCount >= 3) {

        score += 15;

        checks.push({
            type: "warning",
            icon: "⚠",
            text: `Multiple hyphens detected in domain (${hyphenCount})`
        });

    } else {

        checks.push({
            type: "safe",
            icon: "✓",
            text: "Domain does not contain excessive hyphens"
        });
    }


    // ==========================================
    // 8. SUSPICIOUS TLD
    // ==========================================

    const suspiciousTLDs = [
        ".xyz",
        ".top",
        ".click",
        ".zip",
        ".tk",
        ".ml",
        ".ga",
        ".cf",
        ".gq"
    ];


    const suspiciousTLD =
        suspiciousTLDs.some(tld =>
            parsedURL.hostname.toLowerCase().endsWith(tld)
        );


    if (suspiciousTLD) {

        score += 15;

        checks.push({
            type: "warning",
            icon: "⚠",
            text: "Potentially suspicious domain extension detected"
        });

    } else {

        checks.push({
            type: "safe",
            icon: "✓",
            text: "Domain extension does not match the suspicious TLD list"
        });
    }


    // ==========================================
    // LIMIT SCORE
    // ==========================================

    score = Math.min(score, 100);


    // ==========================================
    // DISPLAY SCORE
    // ==========================================

    riskScore.textContent = `${score}/100`;

    scoreFill.style.width = `${score}%`;


    // ==========================================
    // RISK LEVEL
    // ==========================================

    if (score <= 25) {

        riskBadge.textContent = "LOW RISK";
        riskBadge.className = "risk-badge low";

        recommendationText.textContent =
            "The URL does not contain many obvious phishing indicators. " +
            "Still verify the domain before entering sensitive information.";

    }

    else if (score <= 60) {

        riskBadge.textContent = "MEDIUM RISK";
        riskBadge.className = "risk-badge medium";

        recommendationText.textContent =
            "The URL contains several characteristics that deserve caution. " +
            "Verify the website and domain before entering credentials or payment information.";

    }

    else {

        riskBadge.textContent = "HIGH RISK";
        riskBadge.className = "risk-badge high";

        recommendationText.textContent =
            "Multiple phishing indicators were detected. " +
            "Do not enter passwords, banking information, or other sensitive data.";
    }


    // ==========================================
    // DISPLAY INDIVIDUAL CHECKS
    // ==========================================

    checkResults.innerHTML = "";

    checks.forEach(check => {

        const item = document.createElement("div");

        item.className = "check-item";

        item.innerHTML = `
            <span class="check-icon ${getCheckClass(check.type)}">
                ${check.icon}
            </span>

            <span>${check.text}</span>
        `;

        checkResults.appendChild(item);
    });


    // ==========================================
    // SHOW RESULTS
    // ==========================================

    result.classList.remove("hidden");

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function getCheckClass(type) {

    if (type === "safe") {
        return "check-safe";
    }

    if (type === "warning") {
        return "check-warning";
    }

    return "check-danger";
}