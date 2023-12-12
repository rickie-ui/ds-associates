import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { PiStrategy } from "react-icons/pi";
import { BsBank } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineAssessment } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa6";
import { PiTrademarkRegistered } from "react-icons/pi";

import { servicesProps } from "@/types/types";

export const services: servicesProps[] = [
  {
    id: 1,
    title: "Book Keeping Service",
    icon: LiaFileInvoiceDollarSolid,
    description:
      "Trust us with your financial records. Our bookkeeping services meticulously organize transactions, offering a detailed overview for decision-making and compliance.",
  },
  {
    id: 2,
    title: "Audit Risk & Compliance",
    icon: GiReceiveMoney,
    description:
      "Ensure the reliability of financial information and regulatory compliance with our audit risk and compliance services. Safeguard your organization's reputation through our meticulous evaluation processes.",
  },
  {
    id: 3,
    title: "Tax Consultancy",
    icon: GiTakeMyMoney,
    description:
      "Optimize your tax liabilities while ensuring compliance with tax laws. Our tax consultancy services provide professional advice to maximize benefits and minimize risks.",
  },
  {
    id: 4,
    title: "Finance",
    icon: RiMoneyDollarCircleLine,
    description:
      "We master the intricacies of Finance, guiding businesses through strategic formulation and meticulous execution. From revenue optimization to treasury and cash flow management, we ensure financial health and sustainable growth, empowering informed decision-making.",
  },
  {
    id: 5,
    title: "Strategy Formulation and Execution",
    icon: PiStrategy,
    description:
      "Our expertise lies in crafting and implementing effective strategies to achieve organizational goals.We integrate strategy formulation with execution, propelling businesses toward competitiveness and long-term success.",
  },
  {
    id: 6,
    title: "Revenue Optimization",
    icon: BsBank,
    description:
      "Explore revenue maximization with our specialized services. We identify and implement strategies to optimize income streams, ensuring efficient resource utilization and sustained profitability for your business.",
  },
  {
    id: 7,
    title: "Treasury/Cash Flow Management",
    icon: GiMoneyStack,
    description:
      "Entrust us with the oversight of your organization's liquidity. Our treasury and cash flow management expertise ensures risk mitigation, financial stability, and adequate funds for operational needs.",
  },
  {
    id: 8,
    title: "Internal Controls",
    icon: IoSettingsOutline,
    description:
      "Protect your assets and maintain financial integrity with our robust internal control mechanisms.We establish safeguards to ensure accuracy in financial reporting and promote compliance with regulations.",
  },
  {
    id: 9,
    title: "Financial Planning and Financial Analysis",
    icon: GiCash,
    description:
      "Navigate the future with confidence through our financial planning and analysis services. From creating budgets to assessing performance, we empower decision-makers with the insights needed for strategic planning.",
  },
  {
    id: 10,
    title: "Operations Management",
    icon: MdOutlineManageAccounts,
    description:
      "Optimize your processes with our operations management expertise. We implement strategies to enhance efficiency, reduce costs, and improve overall productivity within your organization.",
  },
  {
    id: 11,
    title: "IT Risk Assessments and Financial Audit",
    icon: MdOutlineAssessment,
    description:
      "Seamlessly merge technology and finance with our IT risk assessments and financial audits. Identify and mitigate potential threats, ensuring the security and accuracy of your financial data.",
  },
  {
    id: 12,
    title: "Company Registration",
    icon: PiTrademarkRegistered,
    description:
      "Establish your business with ease through our company registration services. We navigate the legal landscape to provide your organization with the recognition and identity it deserves.",
  },
  {
    id: 13,
    title: "KRA PIN Registration",
    icon: FaRegIdCard,
    description:
      "Simplify tax compliance and financial transactions with our KRA PIN registration services. We ensure your business obtains a unique identification number from the Kenya Revenue Authority.",
  },
];
