// Home.js
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="chatbot-container">
            <ChatBot
                headerTitle="SciAstra Chatbot"
                recognitionEnable={true}
                steps={[
                    {
                        id: '1',
                        message: 'Hi there! Welcome to SciAstra. How can we assist you today?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Great! What specific information are you looking for about SciAstra?',
                        trigger: '4',
                    },
                    {
                        id: '4',
                        user: true,
                        trigger: '5',
                    },
                    {
                        id: '5',
                        message: 'Awesome! Whether it\'s about our products, services, or any other aspect, feel free to ask.',
                        trigger: '6',
                    },
                    {
                        id: '6',
                        user: true,
                        trigger: '7',
                    },
                    {
                        id: '7',
                        message: 'Is there a particular SciAstra product or service you would like to learn more about?',
                        trigger: '8',
                    },
                    {
                        id: '8',
                        user: true,
                        trigger: '9',
                    },
                    {
                        id: '9',
                        message: 'Sure, we have a range of products/services. What specific details are you interested in?',
                        trigger: '10',
                    },
                    {
                        id: '10',
                        user: true,
                        trigger: '11',
                    },
                    {
                        id: '11',
                        message: 'Thanks for sharing. If you have more questions or need assistance, feel free to ask!',
                        end: true,
                    },
                ]}
            />
        </div>
    );
};

export default Home;
