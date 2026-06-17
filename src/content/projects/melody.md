---
title: Melody
tagline: Women's health platform with AI-powered Menstrual Coach — 1,100+ Dart files, 250+ tests, sole mobile developer
featured: true
order: 1
type: professional
platforms:
  - Android
  - iOS
tags:
  - Flutter
  - Melos
  - Vertex AI
  - Firebase
  - RevenueCat
  - Cubit
  - Patrol
  - Widgetbook
  - Shorebird
  - Sentry
  - HealthKit
  - Fastlane
  - Injectable
  - Cloud Functions
links:
  website: https://livehormoniously.com
  playStore: PLACEHOLDER
  appStore: PLACEHOLDER
images:
  - /images/projects/melody-hero.png
demo: null
---

Technical co-founder and **sole mobile developer** for Melody (Flow With The Seasons) — a production women's health app that helps people understand and work with their menstrual cycle through daily tracking, seasonal insights, and an AI-powered Menstrual Coach. Built from zero to App Store and Play Store as the only engineer on the mobile side.

## What I built

- **Full production Flutter app** — architecture, backend integration, AI coach, monetisation, testing, and store delivery alongside a non-technical product co-founder.
- **Melos monorepo** with shared packages (`api`, `auth`, `entities`), a Widgetbook design-system workspace, and a separate **privacy-first offline tracker** (`private_period_tracker`) with Hive encryption and local-only storage.
- **14+ tracking dimensions** — menstruation, nervous system, energy, emotions, mental state, physical sensations, cravings, BBT, sleep, discharge, self-care, medications, support activities, and journal — with **15+ insight graph types** and healthcare report PDF export.
- **120+ in-app educational articles** organised by season, symptom, and condition, with a Google Docs → HTML content pipeline.

## AI Menstrual Coach

- **Vertex AI (Gemini)** via Cloud Functions — `gemini-2.5-flash`, `flash-lite`, and `pro` models for daily tune-ins, predictions, and end-of-cycle reports.
- **RAG architecture** — core knowledge pack plus retrieved content chunks from Firestore, with **Vertex AI context caching** for cost-efficient prompt reuse.
- **Function calling** — the coach can trigger in-app navigation (daily check-in, insights, calendar) from natural-language responses.
- **Personalisation engine** — pattern analysis, prompt building, response caching, and user preferences (e.g. fertility content avoidance).
- **Crisis detection** — surfaces support resources based on tracked data after check-in.

## Backend & platform

- **Firebase** — Auth (email, Google, Apple), versioned Firestore paths, Cloud Functions (12+ exported), Storage, Analytics, Crashlytics, Remote Config, App Check, and App Installations.
- **Dual-environment setup** — separate dev/prod Firebase projects with `FirebaseInstanceManager` and environment-aware dependency injection.
- **Cloud Functions** — AI coach, Mailchimp audience/transactional email, trial-ending notifications, calendar ICS export (personal + partner sharing), and custom auth tokens.
- **Apple Health integration** — menstrual flow import on onboarding and write-back sync.
- **Deep linking** — HTTPS (`livehormoniously.com`) and custom scheme routing via Auto Route guards and notification templates.

## Monetisation & growth

- **RevenueCat** freemium subscriptions with native paywalls, scenario-based paywall triggers, web purchase redemption, and a subscription guard on premium routes.
- **Freemium architecture** — local-only tracking for free users, cloud sync for signed-in users, premium gating via `PremiumFeatureService`.
- **Facebook App Events** for purchase attribution; Mailchimp for marketing opt-in.

## Quality & testing

- **250+ test files** across a full pyramid: unit (`bloc_test`, `mocktail`), widget, golden (light/dark with threshold comparator), BDD step library (~15+ onboarding/auth flows with `fake_cloud_firestore`), integration tests against real Gemini, and **Patrol E2E** with robot/page-object pattern and recording workflow.
- **Accessibility testing** — semantics verification on calendar, check-in, onboarding, and auth screens.
- **CI** — GitHub Actions running `melos bootstrap`, `build_runner`, analyse, format, and full test suites on every push.

## Release engineering

- **Fastlane** pipelines for Play Store (internal + production rollout) and App Store (TestFlight + release) via GitHub Actions release workflow.
- **Shorebird** over-the-air Dart patches for rapid production fixes without store review.
- **Sentry** error monitoring with in-app bug reports (screenshot + logs); deferred init for fast startup.

## Architecture highlights

Clean Architecture with **GetIt + Injectable** DI, repository pattern (15+ repositories), **Cubit** state management (100+ cubits) with `bloc_presentation` for one-off UI events, **Auto Route** with subscription guards, and a phased startup sequence (App Check → Firebase → DI → background refresh).
