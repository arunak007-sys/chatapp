import { useEffect, useState } from "react"
import useCoversation from "../zustand/useConversation"
import toast from "react-hot-toast"

const useGetMessages = () => {
  const [loading,setLoading] = useState()
  const {messages,setMessages,selectedConversation} = useCoversation()
  
  useEffect(() => {
    const getMessages = async () => {
        setLoading(true)
    try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`)
    const data = await res.json()
    setMessages(data)

    if(data.error){
        throw new Error(data.error)
    }
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
    }
    if(selectedConversation?._id) getMessages()
    
  },[selectedConversation?._id],setMessages)
  
  return { messages, loading }
}

export default useGetMessages
