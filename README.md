# VideoCall Web App

This is a **React-based video call web application** built using **ZegoCloud**. It enables users to create and join video rooms seamlessly.

## 🚀 Features
- Video calling using **ZegoCloud**
- Create or join video rooms via a unique **Room ID**
- **React Router** for navigation
- Responsive design using **Tailwind CSS**

## 🛠️ Tech Stack
- **React.js** (Frontend)
- **ZegoCloud SDK** (Video streaming)
- **React Router** (Routing)
- **Tailwind CSS** (Styling)

## 📂 Project Structure
```
/src
 ├── components
 │   ├── home.jsx         # Homepage to enter Room ID
 │   ├── videoroom.jsx    # Video call interface
 ├── App.jsx              # Main App component with routes
 ├── main.jsx             # React entry point
 ├── index.css            # TailwindCSS styling
 ├── App.css              # Additional styles
```

## 🔧 Setup & Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/videocall-app.git
   cd videocall-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up ZegoCloud API Key**  
   - Sign up on [ZegoCloud](https://www.zegocloud.com/)
   - Get your **App ID** and **Server Secret**
   - Add them to your `.env` file:
     ```
     VITE_ZEGO_APP_ID=your_app_id
     VITE_ZEGO_SERVER_SECRET=your_server_secret
     ```

4. **Run the application**
   ```sh
   npm run dev
   ```

## 🎥 Usage
- Open the app and enter a **Room ID**.
- Share the Room ID with others to join the same call.
- Enjoy a seamless video calling experience!

## 📜 License
This project is open-source under the **MIT License**.

---

🔗 **Connect with me**:  
📧 Email: [your-email@example.com]  
🔗 GitHub: [your-github-profile](https://github.com/yourusername)  

