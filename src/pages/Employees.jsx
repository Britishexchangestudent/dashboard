import {
  GridComponent,
  Sort,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { motion } from "framer-motion";
import { Header } from "../components";
import { useStateContext } from "../context/ContextProvider";
import {
  contextMenuItems,
  employeesData,
  employeesGrid,
  ordersData,
  ordersGrid,
} from "../data/dummy";

function Employees() {
  const { currentMode } = useStateContext();
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header title="Employees" category="Page" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        style={
          currentMode === "Dark"
            ? { backgroundColor: "#33373E" }
            : { backgroundColor: "#fff" }
        }
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
      </GridComponent>
    </motion.div>
  );
}

export default Employees;
