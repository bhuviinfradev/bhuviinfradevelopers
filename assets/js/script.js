const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
let typingTimer; // Timer for detecting user inactivity
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
};

const generateResponse = (chatElement) => {
  const messageElement = chatElement.querySelector("p");

  // Map of project names to their descriptions
  const projects = {
    "yuva park": "Open plots near NRSC & Shadnagar.",
    magadha: "Open plots near Maisigandi Temple, Kadthal.",
    "karthikeya green county":
      "Open plots beside Bangalore Highway, Jadcherla.",
    "akshita golden breez - iv": "Open plots in Maheswaram.",
    "akshita golden breez - v": "Open plots in Maheswaram.",
    "pbr-township":
      "Open plots near Bangalore Highway, Near Shadnagar, Rajapur.",
    "oxy-flora": "Farm lands near Pharma City, Nednur.",
    elysia: "Apartments near Narsing, Gachibowli.",
    "gnr's vasavi nirvana": "Apartments in Attapur.",
    skyler: "Apartments from Miyapur to Bachupally 200 Feet Road Facing.",
    padmavathi: "4 BHK Ultra Premium Villas in Padmavathi Nagar Bonguluru.",
  };

  // Get the user message and convert it to lowercase for case-insensitive matching
  const userMessageLowerCase = userMessage.trim().toLowerCase();

  // Check if the user message matches any predefined responses
  if (PREDEFINED_RESPONSES.hasOwnProperty(userMessageLowerCase)) {
    messageElement.textContent = PREDEFINED_RESPONSES[userMessageLowerCase];
  } else if (projects.hasOwnProperty(userMessageLowerCase)) {
    // Check if the user message matches any project names
    messageElement.textContent = projects[userMessageLowerCase];
  } else if (
    userMessageLowerCase.includes("contact") ||
    userMessageLowerCase.includes("phone") ||
    userMessageLowerCase.includes("email")
  ) {
    // If user asks about contact information, provide the contact details
    messageElement.textContent =
      "You can contact us via phone at [9959354255 /9177566455] or email at [info@aarnainfradevelopers.com].";
  } else {
    // Use alternate default response if no match is found
    messageElement.textContent =
      DEFAULT_RESPONSE[Math.floor(Math.random() * DEFAULT_RESPONSE.length)];
  }
  chatbox.scrollTo(0, chatbox.scrollHeight);
};

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);

  // Reset the typing timer
  clearTimeout(typingTimer);
  // Start the timer again after user sends a message
  typingTimer = setTimeout(displaySomethingAfterDelay, 10000);
};

const displaySomethingAfterDelay = () => {
  // Check if the chatbot popup is open
  if (document.body.classList.contains("show-chatbot")) {
    const messages = [
      "What can I do for you?",
      "How may I assist you today?",
      "Is there anything I can help you with?",
      "Do you have any questions?",
      "Need assistance with something?",
      "How can I be of service?",
      "What brings you here today?",
      // Add more messages here
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    const incomingChatLi = createChatLi(message, "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }
};

// Call the function to display something after a delay
displaySomethingAfterDelay();

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
  // Clear the typing timer and start again for each input
  clearTimeout(typingTimer);
  typingTimer = setTimeout(displaySomethingAfterDelay, 10000);
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);

const DEFAULT_RESPONSE = [
  "Please try again.",
  "I didn't get that. Try again?",
  "Can you repeat that?",
  "Not sure I understand. Try again?",
  "Sorry, can you rephrase?",
  "Try something else?",
  "Oops! Try again?",
  "I'm not sure. Try again?",
  "Sorry, I didn't catch that.",
  "Can you try again?",
];

// Predefined responses
const PREDEFINED_RESPONSES = {
  hi: "Hello!",
  hello: "Hi there!",
  "how are you?": "I'm a digital assistant, thanks for asking!",
  thanks: "You're welcome!",
  bye: "Goodbye! Feel free to ask if you have any more questions.",
  "what's up?": "Not much, just here to help!",
  "good morning": "Good morning!",
  "good afternoon": "Good afternoon!",
  "good evening": "Good evening!",
  "nice to meet you": "Nice to meet you too!",
  "how can I help you?": "You can ask me anything about our ongoing projects.",
  "tell me about your projects":
    "Sure! We have ongoing projects ranging from open plots to apartments and villas. Which project are you interested in?",
  "can I get more information?":
    "Of course! Just let me know which project you want to know more about.",
  "what is your working hours?":
    "We're available to chat 24/7! Feel free to reach out anytime.",
  "do you offer financing options?":
    "Yes, we offer financing options for qualified buyers. Please let us know if you'd like more information.",
  "how do I contact you?":
    "You can contact us via phone at [9959354255 /9177566455] or email at [info@aarnainfradevelopers.com].",
  "where are you located?": "We are located at [insert address].",
  "do you have any special offers?":
    "Yes, we often have special offers available. Please ask us for details!",
  "what amenities do your properties offer?":
    "Our properties offer a range of amenities including parks, swimming pools, gyms, and more. Would you like more details about a specific property?",
  // Add more predefined responses here
};
