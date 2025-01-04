```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let isCleanupCalled = false;
    setIsMounted(true);
    const cleanup = () => {
      console.log('Cleanup function running!');
      isCleanupCalled = true;
    };
    return () => {
      cleanup();
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log('Component is unmounting');
    };
  }, []);

  useEffect(() => {
    console.log('Effect running!');
    return () => {
      console.log('Cleanup function running!');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setIsMounted(false)}>Unmount</button>
    </div>
  );
}
```