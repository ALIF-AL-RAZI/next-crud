"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const AddTopic = () => {
  const router = useRouter(); // Initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    // Validate input
    if (!inputs.title || !inputs.desc) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: inputs.title, desc: inputs.desc }), // Use the inputs
      });

      if (res.ok) {
        router.push("/"); // Navigate back to home on success
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className='flex justify-between flex-col mt-10 gap-10' onSubmit={handleSubmit}>
        <input name='title' id='title' className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Title ' />
        <input name='desc' id='desc' className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Description' />
        <button type='submit' className='bg-gray-600 px-5 py-2 rounded-md'>Add Topic</button>
      </form>
    </div>
  );
}

export default AddTopic;
