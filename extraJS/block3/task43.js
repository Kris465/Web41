function calculateExpressions(A, B) {
    console.log(`A = ${A}, B = ${B}`);
  
    const a = !(A && B);
    console.log(`  a) не (А и В): ${a}`);
  
    const b = !A || B;
    console.log(`  b) не А или В: ${b}`);
  
    const c = A || !B;
    console.log(`  c) А или не В: ${c}`);
  
    console.log("---");
  }
  
  function getBooleanInput(prompt) {
    while (true) {
      const input = prompt(prompt + " (true/false): ").toLowerCase();
      if (input === "true") {
        return true;
      } else if (input === "false") {
        return false;
      } else {
        console.log("Неверный ввод. Пожалуйста, введите 'true' или 'false'.");
      }
    }
  }
  

  const A = getBooleanInput("Введите значение A");
  const B = getBooleanInput("Введите значение B");
  
  calculateExpressions(A, B);