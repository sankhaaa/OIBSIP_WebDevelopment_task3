document.getElementById("convertBtn").addEventListener("click", function () {
    const tempInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultDiv = document.getElementById("result");
  
    if (isNaN(tempInput) || tempInput.trim() === "") {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
  
    const temp = parseFloat(tempInput);
    let resultText = "";
  
    if (unit === "C") {
      const f = (temp * 9) / 5 + 32;
      const k = temp + 273.15;
      resultText = `${temp} °C = ${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    } else if (unit === "F") {
      const c = ((temp - 32) * 5) / 9;
      const k = c + 273.15;
      resultText = `${temp} °F = ${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    } else if (unit === "K") {
      const c = temp - 273.15;
      const f = (c * 9) / 5 + 32;
      resultText = `${temp} K = ${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }
  
    resultDiv.textContent = resultText;
  });
  