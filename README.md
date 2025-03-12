# Text Categorization Tool

A simple web-based tool that allows you to categorize lines of text into predefined categories.

## Features

- Paste multiple lines of text for categorization
- Categorize each line one at a time
- Choose from 8 predefined categories
- Use keyboard number keys (1-8) for quick categorization
- View results grouped by category
- Copy categorized results to clipboard

## Categories

- AI Governance
- Safety & Stability
- Biotech
- DSR
- Indo-Pacific
- Quantum
- Other
- Error

## How to Use

1. Open `index.html` in any modern web browser
2. Paste your text into the input area (each line will be treated as a separate item)
3. Click the "Start Categorization" button
4. For each item displayed:
   - Read the text
   - Click the appropriate category button OR press the corresponding number key (1-8)
     - 1: AI Governance
     - 2: Safety & Stability
     - 3: Biotech
     - 4: DSR
     - 5: Indo-Pacific
     - 6: Quantum
     - 7: Other
     - 8: Error
5. After categorizing all items, view the results grouped by category
6. Click "Copy Results" to copy the categorized items to your clipboard
7. Click "Start Over" to begin a new categorization session

## Example Input

```
The EU AI Act was passed with overwhelming support from member states.
Researchers identified a new vulnerability in large language models.
A breakthrough in CRISPR technology allows for more precise gene editing.
The Defense Science Board released a report on emerging technologies.
Japan and Australia signed a new defense cooperation agreement.
Quantum computing reached a new milestone with 1000-qubit processor.
The conference on AI ethics attracted participants from 45 countries.
```

## Example Output

```
AI Governance:
- The EU AI Act was passed with overwhelming support from member states.
- The conference on AI ethics attracted participants from 45 countries.

Safety & Stability:
- Researchers identified a new vulnerability in large language models.

Biotech:
- A breakthrough in CRISPR technology allows for more precise gene editing.

DSR:
- The Defense Science Board released a report on emerging technologies.

Indo-Pacific:
- Japan and Australia signed a new defense cooperation agreement.

Quantum:
- Quantum computing reached a new milestone with 1000-qubit processor.

Other:
- (No items in this category)

Error:
- (No items in this category)
```

## Technical Details

This tool uses HTML5, CSS3, and JavaScript. It works entirely in your browser and doesn't send any data to external servers.

## Browser Compatibility

Works best in modern browsers:
- Chrome
- Firefox
- Safari
- Edge 