function calculateLogicalExpressions() {
    const possibleValues = [true, false];
  
    for (const X of possibleValues) {
      for (const Y of possibleValues) {
        console.log(`X = ${X}, Y = ${Y}`);
  
        const a = !(X || Y);
        console.log(`  a) не (X или Y): ${a}`);
  
        const b = !X && Y;
        console.log(`  b) не X и Y: ${b}`);
  
        const c = X && !Y;
        console.log(`  c) X и не Y: ${c}`);
  
        console.log("---");
      }
    }
  }
  
  calculateLogicalExpressions();