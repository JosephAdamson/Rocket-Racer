// how to import dotenv whilst using envalid
import 'dotenv/config';
import app from './app';
import connectDB from './db/connect';
import env from './util/validateEvn';

const PORT = env.PORT || 5000;

// soft launch make sure everything is working
const start = async () => {
    try {
        await connectDB(env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Express server listening on port ${PORT}`);
        })
    } catch (error) {
        console.error(error);
    }
}

start();