import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
  const {loading, conversations } = useGetConversations()
  console.log("CONVERSATION",conversations)
  return (
    <div className='py-2 flex-col overflow-auto'>
      {
        conversations.map((conversation,idx) => (
          <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversation.length - 1}
          />
        ))
      }
      {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default Conversations
