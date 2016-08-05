const readline = require('readline');
const fs = require('fs');
var header = [];
var jsonData = [];
var tempData = {};
var year, prvYear = 0,toalFemale=0, totalMale=0;
var isHeader = true;
var asianCountries = ["Afghanistan", "Armenia", "Azerbaijan", "Bangladesh",
    "Bhutan", "Cambodia", "China", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel",
    "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives",
    "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Qatar", "Russia", "Saudi Arabia",
    "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand",
    "Philippines", "United Arab Emirates", "Turkmenistan", "Uzbekistan", "Vietnam", "Yemen",
    "Europe & Central Asia (all income levels)",
    "South Asia", "East Asia & Pacific (all income levels)"
];
const rl = readline.createInterface({
    input: fs.createReadStream('../csv/Indicators.csv')
});
rl.on('line', function(line) {
    var lineRecords = line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);;
    if (isHeader) {
         for (var i = 0; i < lineRecords.length; i++) {
            header[i] = lineRecords[i];
        }
        isHeader = false;
    } else {

          index = header.indexOf("Year");
        year=lineRecords[index];
      

        if (year == prvYear || prvYear == 0) {
            if (asianCountries.indexOf(lineRecords[header.indexOf("CountryName")]) != -1) {
                if (lineRecords[header.indexOf("IndicatorName")] == '"Life expectancy at birth, female (years)"') {
                    toalFemale = toalFemale + parseFloat( lineRecords[header.indexOf("Value")]);
                    console.log("total female"+ toalFemale);
                } else if (lineRecords[header.indexOf("IndicatorName")] == '"Life expectancy at birth, male (years)"') {
                    totalMale = totalMale + parseFloat(lineRecords[header.indexOf("Value")]);
                    console.log("total male"+ totalMale);
                }
                 console.log(lineRecords[header.indexOf("CountryName")]+","+lineRecords[header.indexOf("IndicatorName")]+","+
              lineRecords[header.indexOf("Value")] );
        
                prvYear = year;
            }
            
        } else {
                console.log("Data Inserted");
            tempData["year"] = prvYear;
            tempData["LifeExpectancyAtBirthMale"] = toalFemale;
            tempData["LifeExpectancyAtBirthFemale"] = totalMale;
            jsonData.push(tempData);
            tempData = {};
            fs.writeFileSync("../json/lifeExpectancy.json", JSON.stringify(jsonData), encoding = "utf8");
            prvYear=0;

        }

    }

});
