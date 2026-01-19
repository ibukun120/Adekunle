import React from "react";

const Text2 = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-10 px-4 md:px-12 lg:px-24 py-8 md:py-16">
      <div>
        <h1 className="text-[#008000] text-2xl 2xl:text-3xl font-semibold">
          The Vision:
        </h1>
        <p className="leading-7 text-base 2xl:text-[21.53px] mt-4">
          Safehold Escrow is more than a payment platform. It is a trust-driven
          escrow solution built to protect buyers and sellers, simplify
          transactions, and eliminate uncertainty in digital and offline
          exchanges.
        </p>
      </div>

      <div>
        <h1>Safehold was created to:</h1>
        <ul className="list-disc ml-6 text-base 2xl:text-[21.53px]">
          <li className="mt-2">
            Facilitate secure escrow payments between transacting parties.
          </li>
          <li className="mt-2">
            Hold funds safely until agreed transaction conditions are met.
          </li>
          <li className="mt-2">
            Reduce fraud and disputes through structured, rule-based workflows.
          </li>

          <li className="mt-2">
            Enable transparent tracking of transaction status for all parties.
          </li>
          <li className="mt-2">
            Empower individuals and businesses to transact confidently at any
            scale.
          </li>
        </ul>
      </div>

      <div>
        <p>
          To deliver on this mission, Safehold required a mobile app and web app
          that made secure transactions simple, intuitive, and reassuring for
          users, as well as an admin dashboard that provided full visibility,
          dispute management, and operational control.
        </p>
      </div>

      <div>
        <p>
          The product experience needed to balance ease of use with robust
          security, clearly guide users through escrow flows, and reinforce
          Safehold’s role as a neutral, reliable intermediary in every
          transaction.
        </p>
      </div>
    </div>
  );
};

export default Text2;
