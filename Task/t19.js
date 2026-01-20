const fs = require("fs");
const path = require("path");

const command = process.argv[2];

function readFile(file) {
    if (!fs.existsSync(file)) {
        console.log("File not found!");
        return;
    }
    const data = fs.readFileSync(file, "utf8");
    console.log(data);
}

function writeFile(file, content) {
    fs.writeFileSync(file, content);
    console.log("File written successfully!");
}

function copyFile(source, destination) {
    if (!fs.existsSync(source)) {
        console.log("Source file not found!");
        return;
    }
    fs.copyFileSync(source, destination);
    console.log("File copied successfully!");
}

function deleteFile(file) {
    if (!fs.existsSync(file)) {
        console.log("File not found!");
        return;
    }
    fs.unlinkSync(file);
    console.log("File deleted successfully!");
}

function listDirectory(dir = ".") {
    if (!fs.existsSync(dir)) {
        console.log("Directory not found!");
        return;
    }
    const files = fs.readdirSync(dir);
    files.forEach(file => console.log(file));
}

function showHelp() {
    console.log(`
Usage:
 node fileManager.js read <filename>
 node fileManager.js write <filename> "<content>"
 node fileManager.js copy <source> <destination>
 node fileManager.js delete <filename>
 node fileManager.js list [directory]
`);
}

// No command provided
if (!command) {
    showHelp();
    process.exit();
}

// Command handling
switch (command) {
    case "read":
        readFile(process.argv[3]);
        break;

    case "write":
        writeFile(process.argv[3], process.argv[4]);
        break;

    case "copy":
        copyFile(process.argv[3], process.argv[4]);
        break;

    case "delete":
        deleteFile(process.argv[3]);
        break;

    case "list":
        listDirectory(process.argv[3]);
        break;

    default:
        showHelp();
}
