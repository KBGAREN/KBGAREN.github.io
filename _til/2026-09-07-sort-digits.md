---
title: "정수를 문자열로 바꿔 내림차순 정렬하기"
date: 2026-09-07
category: "C++ · 문자열"
category_key: cpp
emoji: "🔠"
image: "/assets/img/project4-fft-benchmark.png"
excerpt: "to_string, 역방향 반복자 정렬, stoll을 연결해 정수 자릿수를 정렬했습니다."
notion_url: "https://app.notion.com/p/3d483a6d46b68056950cf6eba6e63d4a"
---

## 풀이 흐름

1. `to_string`으로 정수를 문자열로 변환합니다.
2. `sort(str.rbegin(), str.rend())`로 자릿수를 큰 순서로 정렬합니다.
3. `stoll`로 정수형 결과를 만듭니다.

문자열 정렬은 자릿수에 직접 접근할 수 있어 간단합니다. 결과가 `long long` 범위에 들어가는지도 확인합니다.
