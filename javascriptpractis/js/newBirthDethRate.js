const readline = require('readline');
const fs = require('fs');
var header = [];
var jsonData = [];
var tempData = {};
var year, prvYear = 0,
    toalBirth=0, totalDeath=0;
var isHeader = true;

const rl = readline.createInterface({
    input: fs.createReadStream('Indicators.csv')
});
rl.on('line', function(line) {
    var lineRecords = line.trim().split(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);;
    if (isHeader) {
        for (var i = 0; i < lineRecords.length; i++) {
            li[i]
        }
        isHeader = false;
    } else {

        if (lineRecords.length == 6) {
            year = lineRecords[4];
        } else if (lineRecords.length == 7) {
            year = lineRecords[5];
        } else if (lineRecords.length == 8) {
            year = lineRecords[6];
        }

        if (lineRecords[0] == "India") {
            console.log(year + "," + lineRecords[0]+ "," + lineRecords[2] + "," + lineRecords[7]);

            if (lineRecords[2] == '"Birth rate') {
                console.log("birth");
                toalBirth = lineRecords[7];
            } else if (lineRecords[2] == '"Death rate') {
                console.log("Death");
                totalDeath = lineRecords[7];
            }

            if(toalBirth!=0 && totalDeath!=0)
            {
            tempData["year"] = year;
            tempData["Birth rate, crude (per 1,000 people)"] = toalBirth;
            tempData["Death rate, crude (per 1,000 people)"] = totalDeath;
            jsonData.push(tempData);
            tempData = {};
            totalDeath=0;
            toalBirth=0;
            fs.writeFileSync("bithDeath.json", JSON.stringify(jsonData), encoding = "utf8");

        	}	
        }
    }
});
