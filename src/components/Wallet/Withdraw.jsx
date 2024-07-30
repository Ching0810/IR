import ButtonSubmit from "../ButtonSubmit";
import InputAmount from "../InputAmount";
import InputBankAccount from "../InputBankAccount";

const Withdraw = () => {
  return (
    <div className="w-full md:w-2/5 bg-black flex flex-col justify-center p-10 sm:px-16 space-y-10">
      <div className="text-left space-y-6">
        <div className="text-3xl text-white font-medium">
          Withdraw
        </div>
        <div className="text-base text-white">
          Choose from local payment methods, cards, E-wallets and more.
        </div>
      </div>
      <div className="space-y-24">
        <div className="space-y-10">
          <InputAmount />
          <InputBankAccount />
        </div>
        <ButtonSubmit />
      </div>
    </div>
  );
};

export default Withdraw;