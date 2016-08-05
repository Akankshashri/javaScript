var str = '232323,2332,a,323323, b, c, "d, e, f", g, h, "i"';
var array = str.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
// (/('[^"]+'|[^,]+)/g  
// /("[^"]*")|[^,]+/g                  it is giving undifine  , undefine ,....
// /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g       not spliting by any comma
// /".*"|[^,"\s]+/                     it is giving only commas
for (var i = 0; i < array.length; i++) {
 	 console.log(array[i]+"\n");
 } 
               