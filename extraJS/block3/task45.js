function calculateExpressions() {
    const possibleValues = [true, false];

    for (const A of possibleValues) {
        for (const B of possibleValues) {
            console.log(`A = ${A}, B = ${B}`);

            const a = !A || !B;
            console.log(`  a) не А или не В: ${a}`);

            const b = A && (A || !B);
            console.log(`  b) А и (А или не В): ${b}`);

            const c = (!A || B) && B;
            console.log(`  c) (не А или В) и В: ${c}`);

            console.log("---");
        }
    }
}

calculateExpressions();