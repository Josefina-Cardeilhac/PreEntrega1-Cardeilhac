import './App.css'
import Header from './components/Header/Header'
import CardUser from './components/CardUser/CardUser'

const App = () => {
  return (
    <div>
    <Header />
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
