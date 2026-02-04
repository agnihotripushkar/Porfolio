import React from 'react';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const privacyPolicyContent = `
# Privacy Policy for F1Companion

**Last Updated: February 3, 2026**

## Introduction

F1Companion ("we," "our," or "the app") is committed to protecting your privacy. This Privacy Policy explains how we handle data in our mobile application designed for F1 visa students.

**Our Privacy-First Approach:** F1Companion is built with privacy as a core principle. All personal information you enter stays on your device. We do not have user accounts, servers, or databases that collect your personal data.

## Information We Do NOT Collect

F1Companion does NOT collect, store, or transmit:

- ❌ Personal identification information (name, email, phone number)
- ❌ Social Security Numbers (SSN)
- ❌ Passport numbers or I-94 information
- ❌ SEVIS ID numbers
- ❌ University names or academic records
- ❌ Travel dates or flight information
- ❌ Any documents you scan or store in the app

**All of this sensitive information is stored exclusively on your device and never leaves it.**

## Information We DO Collect

### 1. Anonymous Analytics Data (via Firebase Analytics)

We use Google Firebase Analytics to understand how users interact with the app. This helps us improve features and fix issues. Firebase collects:

- **App usage data:** Which screens you visit, which features you use, how long you spend in the app
- **Device information:** Device model, operating system version, language settings
- **Technical data:** App version, crash reports, performance metrics
- **Anonymous identifiers:** Device IDs that cannot be linked to your personal identity

**Important:** Firebase Analytics data is:

- ✅ Anonymous and cannot identify you personally
- ✅ Encrypted in transit (HTTPS)
- ✅ Managed by Google according to their privacy policies
- ✅ Used solely for app improvement and analytics

### 2. Crash and Diagnostic Data (via Firebase Crashlytics)

We use Firebase Crashlytics to detect and fix app crashes. When the app crashes, Crashlytics automatically collects:

- Stack traces and error logs
- Device state at the time of crash
- App version and configuration
- Anonymous device identifiers

This data helps us identify and resolve bugs to improve app stability.

## How Your Personal Data is Stored

### Local Storage Only

All personal information you enter in F1Companion is stored locally on your device using:

- **AsyncStorage:** For app preferences and non-sensitive data (theme settings, app mode, dates)
- **Expo SecureStore:** For sensitive data (SSN, passport numbers, SEVIS ID) encrypted with AES-256 encryption

### No Cloud Backup

Your personal data is NOT:

- Uploaded to our servers (we don't have any)
- Synced to the cloud
- Shared with third parties
- Accessible to us or anyone else

## Third-Party Services

F1Companion uses the following third-party services:

### Google Firebase (Analytics & Crashlytics)

- **Purpose:** Anonymous usage analytics and crash reporting
- **Data Shared:** Device information, app usage patterns, crash logs
- **Privacy Policy:** [https://firebase.google.com/support/privacy](https://firebase.google.com/support/privacy)

### Google ML Kit (Text Recognition)

- **Purpose:** OCR scanning to extract text from documents
- **Processing:** All processing happens on-device - images never leave your phone
- **Privacy Policy:** [https://developers.google.com/ml-kit/terms](https://developers.google.com/ml-kit/terms)

## User Accounts

F1Companion does not have user accounts. You do not need to:

- Register or sign up
- Provide an email or password
- Create a profile
- Log in

The app works entirely offline and locally on your device.

## Data Retention and Deletion

### Automatic Deletion

Since all personal data is stored locally on your device:

- Uninstalling the app permanently deletes all your data
- There are no backups on our servers
- Data cannot be recovered after uninstallation

### Manual Deletion

You can delete all app data at any time by:

- Going to Settings → Reset App (if available)
- Uninstalling and reinstalling the app
- Clearing app data through your device settings

### Firebase Data Retention

Anonymous analytics data collected by Firebase is retained according to Google's data retention policies (typically 2-14 months). This data cannot be linked back to you personally.

## Children's Privacy

F1Companion is designed for F1 visa students who are typically 18 years or older. We do not knowingly collect personal information from children under 13. If you believe a child has used our app, please contact us.

## Data Security

We take data security seriously:

- ✅ **Encryption:** Sensitive data is encrypted using AES-256 encryption
- ✅ **Local Storage:** No transmission of personal data over the internet
- ✅ **Biometric Protection:** Secure document wallet can be protected with fingerprint/face recognition
- ✅ **HTTPS:** All Firebase communication uses encrypted connections

However, no method of electronic storage is 100% secure. While we use industry-standard security measures, we cannot guarantee absolute security.

## Your Rights

Since we don't collect or store your personal data on our servers, traditional data rights (access, correction, deletion requests) don't apply in the usual way. However:

- ✅ You have complete control over your data (it's on your device)
- ✅ You can delete all data by uninstalling the app
- ✅ You can opt out of analytics by using device-level settings
- ✅ You can contact us with privacy questions anytime

## International Data Transfers

Your personal data never leaves your device, so there are no international data transfers. Firebase Analytics data is processed by Google in accordance with their global infrastructure and privacy policies.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by:

- Updating the "Last Updated" date at the top of this policy
- Posting the new Privacy Policy in the app and on our website
- Notifying users through an in-app message for significant changes

## Contact Us

If you have questions about this Privacy Policy or how we handle data, please contact us:

- **Email:** devpushagnihotri@gmail.com
- **Website:** [https://www.pushkaragnihotri.me](https://www.pushkaragnihotri.me)

## Compliance

This Privacy Policy is designed to comply with:

- Google Play Store Data Safety requirements
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Other applicable privacy laws

## Summary

**What makes F1Companion privacy-friendly:**

| Feature | Status |
|---------|--------|
| User accounts required | ❌ No |
| Personal data sent to servers | ❌ No |
| Data stored in the cloud | ❌ No |
| Third-party data sharing | ❌ No (except anonymous analytics) |
| Local encryption for sensitive data | ✅ Yes (AES-256) |
| On-device OCR processing | ✅ Yes |
| Anonymous analytics only | ✅ Yes (Firebase) |
| Complete user control | ✅ Yes |

**Your privacy is our priority. All your sensitive information stays on your device, encrypted and secure.**
`;

export default function F1CompanionPrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-8 max-w-4xl pt-24">
                <article className="prose dark:prose-invert lg:prose-xl mx-auto">
                    <ReactMarkdown>{privacyPolicyContent}</ReactMarkdown>
                </article>
            </div>
            <Footer />
        </main>
    );
}
