const seen = {};

function fact(num) {
    if (num === 0 || num === 1) return 1;

    if (seen[num]) return seen[num];

    seen[num] = num * fact(num - 1);
    return seen[num];
}

// First run: will compute and cache
console.time("First Run");
console.log(fact(100));  // Should compute
console.timeEnd("First Run");

// Second run: should be instant due to memoization
console.time("Second Run");
console.log(fact(100));  // Should be cached
console.timeEnd("Second Run");

// Run 1000 times to test performance and stability
for (let i = 0; i < 1000; i++) {
    fact(100); // Repeated cached calls
}
