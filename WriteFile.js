const fs = require('fs');

const setData = (data) => 
{
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Write Successful")
    }
  });
}

module.exports = setData;