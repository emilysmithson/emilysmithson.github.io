---
title: Melody
tagline: Women's health app with seasonal cycle tracking and an AI Menstrual Coach — built solo from zero to production
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
  - /images/projects/melody/home.png
  - /images/projects/melody/reflect.png
  - /images/projects/melody/insights-emotions.png
  - /images/projects/melody/cycle-report.png
demo: null
---

I co-founded **Melody** (Flow With The Seasons) as the sole mobile developer — taking a women's health idea from blank canvas to App Store and Play Store alongside a non-technical product co-founder.

The app helps people understand their menstrual cycle through **daily tracking**, **seasonal insights**, and an **AI Menstrual Coach** that turns logged data into personalised guidance. It's not a generic period tracker: users can follow 14+ dimensions (energy, emotions, nervous system, sleep, BBT, and more), explore 15+ insight graph types, and export healthcare reports as PDFs.

## The product

Melody frames the cycle in seasons — spring, summer, autumn, winter — so patterns feel intuitive rather than clinical. The home screen centres on a colour-coded cycle ring; the Reflect tab lets users set intentions for each cycle; and a library of 120+ educational articles explains what's happening hormonally.

Behind the scenes, a **Melos monorepo** shares packages across the main app, a Widgetbook design-system workspace, and a separate **privacy-first offline tracker** with Hive encryption for users who want local-only storage.

## AI Menstrual Coach

The coach runs on **Vertex AI (Gemini)** via Cloud Functions, using a RAG architecture that retrieves content chunks from Firestore and caches context for cost-efficient prompts. It can call back into the app — opening the daily check-in, insights, or calendar from a natural-language reply — and personalises responses based on tracked patterns and user preferences.

At the end of each cycle, Gemini generates a structured report summarising energy, symptoms, and emotions. Crisis detection surfaces support resources when check-in data warrants it.

## Shipping with confidence

With no other mobile engineer on the team, quality had to be built in from the start: **250+ test files** spanning unit, widget, golden, BDD, integration (against real Gemini), and Patrol E2E tests. GitHub Actions runs the full suite on every push; Fastlane delivers to Play Store and TestFlight; and Shorebird patches production without waiting on store review.

The stack underneath — Firebase (Auth, Firestore, 12+ Cloud Functions, App Check), RevenueCat freemium subscriptions, Apple Health sync, Sentry monitoring, and GetIt + Injectable clean architecture with 100+ Cubits — is there to support the product, not the other way around.
