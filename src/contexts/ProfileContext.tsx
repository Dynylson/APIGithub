import { createContext, useContext, ReactNode } from 'react'

interface ChildrenProps {
  children: ReactNode
}

const Context = createContext({})

export const ProfileContextProvider = ({ children }: ChildrenProps) => {
  const user = {
    login: 'Dynylson',
    avatar_url: 'https://avatars.githubusercontent.com/u/94336147?v=4',
    followers: 9,
    following: 18,
    company: 'ETE - PE',
    blog: '',
    location: 'Brazil',
  }

  return <Context.Provider value={user}>{children}</Context.Provider>
}

export const ProfileContext = () => {
  const context = useContext(Context)

  return context
}
