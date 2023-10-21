'use client'

import { db } from '@firebase'
import { PlusIcon, ListBulletIcon  } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function NewChat() {
  const router = useRouter()
  const { data: session } = useSession()

  const createNewChat = async() =>{
     const doc = await addDoc(
        collection(db, 'users', session?.user?.email!, 'chats'), {
          userId: session?.user?.email,
          createdAt: serverTimestamp()
        }     
     );
      router.push(`/chat/${doc.id}`)
  }
  return (
   <div style={{flex:1}} className='flex items-center space-x-2 flex-wrap'>
      <div onClick={createNewChat} style={{flex:0.9}} className='border-gray-700 border items-center chatRow text-white'>
    <PlusIcon className="h-4 w-4 text-gray-200" />
    <p>New Chat</p>
    </div>

    <div style={{flex:0.1}} className='border-gray-700 border chatRow text-white'>
    <ListBulletIcon  className="h-4 w-4 text-gray-200" />
     </div>
   </div>
  )
}

export default NewChat
