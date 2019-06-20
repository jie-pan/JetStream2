
const defaultIterationCount = 120;
const defaultWorstCaseCount = 4;

function assert(b, m = "") {
    if (!b)
        throw new Error("Bad assertion: " + m);
}

function mean(values) {
    assert(values instanceof Array);
    let sum = 0;
    for (let x of values)
        sum += x;
    return sum / values.length;
}

function geomean(values) {
    assert(values instanceof Array);
    let product = 1;
    for (let x of values)
        product *= x;
    return product ** (1 / values.length);
}


function copyArray(a) {
    let result = [];
    for (let x of a)
        result.push(x);
    return result;
}
function toScore(timeValue) {
    return 5000 / timeValue;
}

function toTimeValue(score) {
    return 5000 / score;
}

function score(firstIteration, worst4, average) {
    return geomean([firstIteration, worst4, average]);
}

function processResults(results) {
    results = copyArray(results);

    let firstIteration = toScore(results[0]);

    results = results.slice(1);
    results.sort((a, b) => a < b ? 1 : -1);
    for (let i = 0; i + 1 < results.length; ++i)
        assert(results[i] >= results[i + 1]);

    let worstCase = [];
    for (let i = 0; i < defaultWorstCaseCount; ++i)
        worstCase.push(results[i]);
    let worst4 = toScore(mean(worstCase));
    let average = toScore(mean(results));
    let finalscore = score(firstIteration, worst4, average);
    console.log("first", firstIteration);
    console.log("worst4", worst4);
    console.log("avarage", average);
    console.log("score", finalscore);
}



