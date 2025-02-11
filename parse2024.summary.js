if (process.argv.length < 3) {
    console.log('no parameters found');
    process.exit(1);
}

const gestion=process.argv[2],
    path='data/FCyT/'+gestion;

const file=require('file'),
    fs=require('fs');

file.walk(path,(error,base,dirs,files)=>{
    if(error){
        throw error;
    }

    const result=[];

    files
    .filter((file)=>{
        return file.endsWith('.json');
    })
    .forEach((file)=>{
        const json=require('./'+file);

        result.push({
            code:json.code,
            name:json.name,
            madeIn:json.madeIn,
            semester:json.semester,
            support:'@willypaz243'
        });
    });

    fs.writeFile(
        path+'.json',
        JSON.stringify(result,null,4),
        (error)=>{
            if(error){
                throw error;
            }

            console.log('  > summary saved');
        }
    );
});

