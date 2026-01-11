const story = {

  // ACTION 1
  start: {
    text: "You receive a direct message from a user who says they recognise you from the platform.",
    choices: [
      { text: "Reply politely", next: "user_1" },
      { text: "Ignore the message", next: "safe_end" }
    ]
  },

  // ACTION 2
  user_1: {
    text: "The user responds warmly and asks a few personal questions.",
    choices: [
      { text: "Answer casually", next: "platform_1" },
      { text: "Avoid personal details", next: "user_2" }
    ]
  },

  // ACTION 3
  platform_1: {
    text: "The platform sends a notification asking you to verify your account due to unusual activity.",
    choices: [
      { text: "Click the link immediately", next: "impersonated_1" },
      { text: "Check the sender carefully", next: "platform_2" }
    ]
  },

  // ACTION 4
  user_2: {
    text: "The user insists they just want to be friends and suggests moving to another app.",
    choices: [
      { text: "Agree to move platforms", next: "platform_3" },
      { text: "Decline and stay here", next: "user_3" }
    ]
  },

  // ACTION 5
  platform_2: {
    text: "You notice the link looks suspicious and does not match the official site.",
    choices: [
      { text: "Report the notification", next: "user_3" },
      { text: "Ignore it and continue chatting", next: "impersonated_1" }
    ]
  },

  // ACTION 6
  user_3: {
    text: "Another user messages you, asking why you sent them a strange link earlier.",
    choices: [
      { text: "Investigate immediately", next: "platform_4" },
      { text: "Assume it's a mistake", next: "impersonated_1" }
    ]
  },

  // ACTION 7
  platform_3: {
    text: "You receive a password reset email you did not request.",
    choices: [
      { text: "Reset password using the email", next: "impersonation_1" },
      { text: "Access settings manually", next: "platform_4" }
    ]
  },

  // ACTION 8
  impersonated_1: {
    text: "Multiple users report suspicious messages sent from your account.",
    choices: [
      { text: "Secure your account now", next: "platform_4" },
      { text: "Log out and hope it stops", next: "impersonated_end" }
    ]
  },

  // ACTION 9
  platform_4: {
    text: "The platform asks you to confirm your identity to recover your account.",
    choices: [
      { text: "Provide verification carefully", next: "final_check" },
      { text: "Skip verification", next: "impersonated_end" }
    ]
  },

  // ACTION 10
  final_check: {
    text: "Before submitting, you review all account activity one last time.",
    choices: [
      { text: "Confirm and secure account", next: "safe_end" },
      { text: "Rush and submit", next: "impersonation_end" }
    ]
  },

  // ENDINGS
  impersonation_end: {
    text: "Your account is compromised. Someone impersonates you and sends harmful messages in your name.",
    choices: []
  },

  impersonated_end: {
    text: "Your identity is misused, and your credibility on the platform is permanently damaged.",
    choices: []
  },

  safe_end: {
    text: "You successfully protect your identity and avoid malicious impersonation.",
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
  currentScene = story[currentScene].choices[choiceIndex].next;
  renderScene();
}

renderScene();
