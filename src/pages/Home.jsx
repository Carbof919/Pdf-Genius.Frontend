import Navbar from '../components/Navbar';
import Workspace from '../components/Workspace';

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Navbar />
      <Workspace />
    </div>
  );
}
