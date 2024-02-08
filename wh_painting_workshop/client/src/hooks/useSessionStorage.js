import { useState } from 'react';

const useSessionStorage = (key, defaultValue) => {
    const [ storedValue, setStoredValue ] = useState(() =>{
        try { 
            const value = sessionStorage.getItem(key)
            
            if(value) {
                return JSON.parse(value)
            } else {
              sessionStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue;
            }
        } catch(error){
            return defaultValue;
        }
    })


    const setValue = (newValue) =>{
        try { 
          sessionStorage.setItem(key, JSON.stringify(newValue))
        } catch (error){
            console.log(error)
        }
        setStoredValue(newValue)
    }

  return [ storedValue, setValue ]
}

export default useSessionStorage