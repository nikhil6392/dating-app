import express from 'express'
import Cards from './dbCards.js'

import Cors from 'cors'
 
const app = express()

//MiddleWare
app.use(express.json())
app.use(Cors())


//API Endpoints
app.get("/",(req,res) => res.status(200).send("Hello Developer"))

app.post('/dating/cards', async (req, res) => {
    const dbCard = req.body;

    try {
        const card = await Cards.create(dbCard); // Assuming Cards is a Mongoose model
        res.status(201).json({ success: true, data: card });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get('/dating/cards', async (req, res) => {
    try {
        const cards = await Cards.find();
        res.status(200).json({ success: true, data: cards });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export default app