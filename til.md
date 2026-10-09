---
layout: default
title: TIL
subtitle: Today I Learned
permalink: /til/
meta-title: 김병헌 | TIL
meta-description: Notion에 기록한 임베디드 Linux, RTOS, C++ 학습 노트.
nav-short: true
css:
  - "/assets/css/til.css"
---

<main class="til-page">
  <header class="til-heading">
    <div>
      <p class="til-eyebrow">TODAY I LEARNED</p>
      <h1>📚 배운 것을 기록으로 남깁니다</h1>
      <p class="til-intro">Notion에 정리한 학습 기록을 날짜와 주제로 모았습니다. 각 노트에서 원문을 확인할 수 있어요.</p>
    </div>
    <div class="til-manage-actions" aria-label="TIL 관리">
      <a class="til-button til-button-primary" href="https://github.com/KBGAREN/KBGAREN.github.io/new/master/_til" target="_blank" rel="noopener noreferrer">➕ 새 기록 추가</a>
      <a class="til-button til-button-light" href="https://app.notion.com/p/3d483a6d46b6808791fdd8abf84e7478" target="_blank" rel="noopener noreferrer">🗂 Notion 원문</a>
    </div>
  </header>

  <section class="til-admin-note" aria-label="로그인 편집 안내">
    <span aria-hidden="true">🔐</span>
    <p><strong>GitHub 로그인으로 글을 관리합니다.</strong> 추가·수정·삭제 버튼은 저장소의 웹 편집 화면을 엽니다. 저장하면 사이트에 자동 반영됩니다.</p>
    <a href="#til-edit-guide">작성 방법</a>
  </section>

  <section class="til-list-section" aria-labelledby="til-list-title">
    <div class="til-list-heading">
      <div><p class="til-eyebrow">LEARNING LOG</p><h2 id="til-list-title">학습 기록 <span>{{ site.til.size }}</span></h2></div>
      <label class="til-search-label" for="til-search">🔎 기록 찾기</label>
      <input id="til-search" class="til-search" type="search" placeholder="제목이나 주제로 검색" autocomplete="off">
    </div>
    <div class="til-filter-row" role="group" aria-label="주제별 필터">
      <button class="til-filter is-active" type="button" data-til-filter="all" aria-pressed="true">전체</button>
      <button class="til-filter" type="button" data-til-filter="review" aria-pressed="false">📝 회고</button>
      <button class="til-filter" type="button" data-til-filter="embedded" aria-pressed="false">⚙️ 임베디드</button>
      <button class="til-filter" type="button" data-til-filter="linux" aria-pressed="false">🐧 Linux</button>
      <button class="til-filter" type="button" data-til-filter="cpp" aria-pressed="false">💻 C / C++</button>
    </div>

    <div class="til-grid" id="til-grid">
      {% assign sorted_til = site.til | sort: "date" | reverse %}
      {% for entry in sorted_til %}
      <article class="til-card" data-til-card data-til-category="{{ entry.category_key }}" data-til-search="{{ entry.title | downcase | escape }} {{ entry.category | downcase | escape }} {{ entry.excerpt | downcase | escape }}">
        <a class="til-card-image" href="{{ entry.url | relative_url }}" tabindex="-1" aria-hidden="true">
          <img src="{{ entry.image | relative_url }}" alt="" loading="lazy">
          <span>{{ entry.emoji }}</span>
        </a>
        <div class="til-card-content">
          <div class="til-card-meta"><span class="til-category">{{ entry.category }}</span><time datetime="{{ entry.date | date: '%Y-%m-%d' }}">{{ entry.date | date: "%Y.%m.%d" }}</time></div>
          <h3><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a></h3>
          <p>{{ entry.excerpt }}</p>
          <div class="til-card-footer">
            <a class="til-read-link" href="{{ entry.url | relative_url }}">기록 읽기 <span aria-hidden="true">→</span></a>
            <div class="til-card-actions" aria-label="{{ entry.title }} 관리">
              <a href="https://github.com/KBGAREN/KBGAREN.github.io/edit/master/{{ entry.path }}" target="_blank" rel="noopener noreferrer" aria-label="{{ entry.title }} 수정">✏️ 수정</a>
              <a href="https://github.com/KBGAREN/KBGAREN.github.io/delete/master/{{ entry.path }}" target="_blank" rel="noopener noreferrer" aria-label="{{ entry.title }} 삭제" onclick="return confirm('GitHub에서 이 기록 파일을 삭제하는 화면을 열까요?')">🗑 삭제</a>
            </div>
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
    <p class="til-no-results" id="til-no-results" hidden>검색 결과가 없습니다. 다른 단어로 찾아보세요.</p>
  </section>

  <section class="til-edit-guide" id="til-edit-guide" aria-labelledby="til-guide-title">
    <div class="guide-icon" aria-hidden="true">📝</div>
    <div>
      <p class="til-eyebrow">HOW TO ADD A NOTE</p>
      <h2 id="til-guide-title">새 기록 추가하기</h2>
      <ol>
        <li><strong>새 기록 추가</strong>를 누르고 GitHub에 로그인합니다.</li>
        <li>파일 경로를 <code>_til/YYYY-MM-DD-짧은-제목.md</code> 형식으로 입력합니다.</li>
        <li>아래 양식을 복사해 내용을 작성한 뒤 <strong>Commit changes</strong>를 선택합니다.</li>
      </ol>
      <pre><code>---
title: "새 학습 기록"
date: 2026-10-10
category: "임베디드"
category_key: embedded
emoji: "⚙️"
image: "/assets/img/project2-architecture.webp"
excerpt: "오늘 배운 내용을 한 문장으로 정리합니다."
notion_url: "https://app.notion.com/p/..."
---

## 오늘 배운 점

여기에 학습 내용을 적습니다.</code></pre>
      <p class="guide-footnote">수정·삭제는 각 기록 카드의 버튼에서 GitHub 로그인 후 진행할 수 있습니다. 삭제는 GitHub가 최종 확인을 요청합니다.</p>
    </div>
  </section>
</main>

<script src="/assets/js/til-filter.js" defer></script>
