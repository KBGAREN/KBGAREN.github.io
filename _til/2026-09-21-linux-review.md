---
title: "Linux를 쓰는 이유와 시스템 구성 복습"
date: 2026-09-21
category: "Embedded Linux · CS"
category_key: linux
emoji: "📦"
image: "/assets/img/project2-architecture.webp"
excerpt: "Linux의 이식성·네트워크·드라이버 생태계와 툴체인부터 루트 파일시스템까지 복습했습니다."
notion_url: "https://app.notion.com/p/3e283a6d46b680e59658cc8e364e7d61"
---

## Linux를 사용하는 이유

Notion 기록에서는 여러 프로세서 아키텍처 지원, 네트워크 스택과 저장장치·멀티미디어 지원, 오픈소스 기반의 BSP 개발 유연성을 정리했습니다.

## 부팅 흐름의 구성

툴체인이 타깃 프로그램을 만들고, 부트로더가 커널을 올린 다음, 커널이 시스템 자원을 관리합니다. 커널 초기화 뒤에는 루트 파일시스템의 프로그램과 라이브러리가 동작합니다.

QEMU를 사용하면 실제 보드가 없어도 일부 타깃 환경을 에뮬레이션해 학습할 수 있습니다.
