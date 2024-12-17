```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/my-route');
    // Some other logic here...
  };

  return (
    <button onClick={handleClick}>Go to My Route</button>
  );
}

export default MyComponent; 
```