import React, { useState } from 'react';

const MakePost = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      const response = await fetch('https://hook.eu2.make.com/ds7t5v2lera2kwndolr2xjvmx1it3okr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('Something went wrong.');

      setSuccess(true);
      setPrompt('');
    } catch (err) {
      setError('Failed to create the post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="poster-form-container">
      <h2>📣 AI Social Post Generator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your post idea (e.g., Launch Fantasy MMAadness)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Posting...' : 'Generate & Post'}
        </button>
      </form>

      {success && (
        <div className="success-message">
          ✅ Post created!  
          <a
            href="https://www.facebook.com/profile.php?id=61577983351864"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Facebook
          </a>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default MakePost;
