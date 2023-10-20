# PaLM Conversation Toolkit

## Overview

The PaLM Conversation Toolkit is a Node.js library that simplifies interaction with the Generative Language models from Google AI. It wraps around the DiscussServiceClient to provide a more convenient and easier way to generate replies in a conversational context.

## Installation

Before using the PaLM Conversation Toolkit, make sure to install the necessary dependencies.
```bash
npm install palm-conversation-toolkit @google-ai/generativelanguage google-auth-library dotenv
```

## Setup

First, create a `.env` file in your root directory and add your API key.

```env
PALM_API_KEY=your_api_key_here
```

## Usage

To get started with the PaLM Conversation Toolkit, import it into your main file:

```javascript
const conversationToolkit = require("./palm-conversation-toolkit");
```

Here is an example of how to initialize and use the toolkit:

```javascript
const myConversation = new conversationToolkit(client, modelDetails, context, examples);

myConversation.generateReply("What are some cowboy movies?")
    .then(reply => console.log(reply))
    .catch(err => console.log(err));
```

### Parameters

- `client`: An instance of `DiscussServiceClient` from Google AI.
- `modelDetails`: An object containing the details of the model you want to use. 
  - `model`: The model name (e.g., "models/chat-bison-001")
  - `temperature`: Model randomness
  - `candidateCount`: Number of candidates to consider
  - `top_k`: Top K sampling value
  - `top_p`: Top P sampling value
- `context`: A string that sets the context for the conversation.
- `examples`: An array of example objects that include both an "input" and an "output" field. These examples provide context to guide the model's responses.

### Methods

#### `generateReply(inputMessage: string) -> Promise<string>`

Generates a reply for the given input message.

- `inputMessage`: The user's message that you want the model to respond to.

### Error Handling

The method will return `null` and print an error message to the console if an exception occurs.

## Example

For a full example, refer to the `index.js` file in the repository.

## License

This project is licensed under the MIT License.