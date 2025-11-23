function sumArray(arr) {
  let total = 0;

  for (const n of arr) {
    if (!Number.isNaN(n)) {
      total += n;
    }
  }

  return total;
}

function longNames(names) {
  return names.filter(
    (name) => typeof name === "string" && name.length > 4
  );
}

function countWords(str) {
  const result = {};

  const text = str.trim().toLowerCase();
  if (text === "") return result;

  const words = text.split(/\s+/);

  for (const w of words) {
    if (result[w]) {
      result[w] += 1;
    } else {
      result[w] = 1;
    }
  }

  return result;
}

function printLine(text) {
  console.log(text);

  const output = document.getElementById("console-output");
  if (!output) return;

  const div = document.createElement("div");
  div.className = "mb-1 font-mono text-xs md:text-sm";
  div.textContent = text;

  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}




function runExamples() {


  printLine("Exercise 1");
  const nums = [5, 10, 15, 20];
  printLine("Input: " + JSON.stringify(nums));
  printLine("Result: " + sumArray(nums));

  printLine("=========");

  printLine("Exercise 2");
  const names = ["Ali", "Sara", "Omar", "Lina", "Mohammed", "Abdo"];
  printLine("Input: " + JSON.stringify(names));
  printLine("Result: " + JSON.stringify(longNames(names)));

  printLine("=====================");

  printLine("Exercise 3");
  const text = "hello   world   hello   JS   world   hello";

  printLine('Input: "' + text + '"');
  printLine("Result: " + JSON.stringify(countWords(text)));
}





document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("run-btn");
  if (btn) {
    btn.addEventListener("click", runExamples);
  }
});
