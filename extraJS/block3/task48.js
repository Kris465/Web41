function calculateLogicalExpressions() {
    const possibleValues = [true, false];
  
    for (const X of possibleValues) {
      for (const Y of possibleValues) {
        console.log(`X = ${X}, Y = ${Y}`);
  

        const a = !(X && !Y) || X;
        console.log(`  a) !(X && !Y) || X: ${a}`);

        const b = (Y && !X) || !Y;
        console.log(`  b) (Y && !X) || !Y: ${b}`);
  
        const c = (!Y && !X) || Y;
        console.log(`  c) (!Y && !X) || Y: ${c}`);
  
        console.log("---");
      }
    }
  }
  
  calculateLogicalExpressions();