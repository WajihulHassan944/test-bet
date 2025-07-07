import React, { useState } from 'react';
import { FaBullhorn, FaFacebookSquare, FaInstagram, FaLinkedin, FaUpload } from 'react-icons/fa';


const MakePost = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      const formData = new FormData();
      formData.append('prompt', prompt);
      if (image) formData.append('image', image);

      const response = await fetch('https://hook.us2.make.com/1k93obipongu9lt4x2cnfusfjelvwiop', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Something went wrong.');

      setSuccess(true);
      setPrompt('');
      setImage(null);
      setPreviewUrl('');
    } catch (err) {
      setError('Failed to create the post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className='poster-form-wrapped'>
     <div className="poster-form-container">
      <h2 className="poster-title">
        <FaBullhorn className="icon"  />
        AI Social Post Generator for Facebook, LinkedIn, Instagram
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your post idea (e.g., Launch Fantasy MMAadness)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
          className="text-input"
        />

        <label htmlFor="file-upload" className="custom-file-upload">
          <FaUpload className="icon" />
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {previewUrl && <img src={previewUrl} alt="Preview" className="image-preview" />}

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Posting...' : 'Generate & Post'}
        </button>
      </form>

      {success && (
        <div className="success-message">
          ✅ Post created successfully!
          <div className="links">
            <a
              href="https://www.facebook.com/profile.php?id=61577983351864"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="icon" /> View on Facebook
            </a>
            <a
              href="https://www.instagram.com/your_instagram_username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" /> View on Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/your_linkedin_or_page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" /> View on LinkedIn
            </a>
          </div>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  
   </div>
  );
};

export default MakePost;
