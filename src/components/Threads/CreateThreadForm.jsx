import React, { useState } from 'react';
import { createThread } from '../../api/api'; // import API function

function CreateThreadForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createThread(title, body, category);
      console.log(response); // handle success
    } catch (error) {
      console.error(error); // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit">Create Thread</button>
    </form>
  );
}

export default CreateThreadForm;
