import { TypeTransaction } from "./TypeTransaction";

interface TransactionType extends TypeTransaction {
  id: number;
  type:<TypeTransaction>
  value: number;
  descripition: string;
}

export default TransactionType;
