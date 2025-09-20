import { useState } from "react";
import Card from "../../../components/shared/Card";
import Table from "../../../components/shared/Table";
import SectionHeader from "../../../components/shared/SectionHeader";
import Badge from "../../../components/shared/Badge";
import {
  manufacturerStats,
  productCatalog,
  recentOrders,
  menuItems,
} from "./manufacturer.mock";

function SidebarMenu({ items, selected, onSelect }) {
  return (
    <div className="w-56 bg-white rounded-lg shadow border border-gray-100 p-4 space-y-2">
      {items.map((item) => (
        <button
          key={item.key}
          className={`w-full text-left px-3 py-2 rounded font-medium transition-colors ${selected === item.key ? "bg-blue-100 text-blue-800" : "hover:bg-gray-50"}`}
          onClick={() => onSelect(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function StatGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.id}>
          <div className="text-sm text-gray-500">{stat.label}</div>
          <div className="text-xl font-bold text-gray-900">{stat.value}</div>
        </Card>
      ))}
    </div>
  );
}

const catalogColumns = [
  { key: "name", title: "Product Name" },
  { key: "sku", title: "SKU" },
  { key: "stock", title: "Stock" },
  {
    key: "status",
    title: "Status",
    render: (val) => (
      <Badge color={val === "active" ? "green" : "gray"}>{val}</Badge>
    ),
  },
];

const orderColumns = [
  { key: "product", title: "Product" },
  { key: "quantity", title: "Quantity" },
  { key: "buyer", title: "Buyer" },
  {
    key: "status",
    title: "Status",
    render: (val) => {
      let color = "gray";
      if (val === "processing") color = "yellow";
      if (val === "shipped") color = "blue";
      if (val === "pending") color = "red";
      return <Badge color={color}>{val}</Badge>;
    },
  },
];

export default function ManufacturerDashboard() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  return (
    <div className="flex gap-8">
      <SidebarMenu items={menuItems} selected={selectedMenu} onSelect={setSelectedMenu} />
      <div className="flex-1 space-y-8">
        {selectedMenu === "dashboard" && (
          <>
            <SectionHeader title="Manufacturer Dashboard" subtitle="Production metrics and catalog management." />
            <StatGrid stats={manufacturerStats} />
            <Card title="Recent Orders">
              <Table columns={orderColumns} rows={recentOrders} rowKey="id" emptyText="No recent orders" />
            </Card>
          </>
        )}
        {selectedMenu === "catalog" && (
          <>
            <SectionHeader title="Product Catalog" />
            <Card>
              <Table columns={catalogColumns} rows={productCatalog} rowKey="id" emptyText="No products" />
            </Card>
          </>
        )}
        {selectedMenu === "orders" && (
          <>
            <SectionHeader title="Orders" />
            <Card>
              <Table columns={orderColumns} rows={recentOrders} rowKey="id" emptyText="No orders" />
            </Card>
          </>
        )}
        {selectedMenu === "analytics" && (
          <>
            <SectionHeader title="Analytics" subtitle="Coming soon..." />
            <Card>Analytics features will be available soon.</Card>
          </>
        )}
        {selectedMenu === "settings" && (
          <>
            <SectionHeader title="Settings" subtitle="Manage manufacturer settings." />
            <Card>Settings features will be available soon.</Card>
          </>
        )}
      </div>
    </div>
  );
}


