let history = [];

function updateHistory() {
  const historyContainer = document.getElementById("history");
  historyContainer.innerHTML = history.join("<br>");
}

function clean() {
  document.form.textarea.value = "";
}

function back() {
  const currentText = document.form.textarea.value;
  document.form.textarea.value = currentText.slice(0, -1);
}

function insert(value) {
  document.form.textarea.value += value;
}

function equal() {
  const currentText = document.form.textarea.value;
  if (currentText.trim() !== "") {
    try {
      const result = eval(currentText);
      history.push(`${currentText} = ${result}`);
      updateHistory();
      clean();
    } catch (error) {
      alert("Invalid expression");
    }
  }
}
