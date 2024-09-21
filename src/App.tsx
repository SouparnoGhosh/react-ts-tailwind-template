import React from "react";

const App: React.FC = () => {

  return (
    <div className="min-h-screen p-12">
      <div className="max-w-2xl bg-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Hello
        </h1>
        <p className="mb-4 text-lg font-medium text-gray-600">
          This is a template I use for React TypeScript with Tailwind CSS. It uses Vite under the hood. To use this, change
          the name in your package.json and it is yours.
        </p>
        
      </div>
    </div>
  );
};

export default App;
