import InputAmount from "../InputAmount";

const Balance = () => {
  return (
    <div className="w-full md:w-2/5 bg-black flex flex-col justify-center p-10 sm:px-16 space-y-10">
      <div className="text-left space-y-6">
        <div className="text-3xl text-white font-medium">
          Balance
        </div>
        <div className="text-base text-white">
          Choose from local payment methods, cards, E-wallets and more.
        </div>
      </div>
      <div className="space-y-24">
        <div className="space-y-10 pb-28">
          <InputAmount />
          <table id="table-auto" className="text-white w-full">
            <thead>
              <tr>
                <th className="uppercase text-left w-1/3">Date</th>
                <th className="uppercase text-left w-1/3">Amount</th>
                <th className="uppercase text-left w-1/3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-01-14</td>
                <td>-99,999.00</td>
                <td className="uppercase">Failed</td>
              </tr>
              <tr>
                <td>2024-01-14</td>
                <td>+99,999.00</td>
                <td className="uppercase">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Balance;