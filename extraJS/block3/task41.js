function calculateExpressions(x, y) {
    console.log(`x = ${x}, y = ${y}`);
  
    const a = (Math.pow(x, 2) + Math.pow(y, 2) > 4);
    console.log(`a: x^2 + y^2 > 4: ${a}`);
  
    const b = (x != 0) || (Math.pow(y, 2) < 4);
    console.log(`b: (x != 0) || (y^2 < 4): ${b}`);
  
    const c = (x != 0) && (Math.pow(y, 2) < 4);
    console.log(`c: (x != 0) && (y^2 < 4): ${c}`);
  
    const d = (x * y != 0) && (y > x);
    console.log(`d: (x * y != 0) && (y > x): ${d}`);
  
    const e = (x * y != 0) || (y < x);
    console.log(`e: (x * y != 0) || (y < x): ${e}`);
  
    const f = (!(x * y < 0)) && (y > x);
    console.log(`f: (!(x * y < 0)) && (y > x): ${f}`);
  
    const g = (!(x * y < 0)) || (y > x);
    console.log(`g: (!(x * y < 0)) || (y > x): ${g}`);
  }
  

  calculateExpressions(1, 1);
  calculateExpressions(1, 2);
  calculateExpressions(2, 1);