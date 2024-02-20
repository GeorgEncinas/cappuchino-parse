// @ts-check
if (process.argv.length < 3) {
  console.log("no parameters found");
  process.exit(1);
}

const fs = require("fs");
var request = require("request");
const { timer, firstValueFrom } = require("rxjs");
const join = require("path").join;

const gestion = process.argv[2];
const path = join(__dirname, "data", "FCyT", gestion);
var options = {
  method: "GET",
  url: "https://sheets.googleapis.com/v4/spreadsheets/1gkKFc0K-Nzq7dYOeZWP06ujeLFOU9OokVN5iWLXpCPk?includeGridData=true&ranges=A6%3AD24&key=AIzaSyCDzTUMkLmSh1-kOx5TPMkVO76Dp8u7loA",
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
      const urlFiltered = urls.filter((v, i, a) => a.indexOf(v) === i);
      resolve(urlFiltered);
    });
  })
    .then((urls) => {
      const downloadUrls = [];
      return new Promise((resolve, reject) => {
        urls.forEach((url) => {
          const regex = /[\w-]{33}/;
          const id = regex.exec(url);
          if (id) {
            const downloadUrl = `https://drive.google.com/uc?id=${id}&export=download`;
            downloadUrls.push(downloadUrl);
          }
        });
        resolve(downloadUrls);
      });
    })
    .then(async (downloadUrls) => {
      console.log(downloadUrls);
      const downloaded = [];
      const getResponse = async (downloadUrl, folder) => {
        if (!folder) {
          throw new Error("required dest folder download");
        }
        return new Promise((resolve, reject) => {
          const req = request({
            method: "GET",
            url: downloadUrl,
            headers: {},
          });
          req.on("error", (err) => {
            reject(err);
          });
          req.on("response", (response) => {
            let filename;
            const disposition = response.headers["content-disposition"];
            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            var matches = filenameRegex.exec(disposition);
            if (matches != null && matches[1]) {
              filename = matches[1].replace(/['"]/g, "");
              const fullPatch = join(folder, filename);
              const writeStream = fs.createWriteStream(fullPatch);
              response.pipe(writeStream);
              writeStream.on("error", (err) => {
                reject(err);
              });
              writeStream.on("finish", function () {
                console.log(`Saved file '${filename}' in ${folder}`);
                resolve(filename);
              });
            }
          });
        });
      };

      for (const downloadUrl of downloadUrls) {
        const timeOut = 2000;
        console.log(`Wait for ${timeOut}`);
        await firstValueFrom(timer(timeOut));

        console.log(`try download from ${downloadUrl}`);
        const response = await getResponse(downloadUrl, path);

        downloaded.push(response);
      }

      return downloaded;
    });
};

retrieve();
