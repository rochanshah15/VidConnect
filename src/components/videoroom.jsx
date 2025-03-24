import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from 'react-router-dom';

function Videoroom() {
    let { roomid } = useParams();

    const myMeeting = async (element) => {
        const appID = 2059085782;
        const serverSecret = "e252a109c5375a6b660e7cbbca14940b"; // Ensure this is a string

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, serverSecret, roomid, Date.now().toString(), "Rochan Shah"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:5173/room/${roomid}`
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, 
            },
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-4 text-center">🔹 Welcome to the Video Room</h1>

            {/* Video Container */}
            <div className="w-full max-w-4xl h-[70vh] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div ref={myMeeting} className="w-full h-full" />
            </div>

            {/* Copy Link Button */}
            <button 
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
                onClick={() => navigator.clipboard.writeText(`http://localhost:5173/room/${roomid}`)}
            >
                📋 Copy Invite Link
            </button>
        </div>
    );
}

export default Videoroom;
