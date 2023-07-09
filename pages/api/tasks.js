import { MongoClient } from 'mongodb';

async function Tasks(req, res) {
    
    const client = await MongoClient.connect(
        'mongodb+srv://crud:crud123@web.gq8l24z.mongodb.net/?retryWrites=true&w=majority'
    );

    if (req.method === 'GET') {
        const db = client.db('core');

        const collections = db.collection('tasks');

        const tasks = await collections.find().toArray();
        
        res.status(200).json({ tasks });
    }

    client.close();
}

export default Tasks;