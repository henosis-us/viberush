# Vibe Rush - Top-Down Multiplayer Physics Shooter

## The Challenge

Vibe Rush is a web-based top-down physics shooter created for the 2025 Vibe Coding Game Jam. The challenge was to build an instantly-loading, mobile-friendly multiplayer game that works directly in web browsers without any downloads or sign-ups. The game had to be at least 80% AI-coded and support multiple players in real-time combat. The biggest technical hurdles included implementing smooth physics on mobile devices, ensuring cross-device compatibility, and creating a fast-loading experience while maintaining the security of a server-authoritative game model.

---

# Vibe Rush

A lightning-fast, mobile-first multiplayer top-down physics shooter that runs directly in your browser. Aim, shoot, and survive against other players in frenetic free-for-all battles.

![Vibe Rush Gameplay Screenshot](https://viberush.henosis.us/assets/images/gameplay-preview.png)

## 🎮 Play Now

**[Play Vibe Rush](https://viberush.henosis.us)**

No downloads, no signups - just tap and play!

## ✨ Features

- **Instant Loading**: Jump into gameplay in under 1 second
- **Mobile Optimized**: Designed specifically for touchscreens with intuitive dual-stick controls
- **Real-Time Multiplayer**: Battle up to 7 other players simultaneously
- **Physics-Based Combat**: Projectiles ricochet and maintain momentum
- **Power-Ups**: Collect bonuses to enhance speed, damage, and health
- **Cross-Platform**: Play on any device with a modern browser

## 🛠️ Technology Stack

- **Frontend**: React + ThreeJS, with NippleJS for mobile controls
- **Backend**: Python with FastAPI WebSockets
- **Deployment**: Nginx + Gunicorn

## 🧠 How It's Made

This game was created for the 2025 Vibe Coding Game Jam where over 80% of the code was written by AI, focusing on delivering a high-performance, low-latency multiplayer experience for mobile web browsers.

## 🚀 Development

### Prerequisites
- Python 3.9+
- Node.js 18+
- npm/yarn

### Setup and Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vibe-rush.git
   cd vibe-rush
   ```

2. Set up and run the backend:
   ```
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

3. Set up and run the frontend (in a separate terminal):
   ```
   cd frontend
   npm install
   npm run dev
   ```

4. Visit `http://localhost:3000` in your browser

### Building for Production

1. Build the frontend:
   ```
   cd frontend
   npm run build
   ```

2. Configure the backend to serve the static files and run with Gunicorn

## 📝 License

MIT License

## 🙏 Acknowledgments

- Created for the [2025 Vibe Coding Game Jam](https://twitter.com/GameJam2025)
- Dual joystick controls powered by [NippleJS](https://github.com/yoannmoinet/nipplejs)
- 3D rendering with [Three.js](https://threejs.org/)

Feel free to star the repo if you enjoy the game!