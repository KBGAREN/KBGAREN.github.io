---
title: "임베디드 Linux의 네 가지 구성 요소와 툴체인"
date: 2026-09-23
category: "Embedded Linux · QEMU"
category_key: linux
emoji: "🐧"
image: "/assets/img/project2-architecture.webp"
excerpt: "툴체인, 부트로더, 커널, 루트 파일시스템의 역할과 QEMU 실습 환경을 정리했습니다."
notion_url: "https://app.notion.com/p/3e283a6d46b6808bbe55d6b6a23cbf32"
---

## 임베디드 Linux의 네 가지 구성 요소

- **툴체인**: 타깃 장치에서 실행할 프로그램을 만드는 컴파일러와 관련 도구
- **부트로더**: 보드를 초기화하고 Linux 커널을 메모리에 올려 실행
- **커널**: 프로세스와 메모리, 장치 등 시스템 자원을 관리
- **루트 파일시스템**: 커널 부팅 뒤 실행되는 라이브러리와 사용자 프로그램 제공

## 크로스 툴체인과 QEMU

개발 PC와 다른 아키텍처의 장치를 대상으로 코드를 만들 때 크로스 툴체인을 사용합니다. 기록에서는 Raspberry Pi와 QEMU를 실습 대상으로 비교하고, 미리 빌드된 툴체인을 받는 방법과 crosstool-NG를 사용하는 방법을 살펴봤습니다.
