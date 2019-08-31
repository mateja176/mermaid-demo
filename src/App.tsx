import mermaid from 'mermaid';
import React from 'react';
import './App.css';

const App: React.FC = () => {
  React.useEffect(() => {
    mermaid.initialize({
      theme: 'dark',
    });
  }, []);

  const graph = `
  graph TD
    A[John]-->|manages|B(Bob)
    A-->|consults|C{Chris}
    B-->|mentors|D((Dustin))
    C-->|advises|D
    D-->|looks up to|E>Evan]
    E-->|is|A
  `;

  return (
    <div>
      <div className="mermaid" style={{ textAlign: 'center' }}>
        {graph}
      </div>
    </div>
  );
};

export default App;
