const fs = require ("fs")

let obj =  {
    title: "calculadora",
    price: 2000,
    thumbnail: "img.pgn"

};

let obj2 =  {
    title: "calculadora",
    price: 2000,
    thumbnail: "img.pgn"
}

const processFiles = (filename) => {
    fs.writeFileSync(filename, JSON.stringify([]))
    let  fileInformation =  JSON.parse(fs.readFileSync(filename, "utf-8"))
    obj = {...obj, id: 1 };
    fileInformation.push(obj1);
    fs.writeFileSync(filename, JSON.stringify(fileInformation));
    fileInformation =  JSON.parse(fs.readFileSync(filename, "utf-8"))
    console.log(fileInformation)
    const id = fileInformation.map(file => file.id+1) [0]
    obj2 = {...obj2,id:id };
    fileInformation.push(obj2)
    fs.writeFileSync(filename, JSON.stringify(fileInformation));
};

//fs.writeFileSync(filename, obj)
processFiles("fileInformation.txt");