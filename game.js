const story = {

  //ACTIONS

  start: {
    text: "You receive a direct message from a user who says they recognise you from the platform.",
    avatar: "agarta.png",
    entity: "user",
    choices: [
      { text: "Read message", next: "agarta_1" },
    ]
  },

  agarta_1: {
    text: "Hey! It's you. Haven't we seen each other around before?",
    avatar: "agarta.png",
    entity: "user",
    choices: [
      { text: "Reply politely", next: "agarta_2" },
      { text: "Ignore the message", next: "platform_1" }
    ]
  },

  agarta_2: {
    text: "So, what's going on recently? I heard you're in school now. Where do you study at?",
    avatar: "agarta.png",
    entity: "user",
    choices: [
      { text: "Answer casually, there's no harm in sharing information with new friends.", next: "fishy_1" },
      { text: "Avoid personal details", next: "agarta_3" }
    ]
  },

  fishy_1: {
    text: "Oh you're from X School? I heard they have an event but I need a student's help to access the website. Could you check this link for me?",
    avatar: "agarta.png",
    entity: "user",
    choices: [
      { text: "Click on the link", next: "fishy_2" },
      { text: "Block him and move on", next: "platform_1" }
    ]
  },

  fishy_2: {
    text: "The link leads you to a website with insecure connection. Random pop-ups appear and you are logged out of your account suddenly.",
    avatar: "agarta.png",
    entity: "user",
    choices: [
      { text: "What's going on?", next: "hacked_end" },
    ]
  },

  platform_1: {
    text: "Owa sends a notification asking you to verify your account due to unusual activity.",
    entity: "platform",
    choices: [
      { text: "Click the link immediately", next: "impersonated_1" },
      { text: "Check the sender carefully", next: "platform_2" }
    ]
  },

  agarta_3: {
    text: "Ahhh, don't worry. I just wanna know you better! Let's move this conversation to Not-Evil Texting App Co.",
    avatar: "agarta.png",
    entity: "user",
    choices: [
      { text: "Agree to move platforms", next: "evil_1" },
      { text: "Decline and stay here", next: "platform_1" }
    ]
  },

  platform_2: {
    text: "You notice the link looks suspicious and does not match the official site.",
    choices: [
      { text: "Report the notification", next: "bakery_1" },
      { text: "Ignore it and click anyways", next: "goat_1" }
    ]
  },

  goat_1: {
    text: "Another user messages you.",
    avatar: "goat.png",
    entity: "user",
    choices: [
      { text: "You seem popular today, check their message", next: "goat_2" }
    ]
  },

  goat_2: {
    text: "Hey. You sent me a couple of random links just now. What's going on?",
    avatar: "goat.png",
    entity: "user",
    choices: [
      { text: "Investigate immediately", next: "recovery_1" },
      { text: "Assume it's a mistake and tell them so", next: "goat_3" }
    ]
  },

  goat_3: {
    text: "Here's proof!",
    avatar: "goat.png",
    entity: "user",
    choices: [
      { text: "Report your own account", next: "recovery_1" },
      { text: "Report this user's account", next: "hacked_end" }
    ]
  },

  recovery_1: {
    text: "You safely recover your account.",
    choices: [
      { text: "You pat yourself on the back and move on", next: "bakery_1" },
    ]
  },

  evil_1: {
    text: "On the new app, you receive a password reset email you did not request.",
    entity: "platform",
    avatar: "not evil.jpg",
    choices: [
      { text: "Reset password using the email", next: "impersonated_1" },
      { text: "Access settings manually", next: "evil_2" }
    ]
  },

  impersonated_1: {
    text: "Multiple users report suspicious messages sent from your account.",
    entity: "platform",
    choices: [
      { text: "Log out and report the app.", next: "bakery_1" },
      { text: "Ignore them and hope it stops, you didn't do anything wrong anyways.", next: "impersonated_end" }
    ]
  },

  impersonated_2: {
    text: "As you return to log on to Owa, you realise you cannot access your account.",
    entity: "platform",
    choices: [
      { text: "Report the account as stolen.", next: "sad_end" },
      { text: "Make a new account, its no big deal.", next: "impersonated_end" }
    ]
  },

  evil_2: {
    text: "The app asks you to confirm your identity to recover your account. However, you did not provide this information during the intial onboarding process.",
    entity: "platform",
    avatar: "not evil.jpg",
    choices: [
      { text: "Provide verification and surrender information", next: "evil_3" },
      { text: "Leave app and return to Owa", next: "platform_1" }
    ]
  },

  evil_3: {
    text: "A pop-up appears and requests for a free subscription to their app to proceed, but require your credit card details to first.",
    entity: "user",
    avatar: "not evil.jpg",
    choices: [
      { text: "Close app and report for suspicious activity", next: "platform_1" },
      { text: "Rush and submit", next: "hacked_end" }
    ]
  },

  bakery_1: {
    text: "You see a confectionary shop on the platform advertising their cakes. You wish to buy some, so you reach out to them as indicated in their bio.",
    entity: "user",
    avatar: "bakery.jpg",
    choices: [
      { text: "Start messaging the Purple Bakery", next: "bakery_2" },
    ]
  },

  bakery_2: {
    text: "Sure! Before we can begin with you order, please click on this link here to pay.",
    entity: "user",
    avatar: "bakery.jpg",
    choices: [
      { text: "Click on the link and provide your bank details", next: "bakery_4"},
      { text: "The platform has its own secured payment service, you ask why they use their own", next: "bakery_3"}
    ]
  },

  bakery_3: {
    text: "Oh... Owa takes a huge cut from us if we use their service. Plus, its faster this way.",
    entity: "user",
    avatar: "bakery.jpg",
    choices: [
      { text: "Fair reasoning, to support them, you use their link instead", next: "bakery_4"},
      { text: "This seems fishy to you, you back away from this transaction", next: "safe_endc"}
    ]
  },

  bakery_4: {
    text: "The link looks shoddy and sketchy, but you've already committed to this. And you're hungry",
    entity: "user",
    avatar: "bakery.jpg",
    choices: [
      { text: "Provide your details", next: "hacked_end"},
      { text: "Provide your details and look forward to your cake arriving", next: "hacked_end"}
    ]
  },

  // ENDINGS

  impersonated_end: {
    text: "Your account is compromised. Someone impersonates you and sends harmful messages in your name.",
    avatar: "imper.jpg",
    choices: [
      { text: "Restart journey", next: "start"}
    ]
  },

  hacked_end: {
    text: "Your account has been hacked by malicious parties and misused. Your account's credibility online is sadly damaged.",
    avatar: "hacked.jpg",
    choices: [
      { text: "Restart journey", next: "start"}
    ]
  },

  sad_end: {
    text: "Your account has been impersonated and you do not know what is happening under your name online. You are very sad",
    avatar: "lain.png",
    choices: [
      { text: "Restart journey", next: "start"}
    ]
  },

  safe_end: {
    text: "You successfully avoided malicious impersonation, protected your identity and information online.",
    avatar: "safe.jpg",
    choices: [
      { text: "Try other paths", next: "start"}
    ]
  },

  safe_endc: {
    text: "You successfully avoided malicious impersonation, protected your identity and information online. But unfortunately no cakes.",
    avatar: "safe.jpg",
    choices: [
      { text: "Try other paths", next: "start"}
    ]
  }

};

let currentScene = "start";

function renderScene() {
  const scene = story[currentScene];

  const notificationCard = document.querySelector(".notification-card");

  notificationCard.classList.remove("animate-user", "animate-platform");
  void notificationCard.offsetWidth;
  
  if (scene.entity === "platform") {
    notificationCard.classList.add("animate-platform");
  } else {
    notificationCard.classList.add("animate-user");
  }

  document.getElementById("scene-text").innerText = scene.text;

  const profileImage = document.getElementById("profile-image");

  if(scene.avatar) {
    profileImage.src = scene.avatar;
  } else {
    profileImage.src = "default.png";
  }

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
