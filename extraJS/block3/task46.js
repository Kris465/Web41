function calculateLogicalExpressions() {
    const possibleValues = [true, false];

    for (const X of possibleValues) {
        for (const Y of possibleValues) {
            console.log(`X = ${X}, Y = ${Y}`);

            // а) не X и не Y
            const a = !X && !Y;
            console.log(`  a) не X и не Y: ${a}`);

            // б) X или (не X и Y)
            const b = X || (!X && Y);
            console.log(`  b) X или (не X и Y): ${b}`);

            // в) (не X и Y) или Y
            const c = (!X && Y) || Y;
            console.log(`  c) (не X и Y) или Y: ${c}`);

            console.log("---");
        }
    }
}

calculateLogicalExpressions();