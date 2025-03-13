function calculateLogicalExpressions() {
    const possibleValues = [true, false];
  
    for (const A of possibleValues) {
      for (const B of possibleValues) {
        console.log(`A = ${A}, B = ${B}`);
  
        const a = (!A && !B) || A;
        console.log(`  a) (!A && !B) || A: ${a}`);

        const b = B || (!A && !B);
        console.log(`  b) B || (!A && !B): ${b}`);

        const c = B && !(A && !B);
        console.log(`  c) B && !(A && !B): ${c}`);
  
        console.log("---");
      }
    }
  }
  
  calculateLogicalExpressions();