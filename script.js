 const input = document.getElementById("input");
const buttons = document.querySelectorAll(".button");
const historyContent = document.getElementById("historyContent");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "AC") {
      expression = "";
      input.value = "";
    }

    else if (value === "DEL") {
      expression = expression.slice(0, -1);
      input.value = expression;
    }

    else if (value === "=") {
      try {
        const result = eval(expression);

        historyContent.innerHTML += `
          <p>${expression} = ${result}</p>
        `;

        expression = result.toString();
        input.value = expression;
      } 
      catch {
        input.value = "Error";
        expression = "";
      }
    }

    else {
      expression += value;
      input.value = expression;
    }
  });
});