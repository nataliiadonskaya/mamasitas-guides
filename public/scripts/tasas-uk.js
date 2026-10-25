
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
    autonomo: [
      {
        value: "initial",
        label: "Первинний дозвіл",
        fee052: FEES.residenceInitial,
        note052:
          "Modelo 790-052, epígrafe 2.1.3. Первинний дозвіл на проживання та роботу. Платник: заявник.",
        fee062: FEES.workSelfEmployedInitial,
        note062:
          "Modelo 790-062, epígrafe 3.3.1. Первинний дозвіл на роботу por cuenta propia. Платник: заявник."
      },
      {
        value: "renewal",
        label: "Продовження дозволу",
        fee052: FEES.residenceRenewal,
        note052:
          "Modelo 790-052, epígrafe 2.2.3. Продовження дозволу на проживання та роботу. Платник: заявник.",
        fee062: FEES.workRenewal,
        note062:
          "Modelo 790-062, epígrafe 3.3.2. Продовження дозволу на роботу por cuenta propia. Платник: заявник."
      },
      {
        value: "modification",
        label: "Модифікація дозволу",
        fee052: FEES.residenceModification,
        note052:
          "10,94 € відповідає Modelo 790-052, epígrafe 2.5.2, для передбаченої цим епіграфом модифікації тимчасового дозволу на проживання на дозвіл на проживання та роботу. Переконайтеся, що ваша підстава відповідає цій процедурі.",
        fee062: null,
        note062:
          "Сума Modelo 790-062 залежить від конкретної підстави. Тариф первинного дозволу por cuenta propia не можна автоматично застосовувати до всіх модифікацій. Перевірте відповідний епіграф перед оплатою."
      }
    ],

    "cuenta-ajena": [
      {
        value: "initial",
        label: "Первинний дозвіл",
        fee052: FEES.residenceInitial,
        note052:
          "Modelo 790-052, epígrafe 2.1.3. Первинний дозвіл на проживання та роботу. Платник: заявник.",
        fee062: "salary-dependent",
        showSMIInfo: true,
        note062:
          "Modelo 790-062, epígrafe 3.2.1. Розмір збору залежить від винагороди. Платник: роботодавець."
      },
      {
        value: "renewal",
        label: "Продовження дозволу",
        fee052: FEES.residenceRenewal,
        note052:
          "Modelo 790-052, epígrafe 2.2.3. Продовження дозволу на проживання та роботу. Платник: заявник.",
        fee062: FEES.workRenewal,
        note062:
          "Modelo 790-062, epígrafe 3.2.2. Продовження дозволу на роботу por cuenta ajena. Платник: роботодавець."
      },
      {
        value: "modification",
        label: "Модифікація дозволу",
        fee052: FEES.residenceModification,
        note052:
          "10,94 € відповідає Modelo 790-052, epígrafe 2.5.2, якщо ваша процедура належить до передбаченої ним підстави. Платник: заявник.",
        fee062: null,
        note062:
          "Для модифікації не можна автоматично використовувати тариф первинного дозволу або продовження. Перевірте підставу, відповідний епіграф Modelo 790-062 та платника. У разі роботи за наймом збір за дозвіл на роботу сплачує роботодавець."
      }
    ],

    "proteccion-temporal": [
      {
        value: "cuenta-ajena",
        label: "Перехід із ТЗ на роботу за наймом (por cuenta ajena)",
        fee052: FEES.residenceModification,
        note052:
          "Modelo 790-052, epígrafe 2.5.2. Орієнтовний збір: 10,94 €. Підстава: Instrucciones SEM 2/2026, instrucción primera, artículo 191. Перевірте застосовність цієї підстави перед оплатою.",
        fee062: "salary-dependent",
        showSMIInfo: true,
        note062:
          "Modelo 790-062, epígrafe 3.2.1. Розмір збору залежить від винагороди. Платник: роботодавець."
      },
      {
        value: "autonomo",
        label: "Перехід із ТЗ на роботу на себе (por cuenta propia)",
        fee052: FEES.residenceModification,
        note052:
          "Modelo 790-052, epígrafe 2.5.2. Орієнтовний збір: 10,94 €. Підстава: Instrucciones SEM 2/2026, instrucción primera, artículo 191. Перевірте застосовність цієї підстави перед оплатою.",
        fee062: FEES.workSelfEmployedInitial,
        note062:
          "Modelo 790-062, epígrafe 3.3.1. Первинний дозвіл на роботу por cuenta propia. Орієнтовний збір: 203,84 €. Платник: заявник. Перед оплатою перевірте відповідний тариф."
      }
    ],

    menores: [
      {
        value: "family",
        label: "Возз’єднання сім’ї",
        fee052: null,
        note052:
          "Сума залежить від конкретної процедури. Уточніть підставу та відповідний епіграф Modelo 790-052.",
        fee062: null,
        note062:
          "Збір Modelo 790-062 залежить від того, чи потрібен дозвіл на роботу в межах цієї процедури."
      },
      {
        value: "accompanied",
        label: "Проживання неповнолітньої дитини, яка перебуває в супроводі",
        fee052: null,
        note052:
          "Визначте точну підставу заяви дитини та відповідний епіграф Modelo 790-052.",
        fee062: null,
        note062:
          "Якщо оформлюється лише проживання дитини без дозволу на роботу, збір за дозвіл на роботу може не вимагатися."
      },
      {
        value: "other",
        label: "Інша процедура для дитини",
        fee052: null,
        note052:
          "Уточніть підставу заяви та відповідний тариф Modelo 790-052.",
        fee062: null,
        note062:
          "Необхідність та розмір Modelo 790-062 залежать від конкретної процедури."
      }
    ]
  };

  const $ = (id) => document.getElementById(id);

  function initTasasCalculator() {
    const category = $("procedure");
    const detail = $("procedure-detail");
    const salary = $("salary");
    const detailWrap = $("procedure-detail-wrap");
    const salaryWrap = $("salary-wrap");
    const smiInfo = $("smi-info");
    const fee052 = $("res-052");
    const fee062 = $("res-062");
    const note052 = $("detail-052");
    const note062 = $("detail-062");
    const card062 = $("card-062");

    if (!category || !detail || !fee052 || !fee062 || !note052 || !note062) {
      return;
    }

    function setVisible(element, visible) {
      if (element) element.hidden = !visible;
    }

    function setText(element, value) {
      if (element) element.textContent = value || "";
    }

    function renderEmpty() {
      setText(fee052, "Виберіть процедуру");
      setText(fee062, "Виберіть процедуру");
      setText(note052, "Результат з’явиться після вибору процедури.");
      setText(note062, "Результат з’явиться після вибору процедури.");

      setVisible(salaryWrap, false);
      setVisible(smiInfo, false);
      setVisible(card062, true);

      if (salary) salary.value = "";
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
      setVisible(smiInfo, needsSalary || Boolean(selected.showSMIInfo));

      let amount062 = selected.fee062;
      let salaryNote = "";

      if (needsSalary) {
        if (salary && salary.value === "below") {
          amount062 = FEES.workEmployedBelowSMI;
          salaryNote =
            " Тариф epígrafe 3.2.1.a: винагорода нижча за 2 × SMI. Перед оплатою звірте суму з чинною формою.";
        } else if (salary && salary.value === "above") {
          amount062 = FEES.workEmployedAtLeastSMI;
          salaryNote =
            " Тариф epígrafe 3.2.1.b: винагорода дорівнює 2 × SMI або перевищує цей поріг. Перед оплатою звірте суму з чинною формою.";
        } else {
          amount062 = "Виберіть розмір винагороди";
        }
      }

      setText(fee052, selected.fee052 || "Потрібно уточнити підставу та суму");
      setText(fee062, amount062 || "Потрібно уточнити підставу та суму");
      setText(note052, selected.note052);
      setText(note062, selected.note062 + salaryNote);
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
      if (salary) salary.value = "";

      setVisible(detailWrap, items.length > 0);
      renderEmpty();
    }

    category.addEventListener("change", fillProcedures);
    detail.addEventListener("change", updateCalculator);
    if (salary) salary.addEventListener("change", updateCalculator);

    fillProcedures();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTasasCalculator);
  } else {
    initTasasCalculator();
  }
})();
