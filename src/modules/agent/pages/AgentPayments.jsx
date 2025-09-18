import { useMemo } from 'react'
import Card from '../../../components/shared/Card.jsx'
import SectionHeader from '../../../components/shared/SectionHeader.jsx'
import Table from '../../../components/shared/Table.jsx'
import Badge from '../../../components/shared/Badge.jsx'

const mockPayments = [
  { id: 'PMT-1001', invoice: 'INV-9001', chamber: 'Alpha Cement Distributors', amount: 36500, mode: 'UPI', date: '2024-01-10', status: 'received' },
  { id: 'PMT-1002', invoice: 'INV-9002', chamber: 'SteelCo Traders', amount: 107000, mode: 'Bank Transfer', date: '2024-01-12', status: 'pending' },
  { id: 'PMT-1003', invoice: 'INV-9003', chamber: 'Premium Brick Chamber', amount: 18000, mode: 'Cash', date: '2024-01-15', status: 'reconciled' },
  { id: 'PMT-1004', invoice: 'INV-9004', chamber: 'Quality Sand Suppliers', amount: 2400, mode: 'UPI', date: '2024-01-16', status: 'received' }
]

const statusColor = (s) => (s === 'received' ? 'green' : s === 'reconciled' ? 'blue' : 'yellow')

export default function AgentPayments() {
  const columns = useMemo(() => ([
    { key: 'id', title: 'Payment ID' },
    { key: 'invoice', title: 'Invoice' },
    { key: 'chamber', title: 'Chamber' },
    { key: 'amount', title: 'Amount', render: (v) => `₹${v.toLocaleString()}` },
    { key: 'mode', title: 'Mode' },
    { key: 'date', title: 'Date' },
    { key: 'status', title: 'Status', render: (v) => <Badge color={statusColor(v)}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge> }
  ]), [])

  return (
    <div className="p-6">
      <SectionHeader title="Payment Entry" subtitle="Record and track payments" />
      <Card title="Recent Payments">
        <Table columns={columns} rows={mockPayments} rowKey="id" />
      </Card>
    </div>
  )
}


