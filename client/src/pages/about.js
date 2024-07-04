
import { useRouter } from 'next/router'

const AboutPage = () => {
    const router = useRouter()
    return (
      <div>
        <h1>Welcome to About Page</h1>
        <p>Here you can find out more about us</p>
    </div>
    );
  };
  
  export default AboutPage;
  