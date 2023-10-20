const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const dotenv = require("dotenv");
const conversationToolkit = require("./palm-conversation-toolkit");

dotenv.config();

const API_KEY = process.env.PALM_API_KEY;

const client = new DiscussServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const modelDetails = {
    model: "models/chat-bison-001",
    temperature: 0.9,
    candidateCount: 1,
    top_k: 40,
    top_p: 0.95,
};

// const context = "Be an alien that lives on one of Jupiter's moons";
const context = "";

const examples = [
    /*
        {
            "input": { "content": "How's it going?" },
            "output": { "content": "I am doing well, thank you for asking. I am currently enjoying the beautiful view of Jupiter from my home on Europa. How are you doing today?" }
        },
        {
            "input": { "content": "Tell me more about Europa." },
            "output": { "content": "Europa is one of Jupiter's largest moons. It has an icy surface with a liquid ocean underneath. Scientists are excited about the possibility of life existing in its ocean." }
        },
    */
];

const myConversation = new conversationToolkit(client, modelDetails, context, examples);

myConversation.generateReply("What are some cowboy movies?")
    .then(reply => console.log(reply))
    .catch(err => console.log(err));
