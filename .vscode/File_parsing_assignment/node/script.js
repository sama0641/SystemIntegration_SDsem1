// Parse txt files
import { open } from 'node:fs/promises';

//let txtFile = fs.readFileSync('my_birds.txt', 'utf8').toString().split("\r");
async function myFileReader() {
    const file = await open('my_birds.txt');

    for await (const line of file.readLines()) {
        console.log(line);
    }
}
myFileReader();



// Parse yaml files
import yaml from 'js-yaml';

try {
    let data = yaml.load(fs.readFileSync('my_birds.yaml', 'utf8'));
    console.log(data);
} catch (e) {
    console.log(e);
}



// Parse json files
import fs from 'fs';

console.log(JSON.parse(fs.readFileSync('my_birds.json', 'utf8')));

    

// Parse xml files
import xml2js from 'xml2js';

let parser = new xml2js.Parser();
fs.readFile('my_birds.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log(result);
    });
});



// Parse csv files
import csv from 'csvtojson';

csv().fromFile('my_birds.csv').then((jsonObj)=>{
    console.log(jsonObj[0]);
});