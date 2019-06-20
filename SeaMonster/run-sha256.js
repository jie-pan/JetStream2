
load("common.js");
load("sjlc.js");
load("stanford-crypto-sha256.js");


let __benchmark = new Benchmark(defaultIterationCount);
let results = [];
for (let i = 0; i < defaultIterationCount; i++) {
    if (__benchmark.prepareForNextIteration)
        __benchmark.prepareForNextIteration();

    let start = Date.now();
    __benchmark.runIteration();
    let end = Date.now();

    results.push(Math.max(1, end - start));
}

if (__benchmark.validate)
    __benchmark.validate();
//top.currentResolve(results);
processResults(results);
