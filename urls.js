const fs = require('fs');
const axios = require('axios');

// Read data from a URL and save HTML to a file
// Output filename is hostname of the URL
async function readUrlWrite(url, outPath) {
    try {
        const response = await axios.get(url);
        const data = response.data;

        fs.writeFile(outPath, data, 'utf8', (err, data) => {
            if (err) {
                throw err;
                // console.log(`${err}`);
            }
            console.log(`Successfully wrote to file ${outPath}`);
        })
    } catch(err) {
        console.log(`${err}`);
    }
}

// Reads contents of a file where each line is a URL
// Call readUrlWrite on each url
async function readFileWrite(file) {
    fs.readFile(file , 'utf8', (err, data) => {
        if (err) {
            console.log(`${err}`);
            process.exit(1);
        }

        let pathArr = data.split('\n');
        pathArr = pathArr.filter(ele => ele !== '');

        for (let path of pathArr) {
            const ind1 = path.indexOf('//');
            let fileName = path.slice(ind1 + 2)
            const ind2 = fileName.indexOf('/');
            fileName = ind2 !== -1 ? fileName.slice(0, ind2) : fileName;

            readUrlWrite(path, fileName);
        }
    })
}

readFileWrite(process.argv[2]);


