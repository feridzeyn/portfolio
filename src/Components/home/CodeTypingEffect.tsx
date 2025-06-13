import { Typewriter } from 'react-simple-typewriter'

export default function CodeTypingEffect() {
	const code = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /> 
  <title>Portfolio</title>
</head>
<body>
  <h1>Welcome to My Portfolio</h1>
  <button class="button">Hire Me</button>
  <script>
    document.querySelector('.button').addEventListener('click', () => {
      alert('Thank you!');
    });
  </script>
</body>
</html>
`;
	return (
		<>
			<div style={{
				backgroundColor: '#1e1e1e',
				color: '#f87f7f',
				fontFamily: 'monospace',
				padding: '20px',
				borderRadius: '8px',
				boxShadow: '0 0 10px rgba(255,77,0,0.5)',
				width: '100%',
				whiteSpace: 'pre-wrap',
				overflowWrap: 'break-word',
				wordWrap: 'break-word',
				margin: '0 auto',
				boxSizing: 'border-box'
			}}>
				<Typewriter
					words={[code]}
					loop={10}
					cursor
					cursorStyle='|'
					typeSpeed={80}
					deleteSpeed={40}
					delaySpeed={2500}
				/>
			</div>
		</>
	)
}
