const fs = require('fs');
const os = require('os');

function getIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if ('IPv4' !== iface.family || iface.internal) {
        continue;
      }
      return iface.address;
    }
  }
}

function appendIpToFile(filePath) {
  const ipAddress = getIpAddress();
  if (ipAddress) {
    fs.appendFile(filePath, `${ipAddress}\n`, (err) => {
      if (err) {
        console.error('Error appending IP address to file:', err);
      } else {
        console.log('IP address appended to file successfully.');
      }
    });
  } else {
    console.log('Could not determine IP address.');
  }
}

const filePath = 'ip_addresses.txt';
appendIpToFile(filePath);