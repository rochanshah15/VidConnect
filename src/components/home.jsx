import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate()
    let [input,setInput] = useState("")
    function handlejoin(){
        navigate(`/room/${input}`)
    }
  return (
    <>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <label for="enterroomcode" class="w-full">
            <input type="text" name="roomcode" placeholder="Enter room code..." value={input}
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
                required onChange={(e)=>{
                    setInput(e.target.value)
                }} />
        </label>
        <button onClick={handlejoin}
            class="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-300">
            Enter Room
        </button>
    </form>
</div>
    </>
  )
}

export default Home