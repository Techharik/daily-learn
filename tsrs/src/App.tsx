
import { Suspense, useReducer } from 'react'
import './App.css'
import StateTyping from './challange/TypeScript/1StateTyping'
import ComplexTyping from './challange/TypeScript/2ComplexTyping'
import TodoTyping from './challange/TypeScript/3TodoTyping'
import FormTyping from './challange/TypeScript/4FormTyping'
import ContactForm from './challange/TypeScript/5ContactFrom'
import EventHandlingTyping from './challange/TypeScript/6EventHandleTyping'
import reducer from './challange/TypeScript/context/Reducer'
import HookForm from './challange/ReactHookForm/HookForm'
import FetchTodo from './challange/React19/FetchTodo'
import { Sidebar } from 'lucide-react'
import SidebarComponnet from './challange/Project/Ecomm/componnets/Sidebar'

function App() {
  // const [count] = useReducer(reducer, { count: 0 })
  return (
    <>
      {/* <StateTyping /> */}
      {/* <ComplexTyping /> */}
      {/* <TodoTyping /> */}
      {/* <FormTyping />
      <ContactForm /> */}
      {/* <EventHandlingTyping /> */}
      {/* //react Hooks */}
      {/* <HookForm />
       */}
      {/* <Suspense>
        <FetchTodo />
      </Suspense> */}



      {/* Project */}

      <div style={{ fontFamily: "sans-serif" }}>
        <SidebarComponnet />
      </div>
    </>
  )
}

export default App
