---
title: "vector에 원소를 추가하는 push_back"
date: 2026-09-07
category: "C++ · STL"
category_key: cpp
emoji: "📥"
image: "/assets/img/project4-fft-benchmark.png"
excerpt: "반복 계산한 값을 vector 끝에 차례로 추가하는 push_back의 기본 사용법을 기록했습니다."
notion_url: "https://app.notion.com/p/3d483a6d46b680d5aa46f208bf7e05e0"
---

## `push_back`

`vector`의 `push_back(value)`는 컨테이너 끝에 값을 추가합니다. 반복문에서 계산한 값을 순서대로 모을 때 자주 사용합니다.

크기를 미리 알고 있다면 `resize`로 공간을 만든 뒤 인덱스로 채우는 방법과 비교해 볼 수 있습니다.
