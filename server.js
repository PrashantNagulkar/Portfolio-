// import { createServer } from 'http';
// import { readFile } from 'fs/promises';
// import { extname } from 'path';

// const server = createServer(async (req, res) => {
//     try {
//         let filePath = '.' + req.url;
//         if (filePath === './') {
//             filePath = './index.html';
//         }

//         const ext = extname(filePath);
//         let contentType = 'text/html';
        
//         switch (ext) {
//             case '.js':
//                 contentType = 'text/javascript';
//                 break;
//             case '.css':
//                 contentType = 'text/css';
//                 break;
//         }

//         const content = await readFile(filePath);
//         res.writeHead(200, { 'Content-Type': contentType });
//         res.end(content, 'utf-8');
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             res.writeHead(404);
//             res.end('File not found');
//         } else {
//             res.writeHead(500);
//             res.end('Server error: ' + error.code);
//         }
//     }
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });