---
title: "배열에서 가장 작은 수 제거하기"
date: 2026-09-07
category: "C++ · STL"
category_key: cpp
emoji: "🧮"
image: "/assets/img/project4-fft-benchmark.png"
excerpt: "min_element로 최솟값 위치를 찾고 erase로 제거하며, 원소가 하나뿐인 경우도 처리했습니다."
notion_url: "https://app.notion.com/p/3d483a6d46b680029905e0fc6871f5eb"
---

## 풀이에서 기억할 함수

`std::min_element(arr.begin(), arr.end())`는 최솟값이 있는 반복자를 반환합니다. 그 반복자를 `erase`에 전달하면 해당 원소를 지울 수 있습니다.

문제에서 배열의 길이가 1이면 `{-1}`을 반환하라는 예외 조건도 처리해야 합니다. 조건을 코드로 옮기기 전에 문제 문장을 먼저 다시 읽는 것이 중요했습니다.
