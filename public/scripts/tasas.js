
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
        label: "Первоначальное разрешение",
        fee052: FEES.residenceInitial,
        note052:
          "Modelo 790-052, epígrafe 2.1.3. Первоначальное разрешение на проживание и работу. Плательщик: заявитель.",
        fee062: FEES.workSelfEmployedInitial,
        note062:
          "Modelo 790-062, epígrafe 3.3.1. Первоначальное разрешение на работу por cuenta propia. Плательщик: заявитель."
      },
      {
        value: "renewal",
        label: "Продление разрешения",
        fee052: FEES.residenceRenewal,
        note052:
          "Modelo 790-052, epígrafe 2.2.3. Продление разрешения на проживание и работу. Плательщик: заявитель.",
        fee062: FEES.workRenewal,
        note062:
          "Modelo 790-062, epígrafe 3.3.2. Продление разрешения на работу por cuenta propia. Плательщик: заявитель."
      },
      {
        value: "modification",
        label: "Модификация разрешения",
        fee052: FEES.residenceModification,
        note052:
          "10,94 € соответствует Modelo 790-052, epígrafe 2.5.2, для предусмотренной этим эпиграфом модификации с временного разрешения на проживание на разрешение на проживание и работу. Убедитесь, что ваше основание подходит.",
        fee062: null,
        note062:
          "Сумма Modelo 790-062 зависит от конкретного основания. Тариф первоначального разрешения por cuenta propia нельзя автоматически применять ко всем модификациям. Проверьте применимый эпиграф перед оплатой."
      }
    ],

    "cuenta-ajena": [
      {
        value: "initial",
        label: "Первоначальное разрешение",
        fee052: FEES.residenceInitial,
        note052:
          "Modelo 790-052, epígrafe 2.1.3. Первоначальное разрешение на проживание и работу. Плательщик: заявитель.",
        fee062: "salary-dependent",
        showSMIInfo: true,
        note062:
          "Modelo 790-062, epígrafe 3.2.1. Размер пошлины зависит от вознаграждения. Плательщик: работодатель."
      },
      {
        value: "renewal",
        label: "Продление разрешения",
        fee052: FEES.residenceRenewal,
        note052:
          "Modelo 790-052, epígrafe 2.2.3. Продление разрешения на проживание и работу. Плательщик: заявитель.",
        fee062: FEES.workRenewal,
        note062:
          "Modelo 790-062, epígrafe 3.2.2. Продление разрешения на работу por cuenta ajena. Плательщик: работодатель."
      },
      {
        value: "modification",
        label: "Модификация разрешения",
        fee052: FEES.residenceModification,
        note052:
          "10,94 € соответствует Modelo 790-052, epígrafe 2.5.2, если ваша процедура относится к указанному в нём основанию. Плательщик: заявитель.",
        fee062: null,
        note062:
          "Для модификации нельзя автоматически использовать тариф первоначального разрешения или продления. Проверьте основание, применимый эпиграф Modelo 790-062 и плательщика. При работе по найму пошлину за разрешение на работу оплачивает работодатель."
      }
    ],

    "proteccion-temporal": [
      {
        value: "cuenta-ajena",
        label: "Переход с ТЗ на por cuenta ajena",
        fee052: FEES.residenceModification,
        note052:
          "Modelo 790-052, epígrafe 2.5.2. Модификация разрешения на проживание в разрешение на проживание и работу. Пошлина: 10,94 €. Основание: Instrucciones SEM 2/2026, instrucción primera, artículo 191.",
        fee062: "salary-dependent",
        showSMIInfo: true,
        note062:
          "Modelo 790-062, epígrafe 3.2.1. Первоначальное разрешение на работу por cuenta ajena. При зарплате ниже 2 × SMI: 203,84 €; при зарплате, равной 2 × SMI или выше: 407,71 €. Плательщик: работодатель."
      },
      {
        value: "autonomo",
        label: "Переход с ТЗ на por cuenta propia",
        fee052: FEES.residenceModification,
        note052:
          "Modelo 790-052, epígrafe 2.5.2. Модификация разрешения на проживание в разрешение на проживание и работу. Пошлина: 10,94 €. Основание: Instrucciones SEM 2/2026, instrucción primera, artículo 191.",
        fee062: FEES.workSelfEmployedInitial,
        note062:
          "Modelo 790-062, epígrafe 3.3.1. Первоначальное разрешение на работу por cuenta propia. Пошлина: 203,84 €. Плательщик: заявитель."
      }
    ],

    menores: [
      {
        value: "family",
        label: "Воссоединение семьи",
        fee052: null,
        note052:
          "Сумма зависит от конкретной процедуры. Уточните основание и эпиграф Modelo 790-052.",
        fee062: null,
        note062:
          "Пошлина Modelo 790-062 зависит от того, требуется ли разрешение на работу в рамках этой процедуры."
      },
      {
        value: "accompanied",
        label: "Проживание сопровождаемого несовершеннолетнего",
        fee052: null,
        note052:
          "Определите точное основание заявления ребёнка и применимый эпиграф Modelo 790-052.",
        fee062: null,
        note062:
          "Если оформляется только проживание ребёнка без разрешения на работу, пошлина за разрешение на работу может не требоваться."
      },
      {
        value: "other",
        label: "Другая процедура для ребёнка",
        fee052: null,
        note052:
          "Уточните основание заявления и применимый тариф Modelo 790-052.",
        fee062: null,
        note062:
          "Необходимость и размер Modelo 790-062 зависят от конкретной процедуры."
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

    if (
      !category ||
      !detail ||
      !fee052 ||
      !fee062 ||
      !note052 ||
      !note062
    ) {
      return;
    }

    function setVisible(element, visible) {
      if (element) {
        element.hidden = !visible;
      }
    }

    function setText(element, value) {
      if (element) {
        element.textContent = value || "";
      }
    }

    function renderEmpty() {
      setText(fee052, "Выберите процедуру");
      setText(fee062, "Выберите процедуру");
      setText(note052, "Результат появится после выбора процедуры.");
      setText(note062, "Результат появится после выбора процедуры.");

      setVisible(salaryWrap, false);
      setVisible(smiInfo, false);
      setVisible(card062, true);
    }

    function updateCalculator() {
      const items = procedures[category.value] || [];
      const selected = items.find(
        (item) => item.value === detail.value
      );

      if (!selected) {
        renderEmpty();
        return;
      }

      const needsSalary = selected.fee062 === "salary-dependent";
      const needsSMIInfo =
        Boolean(selected.showSMIInfo) || needsSalary;

      setVisible(smiInfo, needsSMIInfo);
      setVisible(salaryWrap, needsSalary);

      let amount062 = selected.fee062;
      let salaryNote = "";

      if (needsSalary) {
        if (salary && salary.value === "below") {
          amount062 = FEES.workEmployedBelowSMI;
          salaryNote =
            " Тариф epígrafe 3.2.1.a: вознаграждение ниже 2 × SMI. Перед оплатой сверьте сумму с действующей формой.";
        } else if (salary && salary.value === "above") {
          amount062 = FEES.workEmployedAtLeastSMI;
          salaryNote =
            " Тариф epígrafe 3.2.1.b: вознаграждение равно 2 × SMI или выше. Перед оплатой сверьте сумму с действующей формой.";
        } else {
          amount062 = "Выберите размер вознаграждения";
        }
      }

      setText(
        fee052,
        selected.fee052 || "Нужно уточнить основание и сумму"
      );

      setText(
        fee062,
        amount062 || "Нужно уточнить основание и сумму"
      );

      setText(note052, selected.note052);
      setText(note062, selected.note062 + salaryNote);
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

      if (salary) {
        salary.value = "";
      }

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
    document.addEventListener(
      "DOMContentLoaded",
      initTasasCalculator
    );
  } else {
    initTasasCalculator();
  }
})();
