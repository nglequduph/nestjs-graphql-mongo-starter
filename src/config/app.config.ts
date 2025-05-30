import { join } from 'path';

export const AppConfig = {
    port: process.env.PORT || 3000,
    graphqlUpload: {
        maxFileSize: 10000000,
        maxFiles: 10,
    },
    staticFiles: {
        uploadsPath: join(__dirname, '..', '..', 'uploads'),
    },
    cors: true,
    bodyParser: true,
}; 