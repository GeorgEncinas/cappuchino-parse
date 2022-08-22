if (process.argv.length < 3) {
  console.log("no parameters found");
  process.exit(1);
}

const { Chromeless } = require("chromeless");

const join = require("path").join;
const fs = require("fs");
const { timer } = require("rxjs");

var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const exec = require("child_process").exec;
const promisify = require("util").promisify;
const execAsync = promisify(exec);
function execAsyncTask(command, options = {}) {
  return __awaiter(this, void 0, void 0, function* () {
    return execAsync(command, options);
  });
}

const fileNames = [
  "409701.pdf",
  "399501.pdf",
  "320902.pdf",
  "299701.pdf",
  "650001.pdf",
  "429701.pdf",
  "760101.pdf",
  "359201.pdf",
  "309801.pdf",
  "134111.pdf",
  "114071.pdf",
  "439801.pdf",
  "349701.pdf",
  "319801.pdf",
  "339701.pdf",
  "389701.pdf",
  "419701.pdf",
  "411702.pdf",
  //   "329201.pdf",
];
execAsyncTask(`strings "Horarios 1-2022 - Hoja 1.pdf" | grep https`)
  .then((result) => {
    var _a;
    const lines =
      (_a = result.stdout) === null || _a === void 0 ? void 0 : _a.split("\n");
    const pattern = /[\w\d]{33}/gm;
    const ids = [];
    lines === null || lines === void 0
      ? void 0
      : lines.forEach((url) => {
          const regexArray = pattern.exec(url);
          const id =
            regexArray === null || regexArray === void 0
              ? void 0
              : regexArray[0];
          id && ids.push(id);
        });
    return ids;
  })
  .then((ids) => {
    // const chromeless = new Chromeless();
    ids.forEach((id, i) => {
      const gestion = process.argv[2];
      const path = join(__dirname, "data", "FCyT", gestion);

      fs.mkdir(path, { recursive: true }, (error) => {
        const command = `wget "https://drive.google.com/uc?export=download&id=${id}" -O ${path}/${fileNames[i]}`;

        // execAsyncTask(command);


        // console.log(id);

        // const urlDownload = `https://drive.google.com/uc?export=download&id=${id}`;

        // const chrome = async () => {
        //   try {
        //     const screenshot = await chromeless
        //       .goto(urlDownload)
        //       .wait(3000)
        //       .screenshot();

        //     console.log('>>>>>>>>>>', urlDownload); // prints local file path or S3 url

        //     await chromeless.end();
        //   } catch (error) {}
        // };

        // chrome().then(() => {
        //   timer(2000).subscribe(() => {
        //     execAsyncTask(
        //       `find /home/georg/Downloads/. -name "??????.pdf" -exec mv -i {} -t ${path} \;`
        //     );
        //   });
        // });
      });
    });
  });
