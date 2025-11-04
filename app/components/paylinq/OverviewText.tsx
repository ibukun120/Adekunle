

const OverviewText = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-12 bg-white text-black flex flex-col space-y-8">
      <div>
        <h1 className="font-semibold text-[#008080] mb-3">
          Brief Description of Paylinq Solutions
        </h1>
        <p>
          PayLinq offers a transformative solution to these common financial
          hurdles. Our platform automates critical financial processes, such as
          cash flow management, transaction processing, and inventory tracking,
          allowing businesses to streamline operations and focus on growth.
        </p>
      </div>

      <div>
        <h1 className="font-semibold text-[#008080] mb-3">Problem Statement</h1>
        <p>
          In today's fast-paced business environment, SMEs in supply chain
          management and international trade often face hurdles due to outdated
          systems that show down growth. Managing cash flow, transactions, and
          inventory manually consumes valuable time and introduces
          inefficiencies.
        </p>
      </div>
      <div>
        <h1 className="font-semibold mb-3">Businesses struggle with:</h1>
        <ul className="list-disc ml-6">
          <li>Time-consuming manual processes</li>
          <li>Lack of real-time visibility into financial data</li>
          <li>Complex reconciliation of payments and invoices</li>
          <li>Inefficient management of outstanding debts</li>
          <li>
            Limited ability to make informed decisions based on current data
          </li>
        </ul>
      </div>

      <div>
        <p>
          These challenges prevent SMEs from focusing on core business
          activities and achieving sustainable growth.
        </p>
      </div>

      <div>
        <h1 className="font-semibold text-[#008080] mb-3">Possible Solution</h1>
        <p>
          The solution involved designing an integrated experience across the
          PayLinq mobile app, web app, and admin dashboard to bring the
          company’s core features to life. The mobile app provided users with
          direct access to their virtual accounts, enabling smooth transactions,
          instant notifications, and simplified payment tracking.
        </p>
        
      </div>

      <p>
          The web app was designed to deliver a clear and powerful dashboard
          where businesses could manage collections, view settlements, and
          analyze real-time insights for better decision-making.
        </p>
        <p>
          The admin dashboard served as a control center, equipping
          administrators with tools to oversee user activities, monitor
          integrations, and generate detailed reconciliation reports.
        </p>
        <p>
          Together, these platforms formed a scalable and consistent solution
          that translated PayLinq’s vision of seamless integration,
          transparency, and business growth into a practical, user-centered
          experience.
        </p>

      <div>
        <h1 className="font-semibold mb-3">Goals & Objectives</h1>
        <ul className="list-disc ml-6">
          <li>
            Design interfaces that make virtual accounts easy to set up and use.
          </li>
          <li>
            Provide real-time visibility into transactions and settlements.
          </li>
          <li>
            Enable businesses to integrate PayLinq seamlessly into existing
            workflows.
          </li>
          <li>
            Ensure scalability through a flexible, consistent design system
            across all platforms.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewText;
