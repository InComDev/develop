import React from 'react';
import './TextFieldLayout.css';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className="field-container">
      <label className="field-label">{label}</label>
      <input
        type="text"
        className="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Text"
      />
    </div>
  );
};

const TextFieldLayout: React.FC = () => {
  return (
    <div className="layout-container">
      <div className="column">
        {/* Basic text fields */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <TextField
            key={`basic-${i}`}
            label="Label"
            value=""
            onChange={() => {}}
          />
        ))}
      </div>
      
      <div className="column">
        {/* Fields with eye icon */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div className="field-container with-icon" key={`icon-${i}`}>
            <label className="field-label">Label</label>
            <div className="input-wrapper">
              <input
                type="text"
                className="text-input"
                placeholder="Text"
              />
              <span className="eye-icon">👁️</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="column">
        {/* Alternative style fields */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div className="field-container alt-style" key={`alt-${i}`}>
            <label className="field-label">Label</label>
            <div className="input-wrapper">
              <input
                type="text"
                className="text-input"
                placeholder="Text"
              />
              <span className="eye-icon">👁️</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="column">
        {/* Fourth column fields */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div className="field-container alt-style-2" key={`alt2-${i}`}>
            <label className="field-label">Label</label>
            <div className="input-wrapper">
              <input
                type="text"
                className="text-input"
                placeholder="Text"
              />
              <span className="eye-icon">👁️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextFieldLayout;