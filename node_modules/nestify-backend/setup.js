const fs = require("fs");
const path = require("path");

// Define the directory structure and files
const structure = [
    'backend/controllers',
    'backend/Data_parser',
    'backend/DataBase',
    'backend/DataBase/Schema',
    'backend/middlewares',
    'backend/routers'
];

function readFile(name){
    const data = fs.readFileSync(`txt_files/${name}.txt`,"utf-8");
    return data;
}


const files = [
    {
        path: 'backend/controllers/controller.js',
        content: `${readFile("controller")}`
    },
    {
        path: 'backend/Data_parser/data_parser.js',
        content: `${readFile("data_parser")}`
    },
    {
        path: 'backend/DataBase/database.js',
        content: `${readFile("database")}`
    },
    {
        path: 'backend/DataBase/Schema/userschema.js',
        content:`${readFile("userdatabase")}`
    },
    {
        path: 'backend/middlewares/middleware.js',
        content: `${readFile("middleware")}`
    },
    {
        path: 'backend/routers/router.js',
        content: `${readFile("router")}`
    },
    {
        path: 'backend/routers/user.js',
        content: `${readFile("user")}`
    },
    {
        path: 'backend/index.js',
        content: `${readFile("index")}`
    },
    {
        path: 'backend/.env',
        content: `PORT = 3000 \nMONGODB_URI = "mongodb://localhost:27017/"\n JWT_KEY = "Thanku for Installing" `
    },
    {
        path: 'backend/package.json',
        content: `${readFile("json")}`
    },
    {
        path: 'backend/ReadMe',
        content: `${readFile("readme")}`
    },
    {
        path: 'backend/.gitignore',
        content: `${readFile("gitignore")}`
    }

];



const projectRoot = path.resolve(__dirname, '../..');

// Create directories
structure.forEach(directory => {
    const directoryPath = path.join(projectRoot, directory);
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }
});

// Create files
files.forEach((file) => {
  const filePath = path.join(projectRoot, file.path);
  fs.writeFileSync(filePath, file.content);
});
