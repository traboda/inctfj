import getResponse from './widgets/NLP';

class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   updateChatbotState(botMessage) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
   }

   handleQuestions = (questions) => {
    const message = this.createChatBotMessage("Check the following questions", {withAvatar: true, widget: "Questions"});

    this.updateChatbotState(message);
    this.setState((prev) => ({
      ...prev,
      questions: questions,
    }))
   }

   handleInCTF = () => {
     const messages = [
       "CTFs (Abbreviation for Capture The Flag) are a type of computer security competition.",
       "Contestants are presented with a set of challenges which test their creativity, technical (and googling) skills, and problem-solving ability."
     ]

     messages.forEach(message => 
      (this.updateChatbotState(this.createChatBotMessage(message, {withAvatar: true,}))));
   }

   handlePlay = () => {
     const message = this.createChatBotMessage("Unfortunately, yes. You will need to have a laptop or a PC in-order to participate in InCTF.",
     {
       withAvatar: true,
     })
     this.updateChatbotState(message);
   }

   handleWin = () => {
     const message = this.createChatBotMessage("Students finishing at top of the CTF leaderboard will be awarded with exciting goodies and prizes.", { withAvatar: true,})
     this.updateChatbotState(message);
   }

   handleDefault = (message) => {
      const res = getResponse(message).then((response) => {
        const message = this.createChatBotMessage(response.answer,
        {withAvatar: true,});
        this.updateChatbotState(message);
      });
    }

   handleContact = () => {
    const social = this.createChatBotMessage("You can contact us through the following means", 
    {
      widget: "Social"
    })
    this.updateChatbotState(social);
   }

   greet() {
     const botMessage = this.createChatBotMessage('Hi friend');
     this.updateChatbotState(botMessage);
   }
 }
 
 export default ActionProvider;
