import { useMemo } from 'react'
import Card from '../../../components/shared/Card.jsx'
import Table from '../../../components/shared/Table.jsx'
import Badge from '../../../components/shared/Badge.jsx'
import SectionHeader from '../../../components/shared/SectionHeader.jsx'

const mockProducts = [
  {
    id: 'PRD-001',
    name: 'Premium Red Bricks',
    sku: 'BRK-PRM-1000',
    chamber: 'Premium Brick Chamber',
    stock: 8500,
    unit: 'pieces',
    moq: 500,
    price: 9,
    rating: 4.6,
    status: 'available'
  },
  {
    id: 'PRD-002',
    name: 'River Sand',
    sku: 'SND-RVR-02T',
    chamber: 'Quality Sand Suppliers',
    stock: 120,
    unit: 'tons',
    moq: 2,
    price: 1200,
    rating: 4.2,
    status: 'limited'
  },
  {
    id: 'PRD-003',
    name: 'Teak Wood Planks',
    sku: 'WD-TK-200SQFT',
    chamber: 'Timber Works',
    stock: 35,
    unit: 'bundles',
    moq: 1,
    price: 85,
    rating: 4.8,
    status: 'available'
  },
  {
    id: 'PRD-004',
    name: 'Cement (OPC 53 Grade)',
    sku: 'CEM-OPC53-50KG',
    chamber: 'Alpha Cement Distributors',
    stock: 420,
    unit: 'bags',
    moq: 50,
    price: 365,
    rating: 4.4,
    status: 'available'
  },
  {
    id: 'PRD-005',
    name: 'TMT Steel Bars (12mm)',
    sku: 'STL-TMT-12MM',
    chamber: 'SteelCo Traders',
    stock: 18,
    unit: 'tons',
    moq: 1,
    price: 53500,
    rating: 4.1,
    status: 'low'
  }
]

export default function AgentProducts() {
  const columns = useMemo(() => ([
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Product' },
    { key: 'sku', title: 'SKU' },
    { key: 'chamber', title: 'Chamber' },
    { key: 'stock', title: 'In Stock', render: (v, r) => `${v.toLocaleString()} ${r.unit}` },
    { key: 'moq', title: 'MOQ' },
    { key: 'price', title: 'Price', render: (v, r) => `₹${v.toLocaleString()} / ${r.unit}` },
    { key: 'rating', title: 'Rating' },
    {
      key: 'status',
      title: 'Status',
      render: (v) => (
        v === 'available' ? <Badge color="green">Available</Badge> :
        v === 'limited' ? <Badge color="yellow">Limited</Badge> :
        <Badge color="red">Low</Badge>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (_, r) => (
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-900">View</button>
          <button className="text-green-600 hover:text-green-900">Order</button>
        </div>
      )
    }
  ]), [])

  return (
    <div className="p-6">
      <SectionHeader
        title="Agent Products"
        subtitle="Browse products from your assigned chambers"
      />

      <div className="grid grid-cols-1 gap-6">
        <Card title="Available Inventory">
          <Table columns={columns} rows={mockProducts} rowKey="id" />
        </Card>
      </div>
    </div>
  )
}
