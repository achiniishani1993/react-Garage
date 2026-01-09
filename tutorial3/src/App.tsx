import Counter from "./components/Counter"
import Logout from "./components/Logout"
import Timer from "./components/Timer"

const App = () => {
  return (
    <div className="pb-4">
     <div className="pb-4"> 
      <Counter/>
    </div>
    
       <Timer/>
       <Logout/>
    </div>
  )
}

export default App