
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
        label: "Первоначальное разрешение на проживание и работу",
        fee052: FEES.residenceInitial,
        fee062: "salary-dependent",
        note052: "Modelo 790 código 052, epígrafe 2.1.3.",
        note062: "Modelo 790 código 062, epígrafe 3.2.1. Сумма зависит от зарплаты. По общему правилу плательщик пошлины за работу — работодатель."
      },
      {
        value: "renewal",
        label: "Продление проживания и работы",
        fee052: FEES.residenceRenewal,
        fee062: FEES.workRenewal,
        note052: "Modelo 790 código 052, epígrafe 2.2.3.",
        note062: "Modelo 790 código 062, epígrafe 3.2.2. По общему правилу пошлину за разрешение на работу оплачивает работодатель."
      },
      {
        value: "modification",
        label: "Модификация разрешения",
        fee052: FEES.residenceModification,
        fee062: null,
        note052: "Для модификации с временного проживания на проживание и работу применяется epígrafe 2.5.2. Для других случаев проверьте основание.",
        note062: "Тариф 062 зависит от конкретного вида процедуры."
      }
    ],

    "autonomo": [
      {
        value: "initial",
        label: "Первоначальное разрешение por cuenta propia",
        fee052: FEES.residenceInitial,
        fee062: FEES.workSelfEmployedInitial,
        note052: "Modelo 790 código 052, epígrafe 2.1.3.",
        note062: "Modelo 790 código 062, epígrafe 3.3.1. Проверьте, не распространяется ли на заявителя освобождение от пошлины."
      },
      {
        value: "renewal",
        label: "Продление por cuenta propia",
        fee052: FEES.residenceRenewal,
        fee062: FEES.workRenewal,
        note052: "Modelo 790 código 052, epígrafe 2.2.3.",
        note062: "Modelo 790 código 062, epígrafe 3.3.2."
      },
      {
        value: "modification",
        label: "Модификация на por cuenta propia",
        fee052: FEES.residenceModification,
        fee062: null,
        note052: "Для перехода с временного проживания на проживание и работу применяется epígrafe 2.5.2. Другие модификации нужно проверять отдельно.",
        note062: "Тариф 062 зависит от основания. Проверьте соответствующий эпиграф перед оплатой."
      }
    ],

    "menores": [
      {
        value: "family",
        label: "Воссоединение семьи",
        fee052: FEES.residenceInitial,
        fee062: null,
        note052: "Modelo 790 código 052, epígrafe 2.1.2, для первоначального разрешения на проживание по воссоединению семьи.",
        note062: "Для обычного заявления на воссоединение семьи пошлина 062 не применяется."
      },
      {
        value: "accompanied",
        label: "Проживание сопровождаемого несовершеннолетнего, не родившегося в Испании",
        fee052: FEES.residenceInitial,
        fee062: null,
        note052: "Проверьте соответствие статье 160 Reglamento de Extranjería и правильный эпиграф Modelo 790-052 перед оплатой.",
        note062: "Для обычного заявления только на проживание ребёнка пошлина 062 не применяется."
      },
      {
        value: "other",
        label: "Другая процедура для ребёнка",
        fee052: null,
        fee062: null,
        note052: "Сумма зависит от основания и эпиграфа. Проверьте официальную таблицу перед оплатой.",
        note062: "Если отдельно оформляется право на работу, пошлина проверяется по конкретной процедуре."
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
      setText(fee052, "Выберите процедуру");
      setText(fee062, "Выберите процедуру");
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
          amount062 = "Выберите зарплату";
        }
      }

      setText(
        fee052,
        selected.fee052 || "Нужно уточнить основание процедуры"
      );

      setText(
        fee062,
        amount062 || "Не применяется к обычному заявлению на проживание"
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
      placeholder.textContent = "Выберите процедуру";
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
