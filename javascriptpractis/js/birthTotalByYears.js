const readline = require('readline');
const fs = require('fs');
var header = [];
var jsonData = {};
var tempData={};
var finalData=[];
var toalBirth = 0,
    i = 0;
var isHeader = true;

const rl = readline.createInterface({
    input: fs.createReadStream('../csv/Indicators.csv')
});
rl.on('line', function(line) {
    var lineRecords = line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);;
    if (isHeader) {
        // for (var i = 0; i < lineRecords.length; i++) {
        //     header[i] = lineRecords[i];

        // }
        header = lineRecords;
        isHeader = false;
    } else {
        i++;
        if (lineRecords[header.indexOf("IndicatorName")] == '"Life expectancy at birth, total (years)"') {
            if (jsonData[lineRecords[header.indexOf("CountryName")]]) {
                jsonData[lineRecords[header.indexOf("CountryName")]] +=
                 parseFloat(lineRecords[header.indexOf("Value")]);

            } else {
                jsonData[lineRecords[header.indexOf("CountryName")]] =
                    parseFloat(lineRecords[header.indexOf("Value")]);

            }
        }
        console.log(i);
    }


    // fs.writeFileSync("../json/bithTotal.json", JSON.stringify(jsonData), encoding = "utf8");

}).on('close', function() {
   forEach(var key in jsonData) {
         tempData["CountryName"] = key;
         tempData["Life expectancy at birth, total (years)"] =Object.values(jsonData[i]);
        finalData.push(tempData);
          tempData = {};
    fs.writeFileSync("../json/bithTotalByYear.json", JSON.stringify(finalData), encoding = "utf8");
        
    }

    process.exit(0);
});
