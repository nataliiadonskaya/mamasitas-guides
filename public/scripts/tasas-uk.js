(() => {
  "use strict";

  const FEES = {
    residenceInitial: "10,94 €",
    residenceRenewal: "16,40 €",
    residenceModification: "10,94 €",
    workEmployedBelowSMI: "203,84 €",
    workEmployedAtLeastSMI: "407,71 €",
    workSelfEmployedInitial: "203,84 €",
    workRenewal: "81,54 €"
  };

  const procedures = {
    "cuenta-ajena": [
      {
        value: "initial",
        label: "Первинний дозвіл на проживання та роботу",
        fee052: FEES.residenceInitial,
        fee062: "salary-dependent",
        note052: "Modelo 790 código 052, epígrafe 2.1.3.",
        note062: "Modelo 790 código 062, epígrafe 3.2.1. Сума залежить від заробітної плати. За загальним правилом збір за дозвіл на роботу сплачує роботодавець."
      },
      {
        value: "renewal",
        label: "Продовження дозволу на проживання та роботу",
        fee052: FEES.residenceRenewal,
        fee062: FEES.workRenewal,
        note052: "Modelo 790 código 052, epígrafe 2.2.3.",
        note062: "Modelo 790 código 062, epígrafe 3.2.2. За загальним правилом збір за дозвіл на роботу сплачує роботодавець."
      },
      {
        value: "modification",
        label: "Модифікація дозволу",
        fee052: FEES.residenceModification,
        fee062: null,
        note052: "Для модифікації з тимчасового проживання на проживання та роботу застосовується epígrafe 2.5.2. Для інших випадків перевірте підставу.",
        note062: "Тариф 062 залежить від конкретного виду процедури."
      }
    ],

    "autonomo": [
      {
        value: "initial",
        label: "Первинний дозвіл на роботу por cuenta propia",
        fee052: FEES.residenceInitial,
        fee062: FEES.workSelfEmployedInitial,
        note052: "Modelo 790 código 052, epígrafe 2.1.3.",
        note062: "Modelo 790 código 062, epígrafe 3.3.1. Перевірте, чи не звільнений заявник від сплати збору."
      },
      {
        value: "renewal",
        label: "Продовження дозволу por cuenta propia",
        fee052: FEES.residenceRenewal,
        fee062: FEES.workRenewal,
        note052: "Modelo 790 código 052, epígrafe 2.2.3.",
        note062: "Modelo 790 código 062, epígrafe 3.3.2."
      },
      {
        value: "modification",
        label: "Модифікація на por cuenta propia",
        fee052: FEES.residenceModification,
        fee062: null,
        note052: "Для переходу з тимчасового проживання на проживання та роботу застосовується epígrafe 2.5.2. Інші модифікації потрібно перевіряти окремо.",
        note062: "Тариф 062 залежить від підстави. Перед оплатою перевірте відповідний epígrafe."
      }
    ],

    "menores": [
      {
        value: "family",
        label: "Возз’єднання сім’ї",
        fee052: FEES.residenceInitial,
        fee062: null,
        note052: "Modelo 790 código 052, epígrafe 2.1.2, для первинного дозволу на проживання через возз’єднання сім’ї.",
        note062: "Для звичайної заяви на возз’єднання сім’ї збір 062 не застосовується."
      },
      {
        value: "accompanied",
        label: "Дозвіл на проживання для неповнолітньої дитини, яка народилася за межами Іспанії та перебуває в супроводі дорослого",
        fee052: FEES.residenceInitial,
        fee062: null,
        note052: "Перед оплатою перевірте відповідність статті 160 Reglamento de Extranjería та правильний epígrafe Modelo 790-052.",
        note062: "Для звичайної заяви лише на проживання дитини збір 062 не застосовується."
      },
      {
        value: "other",
        label: "Інша процедура для дитини",
        fee052: null,
        fee062: null,
        note052: "Сума залежить від підстави та epígrafe. Перед оплатою перевірте офіційну таблицю.",
        note062: "Якщо окремо оформлюється право на роботу, збір потрібно перевірити відповідно до конкретної процедури."
      }
    ]
  };

  const $ = (id) => document.getElementById(id);

  function initTasasCalculator() {
    const category = $("procedure");
    const detail = $("procedure-detail");
    const salary = $("salary");

    if (!category || !detail) return;

    const detailWrap = $("procedure-detail-wrap");
    const salaryWrap = $("salary-wrap");

    const fee052 = $("res-052");
    const fee062 = $("res-062");
    const note052 = $("detail-052");
    const note062 = $("detail-062");
    const card062 = $("card-062");

    function setVisible(element, visible) {
      if (element) element.hidden = !visible;
    }

    function setText(element, value) {
      if (element) element.textContent = value || "";
    }

    function renderEmpty() {
      setText(fee052, "Виберіть процедуру");
      setText(fee062, "Виберіть процедуру");
      setText(note052, "");
      setText(note062, "");
      setVisible(salaryWrap, false);
      setVisible(card062, true);
    }

    function updateCalculator() {
      const items = procedures[category.value] || [];
      const selected = items.find((item) => item.value === detail.value);

      if (!selected) {
        renderEmpty();
        return;
      }

      const needsSalary = selected.fee062 === "salary-dependent";
      setVisible(salaryWrap, needsSalary);

      let amount062 = selected.fee062;

      if (needsSalary) {
        if (salary?.value === "below") {
          amount062 = FEES.workEmployedBelowSMI;
        } else if (salary?.value === "above") {
          amount062 = FEES.workEmployedAtLeastSMI;
        } else {
          amount062 = "Виберіть рівень заробітної плати";
        }
      }

      setText(
        fee052,
        selected.fee052 || "Потрібно уточнити підставу процедури"
      );

      setText(
        fee062,
        amount062 || "Не застосовується до звичайної заяви на проживання"
      );

      setText(note052, selected.note052);
      setText(note062, selected.note062);

      setVisible(card062, true);
    }

    function fillProcedures() {
      const items = procedures[category.value] || [];

      detail.replaceChildren();

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Виберіть процедуру";
      detail.appendChild(placeholder);

      items.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.value;
        option.textContent = item.label;
        detail.appendChild(option);
      });

      detail.value = "";
      setVisible(detailWrap, items.length > 0);
      renderEmpty();
    }

    category.addEventListener("change", fillProcedures);
    detail.addEventListener("change", updateCalculator);

    if (salary) {
      salary.addEventListener("change", updateCalculator);
    }

    fillProcedures();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTasasCalculator);
  } else {
    initTasasCalculator();
  }
})();