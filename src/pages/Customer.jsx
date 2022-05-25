import React from "react";
import {
  GridComponent,
  Sort,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Edit,
  ContextMenu,
  Filter,
  Page,
  Toolbar,
  Selection,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { motion } from "framer-motion";
import { Header } from "../components";

function Customers() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md"
    >
      <Header title="Customers" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        toolbar={["Delete"]}
        allowPaging
        allowSorting
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </motion.div>
  );
}

export default Customers;
