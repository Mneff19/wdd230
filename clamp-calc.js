const remVal = 10;

const clampsToCalc = [
    {
        viewportMin: 744,
        viewportMax: 1248,
        vals: [
            { min: 4.31, max: 233.35 }
        ]
    }
]

for (let clampToCalc in clampsToCalc) {
    for (let valPair in clampsToCalc[clampToCalc].vals) {
        console.log(`clamp(${clampsToCalc[clampToCalc].vals[valPair].min / remVal}rem, ${(100 * (clampsToCalc[clampToCalc].vals[valPair].max - clampsToCalc[clampToCalc].vals[valPair].min)) / (clampsToCalc[clampToCalc].viewportMax - clampsToCalc[clampToCalc].viewportMin)}vw + ${(((clampsToCalc[clampToCalc].viewportMin * clampsToCalc[clampToCalc].vals[valPair].max) - (clampsToCalc[clampToCalc].viewportMax * clampsToCalc[clampToCalc].vals[valPair].min)) / (clampsToCalc[clampToCalc].viewportMin - clampsToCalc[clampToCalc].viewportMax)) / remVal}rem, ${clampsToCalc[clampToCalc].vals[valPair].max / remVal}rem); //Between ${clampsToCalc[clampToCalc].viewportMin}px and ${clampsToCalc[clampToCalc].viewportMax}px`);
    }
}