---
layout: default
title: Home
permalink: /
meta-title: 김병헌 | 임베디드 소프트웨어 엔지니어
meta-description: 펌웨어와 임베디드 Linux를 연결해 안정적인 장치를 만드는 김병헌의 포트폴리오입니다.
nav-short: true
css:
  - "/assets/css/home.css"
---

<main class="home-page">
  <section class="home-hero" aria-labelledby="home-title">
    <img class="home-portrait" src="/assets/img/profile.webp" alt="김병헌 프로필 사진" loading="eager">
    <div class="home-copy">
      <p class="home-eyebrow">EMBEDDED SOFTWARE ENGINEER</p>
      <h1 id="home-title">안녕하세요,<br>김병헌입니다<span>.</span></h1>
      <p class="home-lead">펌웨어와 임베디드 Linux를 연결해 실제 장치가 안정적으로 동작하도록 만드는 엔지니어입니다.</p>
      <ul class="home-skills" aria-label="주요 기술">
        <li>💻 C / Python</li>
        <li>⚙️ STM32 · FreeRTOS</li>
        <li>📡 CAN · MQTT</li>
        <li>🐧 Embedded Linux · Yocto</li>
      </ul>
      <div class="home-actions">
        <a class="home-button home-button-primary" href="/portfolio/">🚀 포트폴리오 보기</a>
        <a class="home-button home-button-quiet" href="mailto:doctorkbh@naver.com">✉️ 연락하기</a>
      </div>
    </div>
    <span class="hero-orbit hero-orbit-one" aria-hidden="true"></span>
    <span class="hero-orbit hero-orbit-two" aria-hidden="true"></span>
  </section>

  <section class="home-destinations" aria-label="사이트 메뉴">
    <a class="destination-card" href="/portfolio/">
      <img src="/assets/img/project1-demo.webp" alt="AI·V2X 임베디드 프로젝트 미리보기" loading="lazy">
      <div class="destination-copy">
        <p class="destination-kicker">PROJECTS &amp; EXPERIENCE</p>
        <h2>🧰 포트폴리오</h2>
        <p>임베디드 펌웨어, RTOS, Linux 프로젝트와 문제 해결 과정을 확인하세요.</p>
        <span class="destination-link">프로젝트 둘러보기 <span aria-hidden="true">→</span></span>
      </div>
    </a>
    <a class="destination-card" href="/til/">
      <img src="/assets/img/project2-architecture.webp" alt="임베디드 Linux 시스템 아키텍처 미리보기" loading="lazy">
      <div class="destination-copy">
        <p class="destination-kicker">TODAY I LEARNED</p>
        <h2>📚 TIL</h2>
        <p>Notion에 쌓아 온 학습 기록을 임베디드·Linux·C++ 주제별로 모았습니다.</p>
        <span class="destination-link">학습 기록 보기 <span aria-hidden="true">→</span></span>
      </div>
    </a>
  </section>

  {% assign latest_til = site.til | sort: "date" | reverse %}
  {% if latest_til.size > 0 %}
  <section class="home-latest" aria-labelledby="latest-title">
    <div class="home-section-heading">
      <div><p class="home-eyebrow">RECENT NOTES</p><h2 id="latest-title">최근 학습 기록</h2></div>
      <a href="/til/">TIL 전체 보기 →</a>
    </div>
    <div class="latest-grid">
      {% for entry in latest_til limit: 3 %}
      <a class="latest-card" href="{{ entry.url | relative_url }}">
        <span class="latest-emoji" aria-hidden="true">{{ entry.emoji }}</span>
        <span class="latest-category">{{ entry.category }}</span>
        <strong>{{ entry.title }}</strong>
        <time datetime="{{ entry.date | date: '%Y-%m-%d' }}">{{ entry.date | date: "%Y.%m.%d" }}</time>
      </a>
      {% endfor %}
    </div>
  </section>
  {% endif %}
</main>
