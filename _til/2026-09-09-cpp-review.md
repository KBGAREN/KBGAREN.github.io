---
title: "C++ 기본 문법과 STL 복습"
date: 2026-09-09
category: "C++ · 알고리즘"
category_key: cpp
emoji: "💻"
image: "/assets/img/project4-fft-benchmark.png"
excerpt: "vector, sort·unique, 탐색, 문자 처리 등 코딩 테스트에 필요한 C++ 표준 라이브러리를 정리했습니다."
notion_url: "https://app.notion.com/p/3d683a6d46b6803aaf3dc4028fc1d0fa"
---

## 복습 항목

- 기본 문법: `long long`, `size_t`, 참조자, `const`, 람다, 형변환과 오버플로
- `vector`: `push_back`, `pop_back`, `resize`, `reserve`, `insert`, `erase`
- 정렬과 중복 제거: `sort`, 비교자, `stable_sort`, `unique`와 `erase`
- 탐색: `find`, `count_if`, `lower_bound`, `upper_bound`, `binary_search`
- 문자 처리: `tolower`, `toupper`, `isdigit`, `isspace`

이분 탐색 함수는 정렬된 범위가 전제라는 점과, `<cctype>` 함수에 `char`를 넘길 때의 안전한 형변환도 함께 확인했습니다.
