import request from "../config/apiRequest.js";
const promptService = async (req, res, next) => {
    const role = req.body.role;
    const prompt = req.body.prompt;

    const frameData = {
        role,
        prompt
    }
    const answer = await request(prompt);
    if (answer) {
        res.status(200).json(
            {
                prompt: frameData,
                response: answer
            }
        )
    }
    else
        res.status(400).json(
            {
                prompt: frameData,
                response: `No valid response`
            }

        )
}
export default promptService;