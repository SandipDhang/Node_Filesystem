// var for yargs
var userInput = process.stdin;
// encoding for yargs input
userInput.setEncoding('utf-8');

//var for fs
var fs = require('fs');

// var to add data through lodash
var concat = require('lodash.concat');

// blank array of filenames 
var array = [];


// Ask user to input the name
console.log('Enter the file name');

// event on getting a name
userInput.on('data',function(data){

    //Check weather the file is present or not
    // to delete \r\n from the filename use substr
    fs.exists(data.substr(0, data.indexOf("\r\n"))+'.txt',function(exists){
        if(exists){
            // if name already present ask for a diff name
            console.log('Filename already in use. Provide a different file name');
        }else{
            //if not then create the file
            fs.appendFile(data.substr(0, data.indexOf("\r\n"))+'.txt',"You are awesome",function(err){
                if(err) throw err;
                console.log('file created');
                array = concat(array,data.substr(0, data.indexOf("\r\n")));
                console.log(array);

                //add the file name into a specific file
                fs.appendFile('filenames.txt',data,function(err){
                    if(err) throw err;
                })
            });
        }
    })
    
});






    








