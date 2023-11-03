import request from "../config/apiRequest.js";
const promptService = (req,res,next) => {
    const role = req.body.role;
    const prompt = req.body.prompt;

    const frameData = {
        role,
        prompt
    }
    request(prompt);
    console.log(JSON.stringify(frameData));

    res.status(200).json(
        {
            prompt,
            frameData
        }
    )
}
export default promptService;