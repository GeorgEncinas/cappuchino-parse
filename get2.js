if(process.argv.length<3){
    console.log('no parameters found');
    process.exit(1);
}

const request=require('request')
  , fs=require('fs')
  , join=require('path').join
  , url='http://www.fcyt.umss.edu.bo/horarios/'
  , gestion=process.argv[2]
  // , path=join(__dirname,'..','data','FCyT',gestion)
  , today = new Date().toLocaleString()
  , path=join(__dirname,'data','FCyT',gestion)
  , path_body=join(__dirname,'body')
  , regex=/<a href="(.*)">(.*\.pdf)<\/a>/g
  , regexp = />(\d* .*)<\/f.*\r*\n*.*href="(.*)">(.*.pdf).*\r*\n*.*>(\d+:\d+) ((\d+)-(\d+)-(\d+))</gu
  , get=()=>{
        console.log('request fcyt index ...');
        request(url,(error,response,body)=>{
            if(error){
                throw error;
            }

            console.log('parsing fcyt index ...');
            if(response.statusCode==200){
                console.log(body.length)
                var buffer=new Array()
                , result
                // console.log(buffer);
                while((result=regexp.exec(body))!==null){
                    // if (parseInt(result[7])>=8)  ** revisar que paso aqui!!
                    buffer.push({
                        curriculum: result[1] 
                        , url:result[2]
                        , name:result[3]
                        , time:result[4]
                        , date: {
                            day: result[6],
                            month: result[7],
                            year: result[8]
                        },
                    });
                }
                console.log(buffer, !buffer.length? 'no found pdf': '');
                console.log("downloading fcyt index");
                if (buffer.length>0){
                    res = {
                        madeIn:"SCESI UMSS",
                        semester:gestion,
                        date: today,
                        support:"@georg",
                        index: buffer
                    }
                    // fs.writeFileSync(join(path_body,'index.json'),JSON.stringify(res,null,4));
                    // try {
                        fs.appendFileSync(join(path_body,'index.json'),JSON.stringify(res,null,4));
                    // } catch (err) {
                    //     fs.writeFileSync(join(path_body,'index.json'),JSON.stringify(res,null,4));
                    // }
                }
                
                buffer.forEach((element)=>{
                    console.log('saved: '+element.name);
                        request(element.url).pipe(
                            fs.createWriteStream(join(path,element.name)));
                });
            }
        });
    }

fs.stat(path,(error,stats)=>{
    fs.stat(path_body,(error,stats)=>{
        if (error) fs.mkdir(path, { recursive: true }, (error)=>{

        })
    })
    if(error){
        console.log('::::::::::error:', {path} ,{error})
        fs.mkdir(path, { recursive: true }, (error)=>{
            if (error ) console.log(';;;;;error mkdir:', {error})
            get();
        });
    }else{
        get();
    }
});

