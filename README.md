# Upstream School System Website

A modern, responsive landing page for the Upstream School System — the first Oxford-affiliated institution in Abbottabad.

---

## 📂 Project Structure

```
├── index.html          → Main website (all sections)
├── contact.php         → Backend — processes contact form via PHPMailer
├── config.php          → Gmail SMTP credentials (⚠️ keep private)
├── composer.json       → PHP dependency manager config
├── vendor/             → PHPMailer library (auto-generated after Step 2)
├── .gitignore          → Protects config.php and vendor/ from Git
├── assets/
│   ├── css/style.css   → All styles (TailwindCSS + custom)
│   ├── js/script.js    → Smooth scroll, animations, AJAX form
│   └── images/         → All website photos
└── README.md           → This file
```

---

## 🚀 Setup Guide (Step by Step)

### Step 1 — Install XAMPP

1. Download from **https://www.apachefriends.org**
2. Install with defaults → it goes to `C:\xampp\`
3. Open **XAMPP Control Panel** → Start **Apache**

---

### Step 2 — Install PHPMailer via Composer

1. Download **Composer** from **https://getcomposer.org/download/**
2. Run the installer (it auto-detects PHP from XAMPP)
3. Open **Command Prompt** and navigate to your project:
   ```bash
   cd "C:\xampp\htdocs\Excelerate Academy _ Base44_files"
   ```
4. Run:
   ```bash
   composer install
   ```
   This downloads PHPMailer into the `vendor/` folder automatically.

---

### Step 3 — Configure Gmail

1. Open **`config.php`** and fill in:
   ```php
   define('SMTP_USER', 'your_gmail@gmail.com');   // Your Gmail
   define('SMTP_PASS', 'xxxx xxxx xxxx xxxx');    // Gmail App Password
   define('MAIL_TO',   'admin@yourschool.com');   // Where to receive enquiries
   ```

2. **Getting a Gmail App Password** (required — normal password won't work):
   - Go to → **https://myaccount.google.com/security**
   - Enable **2-Step Verification** (if not already on)
   - Go to → **https://myaccount.google.com/apppasswords**
   - App name: `Upstream School` → Click **Create**
   - Copy the 16-character password → paste into `config.php`

---

### Step 4 — Copy Project to XAMPP

Copy your entire project folder into:
```
C:\xampp\htdocs\Excelerate Academy _ Base44_files\
```

---

### Step 5 — Open in Browser

```
http://localhost/Excelerate Academy _ Base44_files/index.html
```

Fill in the contact form and click **Submit Enquiry** — you should receive an email! ✅

---

## 🔐 Security Notes

- **Never** push `config.php` to GitHub (it's in `.gitignore`)
- **Never** share your Gmail App Password
- The App Password only has access to send email — it's not your main Gmail password

---

## 🧩 Key Features

| Feature | Details |
|---------|---------|
| Responsive Design | Works on mobile, tablet, desktop |
| Smooth Scroll | All nav buttons scroll to sections |
| Gallery | 3×3 grid with hover captions |
| Reviews | A-Level alumni testimonials with animations |
| Contact Form | PHPMailer + Gmail SMTP, AJAX (no page reload) |
| Email Format | Beautiful HTML email with table layout |
