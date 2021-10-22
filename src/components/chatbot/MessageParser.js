import faq from '../../data/faq'
import { supabase } from '../../utils/supabaseClient';

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {

      // Function to log question asked by user in supabase.
      const questionAsked = async () => {
        if(message.length !== 0) {
          const { data, error } = await supabase
          .from('Questions')
          .insert([
            { Questions: message },
          ], { returning: "minimal" })

          if(error) console.log(error);
        }
      }

      const lowerCaseMessage = message.toLowerCase();
      const questions = [];
      const matches = [];

      const res = (q) => {
        const question = new Object();
        question.question = q.question.toLowerCase();
        question.keywords = q.keywords;
        question.response = q.response;

        questions.push(question);
      }

      const keywordMatch = (keywords) => {
        for(let i=0;i<keywords.length;i++){
          if(lowerCaseMessage.includes(keywords[i])) {
            return 1;
          }
        }
        return 0;
      }

      faq.forEach(q => res(q));

      for(let i=0;i<questions.length;i++) {
        if(keywordMatch(questions[i].keywords)) {
          matches.push(questions[i]);
        }
      }

      if(matches.length !== 0) {
        this.actionProvider.handleQuestions(matches);
      } else if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.handleContact();
      } else {
        this.actionProvider.handleDefault();
      }

      // Log the message after submitting response to user.
      questionAsked();
    }
  }
  
export default MessageParser;
