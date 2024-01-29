import react, { createContext, useContext } from "react";
import { fakePosts } from '../database/data'
 
//fake posts its like an fetching data from database for 
//posts that the user can see

export type FakePosts = typeof fakePosts 

export const AppContext = createContext<FakePosts>([])

interface Props {
  children : react.ReactNode
}

export const FeedContext = (props : Props) => {
  
  return (
    <AppContext.Provider value={fakePosts}>
      {props.children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => {
  const context = useContext(AppContext)
  return context //it consumes the context of app 
}

//abracar a aplicacao com esse context