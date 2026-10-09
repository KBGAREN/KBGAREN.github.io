---
title: "TOPST용 Yocto 이미지 빌드 기록"
date: 2026-07-27
category: "Yocto · Embedded Linux"
category_key: linux
emoji: "🛠️"
image: "/assets/img/project2-architecture.webp"
excerpt: "CAN·MQTT·Git·SSH 레이어 테스트와 이미지 설정, 빌드 환경 준비 과정을 정리했습니다."
notion_url: "https://app.notion.com/p/df083a6d46b6839dbb6281340e1b99c5"
---

## 빌드 환경

TOPST에서 제공한 소스 환경을 기반으로 레이어와 이미지 레시피를 추가해 빌드하는 흐름을 기록했습니다. `bitbake` 명령을 찾을 수 없다면 제공된 빌드 초기화 스크립트로 환경을 설정해야 합니다.

## 기능 확인 목록

- CAN과 MQTT 레이어 추가 및 테스트
- Git과 SSH 레이어 추가 및 테스트
- Wi-Fi와 네트워크 구성은 후속 작업으로 남김
- 보드에서 실행 중인 OS는 `/etc/os-release`로 확인

`local.conf`의 `MACHINE`은 보드 환경에 맞는지 확인한 뒤 수정하고, UART와 systemd 같은 옵션은 실제 이미지 요구사항에 맞춰 설정합니다.
