import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Button1 from "./Button1.jsx"
import Student from "./Student/Student.jsx"
import UserGreeting from "./UserGreeting.jsx"

function App() {

    return(
      <>
        {/* <Header/>
        <Footer/>
        <Food/> */}
        {/* <Card/> */}
        <Button/>
        <Button1/>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Sandy" age={47} isStudent={false}/>
        <Student name="Patrick" age={50} isStudent={false}/>
        <Student name="Squidward" age={27} isStudent={true}/>
        <Student name="Larry"/>
        <UserGreeting isLoggedIn={false} username="BroCode"/>
        <UserGreeting isLoggedIn={true}/>
      </>
    );
}

export default App
