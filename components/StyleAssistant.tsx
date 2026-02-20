import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const StyleAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);

  const getStyleAdvice = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert style consultant for "The Midnight Shear", a high-end boutique barbershop. Based on this request: "${prompt}", recommend one of our core services (Signature Cut, Sculpted Beard, or Traditional Shave) and explain why in a sophisticated, professional, and slightly poetic tone. Be concise.`,
      });
      setAdvice(response.text);
    } catch (error) {
      console.error(error);
      setAdvice("It seems the connection is a bit tangled. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1f2c3d] p-8 rounded-lg border border-[#c29c5e]/30 shadow-2xl">
      <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">The Grooming Consultant</h3>
      <p className="text-[#f5f1e6]/70 mb-6 text-sm italic">Define your intent and let our AI-driven insights pair you with the perfect service.</p>
      
      <div className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your current look and your desired outcome..."
          className="w-full bg-[#1a2433] border border-[#c29c5e]/30 rounded-md p-3 text-[#f5f1e6] placeholder-[#f5f1e6]/30 focus:outline-none focus:border-[#c29c5e] min-h-[100px]"
        />
        
        <button
          onClick={getStyleAdvice}
          disabled={loading}
          className="w-full border border-[#c29c5e] text-[#c29c5e] py-3 rounded-full hover:bg-[#c29c5e] hover:text-white transition-all font-bold tracking-widest text-xs uppercase"
        >
          {loading ? 'Analyzing your profile...' : 'Get Recommendation'}
        </button>

        {advice && (
          <div className="mt-6 p-4 bg-[#1a2433] border-l-4 border-[#c29c5e] rounded animate-fade-in">
            <p className="italic text-[#f5f1e6] text-sm leading-relaxed whitespace-pre-wrap">{advice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleAssistant;