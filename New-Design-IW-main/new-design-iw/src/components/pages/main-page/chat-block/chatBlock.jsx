import React, { useState, useEffect, useRef } from 'react';
import './chatBlock.css';

function ChatBlock() {
  const initialUserMessage = { text: "Why should I choose Innovate Work?", sender: "user" };
  const [messages, setMessages] = useState([initialUserMessage]);
  const [typing, setTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef(null);
  const messageContainerRef = useRef(null); // New ref for observing message block visibility
  const isVisible = useRef(false);
  const hasMessageAnimationStarted = useRef(false); // To ensure messages start animating only once

  const botMessages = [
    <>
      We have honed our <span className="highlight">skills</span> in creating innovative and efficient digital solutions.
    </>,
    <>
      Our <span className="highlight">individual approach</span> ensures that each client’s unique needs are met.
    </>,
    <>
      We provide comprehensive <span className="highlight">support</span> from ideation to implementation and maintenance. Also, we use the <span className="highlight">latest technologies</span> to ensure the high quality of our products.
    </>
  ];

  useEffect(() => {
    createStars();

    const starsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.current = true;
            startAnimations();
          } else {
            isVisible.current = false;
            stopAnimations();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (chatContainerRef.current) {
      starsObserver.observe(chatContainerRef.current);
    }

    return () => {
      if (chatContainerRef.current) {
        starsObserver.unobserve(chatContainerRef.current);
      }
    };
  }, []);

  // New useEffect to observe when the message block becomes visible and starts the message animation
  useEffect(() => {
    const messageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasMessageAnimationStarted.current) {
            // Start message animation when the block is visible
            startMessageSequence();
            hasMessageAnimationStarted.current = true; // Ensure it only starts once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (messageContainerRef.current) {
      messageObserver.observe(messageContainerRef.current);
    }

    return () => {
      if (messageContainerRef.current) {
        messageObserver.unobserve(messageContainerRef.current);
      }
    };
  }, []);

  const startMessageSequence = () => {
    const showNextMessage = (index) => {
      if (index < botMessages.length) {
        setTyping(true);
        const typingTimeout = setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages, { text: botMessages[index], sender: 'bot' }
          ]);
          setTyping(false);
  
          if (index + 1 < botMessages.length) {
            showNextMessage(index + 1); // Show the next message with updated index
          }
        }, 2000); // Delay before showing each message
  
        return () => clearTimeout(typingTimeout);
      }
    };
  
    showNextMessage(0); // Start the message sequence with the first message (index 0)
  };

  const createStars = () => {
    const container = document.querySelector('.animated-chat-background');
    for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 30 + 10}s`;

      const directionX = Math.random() < 0.5 ? -1 : 1;
      const directionY = Math.random() < 0.5 ? -1 : 1;
      const distanceX = Math.random() * 100 + 50;
      const distanceY = Math.random() * 100 + 50;

      star.style.setProperty('--distance-x', `${directionX * distanceX}vw`);
      star.style.setProperty('--distance-y', `${directionY * distanceY}vh`);

      container.appendChild(star);
    }
  };

  const startAnimations = () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star) => {
      star.style.animationPlayState = 'running';
    });
  };

  const stopAnimations = () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star) => {
      star.style.animationPlayState = 'paused';
    });
  };

  return (
    <div className="container">
      <div className="chat-container" ref={chatContainerRef}>
        <div className="animated-chat-background">
          <div ref={messageContainerRef}> {/* This div is observed for message visibility */}
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender} ${msg.sender === 'bot' ? 'bot-enter' : ''}`}>
                <h6>{msg.text}</h6>
              </div>
            ))}
            {typing && (
              <div className="typing-indicator chat-message bot">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBlock;