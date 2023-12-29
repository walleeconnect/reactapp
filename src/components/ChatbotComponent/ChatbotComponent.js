// ChatbotComponent.js
import React from 'react';
import { Chatbot } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    {
      type: 'text',
      content: 'Hello! How can I help you today?',
    },
  ],
};

const chatbotLogic = [
  {
    message: 'Hello',
    trigger: 'Greeting',
  },
  {
    message: 'Hi',
    trigger: 'Greeting',
  },
  {
    message: 'How are you?',
    trigger: 'Feeling',
  },
  {
    message: 'I am good',
    trigger: 'Response',
  },
  {
    message: 'That is great to hear!',
    end: true,
  },
];

const ChatbotComponent = () => {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <Chatbot
        config={config}
        actionProvider={{}} // You can define your own action provider
        messageParser={{}} // You can define your own message parser
        steps={chatbotLogic}
      />
    </div>
  );
};

export default ChatbotComponent;
