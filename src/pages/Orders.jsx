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
} from "@syncfusion/ej2-react-grids";
import { motion } from "framer-motion";
import { Header } from "../components";
import { useStateContext } from "../context/ContextProvider";
import { contextMenuItems, ordersData, ordersGrid } from "../data/dummy";

function Orders() {
  const { currentMode } = useStateContext();
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        style={
          currentMode === "Dark"
            ? { backgroundColor: "#33373E" }
            : { backgroundColor: "#fff" }
        }
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </motion.div>
  );
}

export default Orders;
