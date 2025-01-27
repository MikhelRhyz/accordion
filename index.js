var questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const collapseTargetId = question.getAttribute("href"); // e.g., "#faq1"
  const collapseTarget = document.querySelector(collapseTargetId);

  question.addEventListener("click", () => {
    const plusIcon = question.querySelector(".plus-sign");
    const minusIcon = question.querySelector(".minus-sign");
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    // Close all other questions
    questions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        const otherPlusIcon = otherQuestion.querySelector(".plus-sign");
        const otherMinusIcon = otherQuestion.querySelector(".minus-sign");
        const otherCollapseTargetId = otherQuestion.getAttribute("href");
        const otherCollapseTarget = document.querySelector(otherCollapseTargetId);

        otherPlusIcon.style.display = "block";
        otherMinusIcon.style.display = "none";
        otherQuestion.setAttribute("aria-expanded", "false");

        if (otherCollapseTarget && otherCollapseTarget.classList.contains("show")) {
          otherCollapseTarget.classList.remove("show");
        }
      }
    });

    // Toggle current question icons and aria-expanded
    if (isExpanded) {
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
      question.setAttribute("aria-expanded", "false");
    } else {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
      question.setAttribute("aria-expanded", "true");
    }
  });

  // Listen for collapse events to keep icons in sync
  collapseTarget.addEventListener("hidden.bs.collapse", () => {
    const plusIcon = question.querySelector(".plus-sign");
    const minusIcon = question.querySelector(".minus-sign");

    plusIcon.style.display = "block";
    minusIcon.style.display = "none";
    question.setAttribute("aria-expanded", "false");
  });

  collapseTarget.addEventListener("shown.bs.collapse", () => {
    const plusIcon = question.querySelector(".plus-sign");
    const minusIcon = question.querySelector(".minus-sign");

    plusIcon.style.display = "none";
    minusIcon.style.display = "block";
    question.setAttribute("aria-expanded", "true");
  });
});

const collapses = document.querySelectorAll('.collapse');

collapses.forEach((collapse) => {
  collapse.addEventListener('show.bs.collapse', () => {
    collapse.style.height = `${collapse.scrollHeight}px`;
    collapse.style.transition = 'height 0.3s ease, opacity 0.3s ease';
  });

  collapse.addEventListener('hide.bs.collapse', () => {
    collapse.style.height = '0';
  });
});
