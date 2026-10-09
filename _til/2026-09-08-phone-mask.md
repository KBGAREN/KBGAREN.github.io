---
title: "문자열에서 전화번호 뒷자리만 남기기"
date: 2026-09-08
category: "C++ · 문자열"
category_key: cpp
emoji: "📱"
image: "/assets/img/project4-fft-benchmark.png"
excerpt: "substr로 뒤쪽을 분리하거나 문자열 앞부분을 직접 바꾸는 두 가지 풀이를 비교했습니다."
notion_url: "https://app.notion.com/p/3d583a6d46b6808caa72c7b3efcdb6f0"
---

## 두 가지 접근

1. `substr`로 마지막 네 글자를 가져와 앞쪽 마스킹 문자열과 합칩니다.
2. 기존 문자열의 앞쪽 문자를 `*`로 바꾼 뒤 그대로 반환합니다.

문자열을 복사해 새 결과를 만들지, 입력 문자열을 직접 수정할지에 따라 코드가 달라집니다. 문자열 길이가 짧은 입력도 문제 조건에서 허용되는지 확인하겠습니다.
