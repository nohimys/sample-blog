import {NextApiRequest, NextApiResponse} from "next";
import {saveContactMessage} from "@/helpers/mongodb-connector";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
        const responseObject  = await saveContactMessage(newMessage)

        res
            .status(201)
            .json(responseObject);
    }
    else{
        res.status(400)
            .json({message: 'Unsupported Rest Method'});
    }
}
export default handler;