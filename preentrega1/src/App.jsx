import './App.css'
import Navbar from './components/Navbar/Navbar'
import CardUser from './components/CardUser/CardUser'

const App = () => {
  return (
    <div>
    <Navbar />
    <div className='UserSection'>
      <CardUser 
      name="Josefina Cardeilhac"
      date ="Se unio en Marzo 2012"
      description= "nkjfnklfnlk"
      img="http://react.semantic-ui.com/images/avatar/large/elliot.jpg"/>

<CardUser 
      name="Josefina Cardeilhac"
      date ="Se unio en Marzo 2012"
      description= "nkjfnklfnlk"
      img="http://react.semantic-ui.com/images/avatar/large/elliot.jpg"/>
      

      <CardUser 
      name="Josefina Cardeilhac"
      date ="Se unio en Marzo 2012"
      description= "nkjfnklfnlk"
      img="http://react.semantic-ui.com/images/avatar/large/elliot.jpg"/>
      
      
    </div>
    </div>
    
  )
}
export default App
