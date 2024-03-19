"use client";
import Image from "next/image";
import "./main.css";
import { useEffect, useState } from "react";
import Replicate from "replicate";
import axios from "axios";
const replicate = new Replicate({
  auth: 'r8_cJ1KLzZ3aCkk3B95DHVnLeIKNgXKxhj0rXmIM',
});
export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState<any[]>([  'https://replicate.delivery/pbxt/aMSv8ZyNgz6sFF22xflrV7am7rfSfpxTHVJh1DFVn4rOi4DlA/874fdd70-0634-4d30-b1a8-492948c9ecee.png',
  'https://replicate.delivery/pbxt/5a6VaCmnUf1f2kbf28BUi3xOO1ij0e9pZx6bwXvU4YsdExHKB/782f8a0d-8d29-4d24-9907-47c2fa721cbc.png',
  'https://replicate.delivery/pbxt/Tfwp25bRfLieVJtMYeCkc9yHNiUl8tvhGh1DAuUEcM3fIiPUC/b3e0673d-4471-4c30-83df-13fd8fcef82a.png'
]);
  
  const handleGenerate = async() => {
    console.log('generating...✨');
    try {
        const response = await axios.post('/api/generate', {prompt});
        const images = response.data;
        setGeneratedImages([...generatedImages, ...images]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className='main'>
      <div className="right">
        <div className="inputBox">
          <textarea
            placeholder="Enter a promp"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button onClick={handleGenerate}>generate</button>
        </div>
        <div className="images">
          {generatedImages.map((image) => (
            <img src={image} style={{width: '300px',objectFit: 'contain', height: 'fit-content'}} alt="poster" />
          ))}
        </div>
      </div>
      <div className="options">
      <div className="quality">
          <div className="radioBox">
            <input type="radio" name="qualityOption" id="option1" />
          </div>
          <input type="radio" name="qualityOption" id="option2" />
          <input type="radio" name="qualityOption" id="option3" />
      </div>
            <div className="size"></div>
            <div className="style"></div>
      </div>
    </main>
  );
}
