/**
 * Main App Component
 * Campus Employability Portal
 */

import TrainrscrTrainingSection from './trainrscr/trainrscrTrainingSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">Campus Employability Portal</h1>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <TrainrscrTrainingSection />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Campus Employability Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
