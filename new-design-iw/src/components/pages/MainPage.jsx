import HelloPage from './main-page/main-block/hello.jsx';
import Services from './main-page/services-block/services.jsx';
import TextBlock from './main-page/textBlock/textBlock.jsx';
import AppBlock from './main-page/app-block/appBlock.jsx';
import WebBlock from './main-page/web-block/webBlock.jsx';
import ChatBlock from './main-page/chat-block/chatBlock.jsx';
import ProjectSteps from './main-page/steps-block/stepBlock.jsx';
import ContactForm from './main-page/form-block/formBlock.jsx';


const MainPage = () => {
    return (
      <div className="App">
                <HelloPage />
                <TextBlock />
                <Services />
                <AppBlock />
                <WebBlock />
                <ChatBlock />
                <ProjectSteps />
                < ContactForm />
      </div>
    );
  }
  
  export default MainPage