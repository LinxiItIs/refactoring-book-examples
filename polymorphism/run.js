import fs from 'fs';
import { statement, htmlStatement } from './statement.js';

// 读取 JSON 文件
const invoices = JSON.parse(fs.readFileSync('invoices.json', 'utf8'));
const plays = JSON.parse(fs.readFileSync('plays.json', 'utf8'));

// 假设我们只处理第一个发票
const firstInvoice = invoices[0];

console.log("Plain text statement:");
console.log(statement(firstInvoice, plays));

console.log("\nHTML statement:");
console.log(htmlStatement(firstInvoice, plays));