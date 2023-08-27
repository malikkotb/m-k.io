import React from "react";
import { HiCode } from "react-icons/hi";
import { GiBasketballBasket } from "react-icons/gi";
export default function AboutPage() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Malik Kotb</h1>
        <p className="max-w-sm text-gray-600 mx-auto text-center">
          Software engineer who loves building cool things with code
          <HiCode className="inline" />. In addition to coding, I enjoy reading
          📚, playing basketball
          <GiBasketballBasket className="inline text-xl text-black" /> and
          lifting weights 🏋🏾.
        </p>
      </div>
    </div>
  );
}
