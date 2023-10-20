class palmConversationToolkit {
    constructor(client, modelDetails, context, examples) {
        this.client = client;
        this.modelDetails = modelDetails;
        this.context = context;
        this.examples = examples;
        this.messages = [];
    }

    async generateReply(inputMessage) {
        this.messages.push({ content: inputMessage });

        try {
            const result = await this.client.generateMessage({
                ...this.modelDetails,
                prompt: {
                    context: this.context,
                    examples: this.examples,
                    messages: this.messages,
                },
            });
            return result[0]?.candidates[0]?.content || 'No content found';
        } catch (error) {
            console.error('Error generating message:', error);
            return null;
        }
    }
}

module.exports = palmConversationToolkit;