import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../checkout-form/CheckoutForm";

const Payment = () => {
  //   const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  const stripePromise = loadStripe(
    "pk_test_51M5m7jSADZVubAzgrHFuhwxrmqdG3T0Co9FuoH42GMKiWI614ILKGTBYmYzLNUfSsP6XmMdJmng0IgueV0h2DoEW00CBXheiKu"
  );

  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "{{sk_test_51M5m7jSADZVubAzgaAcrEfGnWr8ZfslPMBTYZiYqVW8Ay7Qt9OgfpsRsRlTYCmQPSeAKUawamueg4ogDw0oXfKqP00dGdokuQI}}",
  };

  //   stripe.api_key =
  //     "sk_test_51M5m7jSADZVubAzgaAcrEfGnWr8ZfslPMBTYZiYqVW8Ay7Qt9OgfpsRsRlTYCmQPSeAKUawamueg4ogDw0oXfKqP00dGdokuQI";

  //   const PaymentIntentVar = stripe.PaymentIntent.create(
  //     (amount = 2000),
  //     (currency = "usd"),
  //     (payment_method_types = ["card"])
  //   );
  //   console.log(PaymentIntentVar);

  return (
    <div>
      <h1>hello</h1>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
