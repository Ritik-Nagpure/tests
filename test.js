console.log("Starting Jenkins job...");

// Example: run some logic
function runTests() {
    const tests = [
        { name: "Addition works", result: 2 + 2 === 4 },
        { name: "String includes", result: "jenkins".includes("jen") },
    ];

    tests.forEach(test => {
        if (test.result) {
            console.log(`✅ PASS: ${test.name}`);
        } else {
            console.error(`❌ FAIL: ${test.name}`);
            process.exitCode = 1; // mark failure for Jenkins
        }
    });
}

runTests();

console.log("Jenkins job finished.");