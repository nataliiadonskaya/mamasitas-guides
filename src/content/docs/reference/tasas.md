---
title: Оплата пошлин (Tasas)
description: Калькулятор и инструкция по оплате пошлин Modelo 790-052 и 790-062 при смене статуса.
---

При переходе с временной защиты на стандартную резиденцию (EX-26 / EX-25) оплачиваются государственные пошлины.

---

## 🧮 Интерактивный калькулятор пошлин

Выберите вашу процедуру для расчета точных сумм и моделей:

<div class="tasa-calc">
  <label for="procedure-select" class="calc-label">Выберите вашу процедуру:</label>
  <select id="procedure-select" class="calc-select" onchange="calculateTasa()">
    <option value="autonomo">Переход на Autónomo (EX-26)</option>
    <option value="cuenta-ajena">Работа по контракту / Cuenta Ajena (EX-26)</option>
    <option value="menores">Резиденция для несовершеннолетних детей (EX-25)</option>
  </select>

  <div class="calc-result" id="calc-result">
    <div class="res-card">
      <div class="res-title">Modelo 790 Code 052</div>
      <div class="res-desc">Пошлина за разрешение на проживание ( Tramitación de autorización de residencia )</div>
      <div class="res-amount" id="amount-052">€10.94</div>
    </div>
    <div class="res-card" id="card-062">
      <div class="res-title">Modelo 790 Code 062</div>
      <div class="res-desc">Пошлина за разрешение на работу ( Tramitación de autorización de trabajo )</div>
      <div class="res-amount" id="amount-062">€203.84</div>
    </div>
  </div>
</div>

<script>{`
  function calculateTasa() {
    const val = document.getElementById('procedure-select').value;
    const amount052 = document.getElementById('amount-052');
    const amount062 = document.getElementById('amount-062');
    const card062 = document.getElementById('card-062');

    if (val === 'autonomo') {
      amount052.innerText = '€10.94';
      amount062.innerText = '€203.84';
      card062.style.display = 'block';
    } else if (val === 'cuenta-ajena') {
      amount052.innerText = '€10.94';
      amount062.innerText = 'Оплачивает работодатель (€203.84)';
      card062.style.display = 'block';
    } else if (val === 'menores') {
      amount052.innerText = '€10.94';
      card062.style.display = 'none';
    }
  }
`}</script>

---

## 📌 Заполнение и объединение квитанций

При подаче документов через платформу Mercurio система требует загрузить подтверждение оплаты **в едином PDF-файле**.

1. Оплатите квитанции в банкомате или через онлайн-банкинг (BBVA, CaixaBank, Santander).
2. Сохраните чек с указанием **NRC** (Número de Referencia Completo).
3. Объедините бланки Modelo 790 и чеки об оплате в один PDF-документ.

---

<div class="paid-service-card">
  <div class="card-badge">PREMIUM УСЛУГА</div>
  <h3>Нужна помощь с правильным заполнением и сборкой PDF?</h3>
  <p>Ошибки в кодах пошлин или некорректно объединенные квитанции приводят к приостановке рассмотрения дела (Requerimiento).</p>
  <ul>
    <li>Заполним правильные реквизиты под ваш регион</li>
    <li>Проверим корректность чеков и NRC-кодов</li>
    <li>Сформируем единый готовый PDF-пакет для загрузки в Mercurio</li>
  </ul>
  <a href="https://t.me/mamasitas_es" target="_blank" class="service-btn">
    💬 Заказать подготовку пошлин в Telegram
  </a>
</div>

<style>{`
  .tasa-calc {
    background: rgba(43, 22, 27, 0.4);
    border: 1px solid rgba(199, 161, 83, 0.3);
    border-radius: 16px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
  .calc-label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #fff;
  }
  .calc-select {
    width: 100%;
    padding: 0.8rem;
    border-radius: 10px;
    background: #1A0D10;
    color: #fff;
    border: 1px solid #C7A153;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  .calc-result {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .res-card {
    background: rgba(199, 161, 83, 0.1);
    border: 1px solid rgba(199, 161, 83, 0.25);
    padding: 1rem;
    border-radius: 12px;
  }
  .res-title {
    font-weight: 700;
    color: #C7A153;
    font-size: 1.1rem;
  }
  .res-desc {
    font-size: 0.82rem;
    color: #ccc;
    margin: 0.4rem 0;
  }
  .res-amount {
    font-size: 1.4rem;
    font-weight: 800;
    color: #fff;
  }
  
  .paid-service-card {
    background: linear-gradient(135deg, rgba(43, 22, 27, 0.9) 0%, rgba(20, 10, 12, 0.95) 100%);
    border: 2px solid #C7A153;
    border-radius: 20px;
    padding: 1.8rem;
    margin-top: 2.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  .card-badge {
    display: inline-block;
    background: #C7A153;
    color: #111;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    margin-bottom: 0.8rem;
  }
  .paid-service-card h3 {
    margin-top: 0 !important;
    color: #fff !important;
  }
  .paid-service-card ul {
    padding-left: 1.2rem;
    color: #ddd;
    margin: 1rem 0 1.5rem 0;
  }
  .service-btn {
    display: block;
    text-align: center;
    background: #C7A153;
    color: #111 !important;
    font-weight: 700;
    padding: 0.9rem;
    border-radius: 12px;
    text-decoration: none !important;
    transition: transform 0.2s;
  }
  .service-btn:hover {
    transform: translateY(-2px);
  }
`}</style>