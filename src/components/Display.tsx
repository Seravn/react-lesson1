import './display.css'
import Pic from '../imgs/pic.jpg'
import CountriesFuture from './CountriesFuture'
import CountriesPast from './CountriesPast'





const Display = () => {


    return (
        <>
        <h1>Mina Destinationer</h1>

        <div className="container">
<div className ="search-container">
 <input type="text" placeholder="Lägg till..." className='placeh'/>
 <button>OK</button>
<div className ="checkbox">
 <input type="checkbox" />
 Vill resa
 </div>


 <div className="checkbox">
 <input type="checkbox" />
 Har rest
 </div>

</div>

<CountriesFuture></CountriesFuture>

 <CountriesPast></CountriesPast>
 

</div>

        </>
    )
    
}

export default Display

