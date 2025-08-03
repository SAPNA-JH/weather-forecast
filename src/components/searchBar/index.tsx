import { MapPin } from 'lucide-react';
import { useState } from 'react';


const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }) => {

    const [city, setCity] = useState("")
    
  return (
   <form onSubmit={(e) => { e.preventDefault(); onSearch(city); }} >
     <div className=' bg-gray-600 w-50 rounded-full px-73 py-2 m-4 cursor-pointer'>
         <MapPin  className='absolute left-8'/>
         <input type="text"
         className='border-none outline-none'
         value={city}
         onChange={(e) => setCity(e.target.value)}
         />
    </div>
   </form>
  )
}

export default SearchBar
