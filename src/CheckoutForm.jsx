import { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [publicApiKey, setPublicApiKey] = useState('');

  useEffect(() => {
    fetch("http://localhost:4242/get-public-key")
      .then((response) => {
        if (response.status === 200) {
          return response.json()
            .then((data) => {
              setPublicApiKey(data.publicApiKey);
              console.log("Success parsing JSON");
            })
            .catch((jsonError) => {
              console.error("Error parsing JSON:", jsonError);
            });
        } else {
          throw new Error('Server is not responding');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
            .then((data) => {
              setClientSecret(data.clientSecret);
              console.log("Checkout Session");
            })
            .catch((jsonError) => {
              console.error("Error parsing JSON:", jsonError);
            });
        } else {
          throw new Error('Server is not responding');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="checkout">
      Checkout Page
      {clientSecret && publicApiKey && (
        <EmbeddedCheckoutProvider
          stripe={loadStripe(publicApiKey)}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}

export default CheckoutForm;
