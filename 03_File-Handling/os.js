const os = require("os");

console.log("=== OS Module Info ===");

// System info
console.log("Hostname:", os.hostname());
console.log("Platform:", os.platform()); // win32, linux, darwin
console.log("Architecture:", os.arch()); // x64, arm
console.log("OS Type:", os.type()); // Windows_NT, Linux, Darwin
console.log("OS Release:", os.release());
console.log("Uptime (seconds):", os.uptime());
console.log("Uptime (hours):", (os.uptime() / 3600).toFixed(2));

// User info
console.log("User Info:", os.userInfo());
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());

// Memory info
console.log("Total Memory (bytes):", os.totalmem());
console.log("Total Memory (MB):", (os.totalmem() / 1024 / 1024).toFixed(2));
console.log("Free Memory (bytes):", os.freemem());
console.log("Free Memory (MB):", (os.freemem() / 1024 / 1024).toFixed(2));

// CPU info
console.log("CPU Info:", os.cpus());
console.log("Number of CPU Cores:", os.cpus().length);
console.log("CPU Load Average:", os.loadavg()); // 1, 5, 15 min (Unix only)

// Network info
console.log("Network Interfaces:", os.networkInterfaces());

// Endianness
console.log("Endianness:", os.endianness()); // 'BE' or 'LE'

// Priority (current process)
console.log("Process Priority:", os.getPriority(process.pid));

// Constants
console.log("OS Constants:", os.constants);
