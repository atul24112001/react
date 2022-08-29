import { useState, useCallback } from 'react'

export default function useHttp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(requestConfig.url, {
              method: requestConfig.method ? requestConfig.method : "GET",
              body: requestConfig.body ? JSON.stringify(requestConfig.body) : {},
              headers: requestConfig.headers ? requestConfig.headers : null
          })
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
          applyData(data);
        } catch (error) {
          setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false);
      }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
}
