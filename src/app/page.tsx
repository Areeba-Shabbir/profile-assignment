// app/page.tsx
import '../styles/global.css';  // Ensure the path is correct
import Profile from './components/portfolio/page';  // Correct the path to the Profile component

export default function Page() {
  return (
    <div className="container">
      <Profile />
    </div>
  );
}
