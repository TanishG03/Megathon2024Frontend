import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User, Activity, TrendingUp, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import ChatInterface from './ChatInterface';

// Profile Component
const ProfilePage = () => {
  const data = [
    { name: 'Jan', polarity: 7 },
    { name: 'Feb', polarity: -3 },
    { name: 'Mar', polarity: 5 },
    { name: 'Apr', polarity: -8 },
    { name: 'May', polarity: 9 },
    { name: 'Jun', polarity: 4 },
    { name: 'Jul', polarity: -6 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-64 relative">
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="w-40 h-40 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
            <img
              src="/api/placeholder/160/160"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 pt-24">
        {/* User Info */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Sarah Anderson</h1>
          <p className="text-gray-600">Data Scientist | Emotional Intelligence Researcher</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center p-6">
              <Activity className="w-8 h-8 text-purple-500 mr-4" />
              <div>
                <p className="text-gray-600">Average Polarity</p>
                <p className="text-2xl font-bold">+4.5</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center p-6">
              <TrendingUp className="w-8 h-8 text-pink-500 mr-4" />
              <div>
                <p className="text-gray-600">Peak Intensity</p>
                <p className="text-2xl font-bold">9.0</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center p-6">
              <MessageCircle className="w-8 h-8 text-red-500 mr-4" />
              <div>
                <p className="text-gray-600">Total Entries</p>
                <p className="text-2xl font-bold">127</p>
              </div>
            </div>
          </div>
        </div>

        {/* Polarity Graph */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Polarity Intensity Over Time</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[-10, 10]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="polarity"
                    stroke="url(#colorGradient)"
                    strokeWidth={2}
                    dot={{ stroke: '#8b5cf6', strokeWidth: 2, r: 6, fill: 'white' }}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Component
// const HomePage = () => {
//   return (
//     <>
//       {/* Gradient Section */}
//       <div class="h-[60vh] w-full flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-400/50 to-purple-500/60">        
//       <h2 className="text-9xl font-bold text-white" style={{ fontFamily: 'Bodoni Moda, serif' }}>
//           KEEP CALM
//         </h2>
//       </div>
//       {/* Hello Section */}

//     </>
//   );
// };

const HomePage = () => {
  return (
    <>
      {/* Gradient Section */}
      <div className="h-[60vh] w-full flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-400/50 to-purple-500/60">        
        <h2 className="text-9xl font-bold text-white" style={{ fontFamily: 'Bodoni Moda, serif' }}>
          KEEP CALM
        </h2>
      </div>
      
      {/* Split Section */}
      <div className="h-[60vh] w-full flex">
        {/* Left Half */}
        <div
          className="w-1/2 flex items-center justify-center text-white p-8"
          style={{
            backgroundImage: 'url("https://www.birdlife.org/wp-content/uploads/2021/03/shutterstock_1391959514-1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p className="text-7xl font-semibold">
            MEDIDATE
          </p>
        </div>

        {/* Right Half */}
        <div
          className="w-1/2 flex items-center justify-center text-white p-8"
          style={{
            backgroundImage: 'url("https://i0.wp.com/opendoorsopenhearts.com/wp-content/uploads/2023/10/Natural_Fall_decorations.jpg?resize=682%2C1024&ssl=1")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p className="text-7xl font-semibold">
            CHAT
          </p>
        </div>
      </div>
    </>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow mt-2 mb-2">
        <div className="flex justify-between items-center p-4">
          <div className="flex space-x-4">
            <span 
              className="cursor-pointer hover:text-purple-500 transition-colors"
              onClick={() => setCurrentPage('home')}
            >
              Home
            </span>
          </div>
          <div className="flex space-x-4">
            <span 
              className="cursor-pointer hover:text-purple-500 transition-colors"
              onClick={() => setCurrentPage('profile')}
            >
              Profile
            </span>
            <span 
              className="cursor-pointer hover:text-purple-500 transition-colors"
              onClick={() => setCurrentPage('chat')}
            >
              Chat
            </span>
          </div>
          
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' ? <HomePage /> : null}
      {currentPage === 'profile' ? <ProfilePage /> : null}
      {currentPage === 'chat' ? <ChatInterface /> : null}
    </div>
  );
}

export default App;
