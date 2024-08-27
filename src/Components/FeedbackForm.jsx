import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

    // Function to handle form submission
  const handleChange = (event) => {
     // Extract name and value from event target object (input element) and store in variables name and value respectively
    const { name, value } = event.target;
    // Update formData state with the new data
    setFormData({
      // The spread operator (...) is used in the handleChange function to create a shallow copy of the existing formData state. This ensures that the previous state is preserved while updating the state with new data
        ...formData, // Spread operator to retain existing key-value pairs
        [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
        Rating: ${formData.rating}
    `;

    const isConfirmed =  window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
        console.log('Submiting feedback:', formData);
        // Clear form data
        setFormData({
            name: '',
            email: '',
            feedback: '',
            rating: ''
        });
        alert('Thank you for your feedback!');
    }
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
    <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
        />

        <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
        />

        <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
        ></textarea>

        <div style={{display: 'flex', gap: '10px', flexDirection: 'column'}}>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                /> 1 </p>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={handleChange}
                /> 2 </p>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={handleChange}
                /> 3 </p>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={handleChange}
                /> 4 </p>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={handleChange}
                /> 5 </p>
        </div>

        <button type="submit">Submit Feedback</button>

    </form>
    </>
  )
      ;
};

export default FeedbackForm;
