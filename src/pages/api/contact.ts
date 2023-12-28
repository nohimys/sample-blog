import {NextApiRequest, NextApiResponse} from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST'){
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        console.log(`Message Came: ${JSON.stringify(newMessage)}`);

        res
            .status(201)
            .json(newMessage);
    }
    else{
        res.status(400)
            .json({message: 'Unsupported Rest Method'});
    }
}
export default handler;