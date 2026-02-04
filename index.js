let logs = "";

logs += "🚀 Starting the console app...\n";
logs += "Hello, world!\n";
logs += "This is a simple JS console application running without any inputs.\n";

let num = Math.ceil(Math.random() * 40);
// gggyg
logs += `${num} * ${num} = ${num * num}\n`;

logs += `Table of ${num}\n`;
for (let i = 1; i < 11; i++) {
    logs += `${num} * ${i} = ${num * i}\n`;
}

logs += "✅ Program finished successfully.\n";

console.log(logs);
