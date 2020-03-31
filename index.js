const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
    'use strict';
    const fs = require('fs');
    let rawdata = fs.readFileSync('downloaded.json');
    let student = JSON.parse(rawdata);
    console.log(student[0]);
}

main().catch(e => console.error(e))