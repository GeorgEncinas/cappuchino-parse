if (process.argv.length < 3) {
  console.log("no parameters found");
  process.exit(1);
 }


  const { google } = require('googleapis');
  const axios = require('axios').default;
  const fs = require("fs");
  var request = require("request");
  const join = require("path").join;
  const promisify = require("util").promisify;
  const writeFileAsync = promisify(fs.writeFile);
  const requestAsync = promisify((callback: (err: any, result: any) => void) => {
      return request(option, )
  });
  const gestion = process.argv[2];
  const path = join(__dirname, "data", "FCyT", gestion);
  var options = {
    method: "GET",
    url: "https://sheets.googleapis.com/v4/spreadsheets/1V2ZpuUI_laRO4NkBaAqyCx1uMbYdu1y0YWCFt70fumY?includeGridData=true&ranges=A6%3AD24&key=AIzaSyBRbzQTTT_izNqu8FvGdx8APKv9AxQWMDg",
    headers: {
      Accept: "application/json",
    },
  };
  
  const retrieve = () => {
    new Promise((resolve, reject) => {
      request(options, function (error, response) {
        if (error) reject(new Error(error));
        const body = JSON.parse(response.body);
        var _a;
        const urls = [];
        (_a = body.sheets) === null || _a === void 0
          ? void 0
          : _a.forEach((sheet) => {
              var _a;
              (_a = sheet.data) === null || _a === void 0
                ? void 0
                : _a.forEach((singleData) => {
                    var _a;
                    (_a = singleData.rowData) === null || _a === void 0
                      ? void 0
                      : _a.forEach((row) => {
                          var _a;
                          (_a = row.values) === null || _a === void 0
                            ? void 0
                            : _a.forEach((value) => {
                                var _a, _b, _c;
                                const uri =
                                  (_c =
                                    (_b =
                                      (_a =
                                        value === null || value === void 0
                                          ? void 0
                                          : value.userEnteredFormat) === null ||
                                      _a === void 0
                                        ? void 0
                                        : _a.textFormat) === null || _b === void 0
                                      ? void 0
                                      : _b.link) === null || _c === void 0
                                    ? void 0
                                    : _c.uri;
                                if (uri) {
                                  urls.push(uri);
                                }
                              });
                        });
                  });
            });
        console.log(urls);
        resolve(urls);
      });
    })
      .then((urls) => {
        const downloadUrls = [];
        return new Promise((resolve, reject) => {
          urls.forEach((url) => {
            const regex = /[\w]{32}/;
            const id = regex.exec(url);
            if (id) {
              // const downloadUrl = `https://drive.google.com/uc?export=download&id=${id}`;
              const downloadUrl = `https://drive.google.com/uc?id=${id}&export=download`;
              // https://drive.google.com/uc?id=1oNTURvyPhE2BYVSDa6ohWGNOJFY2iAvd&export=download
              // const downloadUrl = `https://drive.google.com/uc?export=download&confirm=1o_3&id=${id}`;
              // const downloadUrl = `https://docs.google.com/feeds/download/documents/export/Export?id=${id}`;
              // https://docs.google.com/feeds/download/documents/export/Export?id=<fileID>
              downloadUrls.push(downloadUrl);
            }
          });
          
          resolve(downloadUrls);
        });
      })
      .then((downloadUrls) => {
        console.log(downloadUrls);
        return new Promise(async (resolve, reject) => {
          downloadUrls.forEach((downloadUrl) => {
          // for (const downloadUrl of downloadUrls) {
  
            // try {
            //   const response = await axios.get(downloadUrl);
    
            //   console.log(response.status);
            //   console.log(response.headers);
            //   console.log(response.data);
              
            // } catch (error) {
            //   console.error(error);
            // }
  
            request(downloadUrl, (err, response) => {
              if (err) {
                console.error(err);
                return;
              }
              if (response.statusCode !== 200) {
                console.log(`${response.statusCode } for ${downloadUrl}`)
                return
              }
              let filename;
              let stream;
              const disposition = response.headers["content-disposition"];
              var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
              var matches = filenameRegex.exec(disposition);
              if (matches != null && matches[1]) {
                filename = matches[1].replace(/['"]/g, "");
                // stream = fs.createWriteStream(filename)
                console.log(response, filename);
                // writeFileAsync(response.)
              }
            }); //.pipe(fs.createWriteStream(filename || "test.pdf"));
          });
          // }
  
          resolve(downloadUrls);
        });
      });
  
    // const fs = require("fs");
  
    // const id = "1uL_l83K25v1Q3dABT76kPOu00m05La-I";
    // const testUrl = `https://drive.google.com/uc?export=download&id=${id}`;
  
    // function getFromUrl(url) {
    //   var filename = "";
    //   const writeStream = request(testUrl, (err, response) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     const disposition = response.headers["content-disposition"];
    //     var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    //     var matches = filenameRegex.exec(disposition);
    //     if (matches != null && matches[1]) {
    //       filename = matches[1].replace(/['"]/g, "");
    //     }
    //   }).pipe(fs.createWriteStream(filename || "test.pdf"));
    // }
  
    // 'content-disposition': 'attachment;filename="411702.pdf";filename*=UTF-8\'\'411702.pdf'
  };
  
  retrieve();
  