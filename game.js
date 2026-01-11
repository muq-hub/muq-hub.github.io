const story = {
  start: {
    text: "You receive a direct message from a user who says they recognise you from the platform.",
    choices: [
      { text: "Reply politely", next: "user_chat_1" },
      { text: "Ignore the message", next: "safe_end" }
    ]
  },

  user_chat_1: {
    text: "They reply quickly and suggest continuing the conversation elsewhere.",
    choices: [
      { text: "Agree to move platforms", next: "platform_alert_1" },
      { text: "Ask why they want to move", next: "user_chat_2" }
    ]
  },

  platform_alert_1: {
    text: "The platform notifies you of unusual activity and asks you to update your security details.",
    choices: [
      { text: "Click the link immediately", next: "impersonation_end" },
      { text: "Check the sender and URL", next: "platform_alert_2" }
    ]
  },

  user_chat_2: {
    text: "The user avoids answering directly and continues the conversation casually.",
    choices: [
      { text: "Continue chatting", next: "impersonated_warning" },
      { text: "Stop responding", next: "safe_end" }
    ]
  },

  platform_alert_2: {
    text: "You realise the notification is fake and secure your account through official settings.",
    choices: [
      { text: "Continue", next: "safe_end" }
    ]
  },

  impersonated_warning: {
    text: "Another user messages you asking why you sent them a strange link.",
    choices: [
      { text: "Investigate immediately", next: "impersonated_end" },
      { text: "Dismiss it", next: "impersonated_end" }
    ]
  },

  impersonation_end: {
    text: "Your account is compromised. Messages are sent pretending to be you.",
    choices: []
  },

  impersonated_end: {
    text: "Your identity is misused, and your credibility on the platform is damaged.",
    choices: []
  },

  safe_end: {
    text: "You avoid malicious actors and successfully protect your digital identity.",
    choices: []
  }
};

let currentScene = "start";

function renderScene() {
  const scene = story[currentScene];

  document.getElementById("scene-text").innerText = scene.text;

  const buttons = document.querySelectorAll(".choice-btn");

  if (scene.choices.length === 0) {
    buttons.forEach(btn => btn.style.display = "none");
    return;
  }

  buttons.forEach((btn, index) => {
    if (scene.choices[index]) {
      btn.innerText = scene.choices[index].text;
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
}

function makeChoice(choiceIndex) {
  const scene = story[currentScene];
  currentScene = scene.choices[choiceIndex].next;
  renderScene();
}

renderScene();
