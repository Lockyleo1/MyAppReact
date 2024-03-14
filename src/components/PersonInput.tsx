// PersonInput.tsx

import React, { useState } from 'react';

export default function PersonInput({ onSave }: { onSave: (person: { name: string; surname: string }) => void }) {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');

  const Save = () => {
    onSave({ name, surname });
    setName('');
    setSurname('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cognome"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <button onClick={Save}>Salva</button>
    </div>
  );
}