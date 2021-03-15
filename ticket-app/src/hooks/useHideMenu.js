import {useContext, useEffect} from 'react'
import {UiContext} from "../context/UiContext";

export const useHideMenu = (hide) =>{
    const {showMenu, disableMenu} = useContext(UiContext)

    useEffect(()=>{
        if(hide){
            disableMenu()
        }else{
            showMenu()
        }
    },[hide, disableMenu, showMenu])

}
